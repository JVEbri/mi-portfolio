// Estado del idioma
let currentLang = 'es';

// Animaciones iniciales
gsap.from("#header-name", { opacity: 0, y: -30, duration: 0.8 });
gsap.from("#header-role", { opacity: 0, y: 10, duration: 0.6, delay: 0.1 });

// Sistema de idiomas
function switchLanguage(lang) {
  currentLang = lang;
  
  // Actualizar botones de idioma
  document.getElementById('lang-es').className = lang === 'es' 
    ? 'px-2 py-1 text-xs rounded bg-cyan-600 text-white' 
    : 'px-2 py-1 text-xs rounded bg-gray-700 text-gray-300 hover:bg-gray-600';
  document.getElementById('lang-en').className = lang === 'en' 
    ? 'px-2 py-1 text-xs rounded bg-cyan-600 text-white' 
    : 'px-2 py-1 text-xs rounded bg-gray-700 text-gray-300 hover:bg-gray-600';
  
  // Actualizar textos con data attributes
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  
  // Recargar contenido dinámico
  renderAbout();
  renderExperiences();
  renderSkills();
}

// Event listeners para cambio de idioma
document.getElementById('lang-es').addEventListener('click', () => switchLanguage('es'));
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));

// ScrollTrigger para animaciones al scrollear
if (window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ toggleActions: "play none none reverse" });

  gsap.from("#about h2", {
    opacity: 0,
    y: 10,
    duration: 0.6,
    scrollTrigger: { trigger: "#about", start: "top 80%" },
  });
  gsap.from("#about-content > *", {
    opacity: 0,
    y: 12,
    duration: 0.5,
    stagger: 0.08,
    scrollTrigger: { trigger: "#about", start: "top 75%" },
  });

  gsap.from("#experiences h2", {
    opacity: 0,
    y: 10,
    duration: 0.6,
    scrollTrigger: { trigger: "#experiences", start: "top 80%" },
  });
  gsap.from("#experiences-list > article", {
    opacity: 0,
    y: 14,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: { trigger: "#experiences", start: "top 75%" },
  });

  gsap.from("#projects h2", {
    opacity: 0,
    y: 10,
    duration: 0.6,
    scrollTrigger: { trigger: "#projects", start: "top 80%" },
  });
}

// Renderizado dinámico de contenido
document.addEventListener('DOMContentLoaded', function() {
  renderAbout();
  renderExperiences();
  renderSkills();
});

async function renderAbout() {
  try {
    const res = await fetch(`data/about_${currentLang}.json`);
    const about = await res.json();

    const headerName = document.getElementById("header-name");
    const headerRole = document.getElementById("header-role");
    if (headerName && about.name) {
      headerName.textContent = about.name;
    }
    if (headerRole && about.role) {
      headerRole.textContent = about.role;
    }

    const container = document.getElementById("about-content");
    if (!container) return;
    container.innerHTML = "";

    if (about.location) {
      const loc = document.createElement("p");
      loc.className = "text-gray-400";
      loc.textContent = about.location;
      container.appendChild(loc);
    }

    (about.summary || []).forEach((text) => {
      const p = document.createElement("p");
      p.className = "text-gray-300 leading-relaxed";
      p.textContent = text;
      container.appendChild(p);
    });

    // Actualizar links en el header
    const headerLinks = document.getElementById("header-links");
    if (headerLinks && (about.links || []).length) {
      headerLinks.innerHTML = "";
      about.links.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "px-3 py-1 rounded-full bg-gray-800 text-cyan-400 ring-1 ring-cyan-600 hover:bg-gray-700 transition";
        a.textContent = link.label;
        headerLinks.appendChild(a);
      });
    }

    // Eliminamos las animaciones duplicadas que pueden estar causando problemas
  } catch (err) {
    console.error(`Error cargando about_${currentLang}.json`, err);
  }
}

async function renderExperiences() {
  try {
    const res = await fetch(`data/experiences_${currentLang}.json`);
    const experiences = await res.json();

    const list = document.getElementById("experiences-list");
    if (!list) return;
    list.innerHTML = "";

    experiences.forEach((exp) => {
      const article = document.createElement("article");
      article.className = "p-6 h-full rounded-lg bg-gray-800 ring-1 ring-gray-700 hover:ring-cyan-500/50 transition-all duration-300 flex flex-col";

      article.innerHTML = `
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-semibold text-white">${exp.title}</h3>
          <span class="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full font-medium">${exp.period || ""}</span>
        </div>
        <p class="text-gray-300 mb-6 flex-grow leading-relaxed">${exp.description || ""}</p>
      `;
      list.appendChild(article);
    });

    // Eliminamos las animaciones duplicadas que pueden estar causando problemas
  } catch (err) {
    console.error(`Error cargando experiences_${currentLang}.json`, err);
  }
}

async function renderSkills() {
  try {
    console.log('Iniciando renderSkills');
    const response = await fetch(`data/skills_${currentLang}.json`);
    const skills = await response.json();
    console.log('Skills cargadas:', skills);

    const container = document.getElementById('header-skills');
    console.log('Contenedor encontrado:', container);
    
    if (!container) {
      console.error('No se encontró el contenedor header-skills');
      return;
    }

    container.innerHTML = '';
    container.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6';

    skills.forEach((skill, index) => {
      console.log('Card creada para:', skill.name);
      
      // Crear la card principal
      const card = document.createElement('div');
      card.className = 'skill-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 cursor-pointer group';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px) scale(0.9)';
      
      // Icono o inicial de la tecnología
      const icon = document.createElement('div');
      icon.className = 'w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300';
      icon.textContent = skill.name.charAt(0).toUpperCase();
      
      // Nombre de la tecnología
      const name = document.createElement('h3');
      name.className = 'text-white text-sm font-semibold text-center mb-2 group-hover:text-cyan-400 transition-colors duration-300';
      name.textContent = skill.name;
      
      // Nivel de habilidad
      const levelContainer = document.createElement('div');
      levelContainer.className = 'w-full';
      
      const levelText = document.createElement('div');
      levelText.className = 'text-xs text-gray-400 text-center mb-1';
      levelText.textContent = `${skill.level}%`;
      
      // Barra de progreso
      const progressBar = document.createElement('div');
      progressBar.className = 'w-full bg-gray-700 rounded-full h-2 overflow-hidden';
      
      const progressFill = document.createElement('div');
      progressFill.className = 'h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out';
      progressFill.style.width = '0%';
      progressFill.setAttribute('data-width', `${skill.level}%`);
      
      progressBar.appendChild(progressFill);
      levelContainer.appendChild(levelText);
      levelContainer.appendChild(progressBar);
      
      // Ensamblar la card
      card.appendChild(icon);
      card.appendChild(name);
      card.appendChild(levelContainer);
      
      container.appendChild(card);
    });

    console.log('Skills cards renderizadas correctamente');

    // Animación espectacular con GSAP
    animateSkillsCards();
    
  } catch (err) {
    console.error(`Error cargando skills_${currentLang}.json`, err);
  }
}

// Función para animar las skills cards de manera espectacular
function animateSkillsCards() {
  const cards = document.querySelectorAll('.skill-card');
  
  if (cards.length === 0) {
    console.log('No se encontraron cards para animar');
    return;
  }

  // Timeline principal para coordinar todas las animaciones
  const tl = gsap.timeline();

  // Animación de entrada de las cards con efecto de onda
  tl.to(cards, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: {
      amount: 0.8,
      from: "start",
      ease: "power2.out"
    },
    ease: "back.out(1.7)"
  });

  // Animación de las barras de progreso con delay
  tl.to(".skill-card", {
    onComplete: function() {
      // Animar las barras de progreso después de que aparezcan las cards
      const progressBars = document.querySelectorAll('.skill-card [data-width]');
      
      progressBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width');
        
        gsap.to(bar, {
          width: targetWidth,
          duration: 1.2,
          delay: index * 0.1,
          ease: "power2.out",
          onStart: function() {
            // Efecto de brillo durante la animación
            gsap.to(bar, {
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)",
              duration: 0.3,
              yoyo: true,
              repeat: 1
            });
          }
        });
      });
    }
  }, "-=0.3");

  // Efecto de hover mejorado para las cards
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        rotationY: 5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Efecto de brillo en el icono
      const icon = card.querySelector('div:first-child');
      gsap.to(icon, {
        boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
        duration: 0.3
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Quitar el brillo del icono
      const icon = card.querySelector('div:first-child');
      gsap.to(icon, {
        boxShadow: "0 0 0px rgba(34, 211, 238, 0)",
        duration: 0.3
      });
    });
  });

  console.log('Animaciones de skills aplicadas correctamente');
}
