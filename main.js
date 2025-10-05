console.log('🚀 main.js cargado correctamente - TODO CONSOLIDADO');

// ===== DATOS EMBEBIDOS PARA GITHUB PAGES =====
const DATA = {
  about: {
    es: {
      "name": "Jose Vicente Ebri Gómez",
      "role": "Desarrollador de Aplicaciones Web",
      "summary": [
        "Mi pasión por la tecnología comenzó desde pequeño, cuando mi padre me enseñaba los primeros pasos en su Pentium 1. Desde 2024 me dedico profesionalmente al desarrollo web, impulsado por una curiosidad constante y el amor por aprender algo nuevo cada día.",
        "En esta era donde la inteligencia artificial transforma nuestra industria, me enfoco en encontrar las mejores soluciones para cada situación, combinando creatividad humana con herramientas innovadoras. Me encanta trabajar en equipo, crecer junto a mis compañeros y asegurarme de que las cosas se hagan bien.",
        "Cuando no estoy programando, disfruto del cine y los videojuegos, aficiones que alimentan mi creatividad y me inspiran en mis proyectos. Creo firmemente que nunca se deja de aprender en este campo, y esa es precisamente la razón por la que amo lo que hago."
      ],
      "links": [
        { "name": "GitHub", "url": "https://github.com/JVEbri", "icon": "github" },
        { "name": "LinkedIn", "url": "https://www.linkedin.com/in/jose-vicente-ebri-gomez-25a11a273", "icon": "linkedin" }
      ]
    },
    en: {
      "name": "Jose Vicente Ebri Gómez",
      "role": "Web Application Developer",
      "summary": [
        "My passion for technology began as a child, when my father taught me the first steps on his Pentium 1. Since 2024, I've been professionally dedicated to web development, driven by constant curiosity and a love for learning something new every day.",
        "In this era where artificial intelligence is transforming our industry, I focus on finding the best solutions for each situation, combining human creativity with innovative tools. I love working in teams, growing alongside my colleagues, and ensuring things are done right.",
        "When I'm not coding, I enjoy cinema and video games, hobbies that fuel my creativity and inspire my projects. I firmly believe that you never stop learning in this field, and that's precisely why I love what I do."
      ],
      "links": [
        { "name": "GitHub", "url": "https://github.com/JVEbri", "icon": "github" },
        { "name": "LinkedIn", "url": "https://www.linkedin.com/in/jose-vicente-ebri-gomez-25a11a273", "icon": "linkedin" }
      ]
    }
  },
  experiences: {
    es: [
      {
        "position": "Desarrollador Full Stack",
        "company": "Gestión de APIs",
        "period": "2024 - Presente",
        "description": "Desarrollo de aplicación integral para gestionar el ciclo de vida completo de APIs, incluyendo implementación de pipelines CI/CD automatizados, validación de endpoints y monitoreo de rendimiento.",
        "technologies": ["React", "NestJS", "REST", "PostgreSQL", "CI/CD"]
      },
      {
        "position": "Desarrollador Backend",
        "company": "Solución Multi-tenant",
        "period": "2024",
        "description": "Implementación de arquitectura multi-tenant robusta para cliente corporativo utilizando WSO2 API Manager, diseñando APIs RESTful escalables y optimizando la gestión de bases de datos.",
        "technologies": ["Express.js", "PostgreSQL", "REST", "WSO2 API Manager"]
      },
      {
        "position": "Desarrollador Full Stack",
        "company": "Plataforma de Certificación",
        "period": "2024",
        "description": "Desarrollo de plataforma automatizada para la generación y gestión de certificados digitales, implementando flujos de trabajo eficientes y interfaces de usuario intuitivas.",
        "technologies": ["Next.js", "Django", "PostgreSQL", "Automatización"]
      }
    ],
    en: [
      {
        "position": "Full Stack Developer",
        "company": "API Management",
        "period": "2024 - Present",
        "description": "Development of comprehensive application for managing complete API lifecycle, including automated CI/CD pipelines implementation, endpoint validation and performance monitoring.",
        "technologies": ["React", "NestJS", "REST", "PostgreSQL", "CI/CD"]
      },
      {
        "position": "Backend Developer",
        "company": "Multi-tenant Solution",
        "period": "2024",
        "description": "Implementation of robust multi-tenant architecture for corporate client using WSO2 API Manager, designing scalable RESTful APIs and optimizing database management.",
        "technologies": ["Express.js", "PostgreSQL", "REST", "WSO2 API Manager"]
      },
      {
        "position": "Full Stack Developer",
        "company": "Certification Platform",
        "period": "2024",
        "description": "Development of automated platform for digital certificate generation and management, implementing efficient workflows and intuitive user interfaces.",
        "technologies": ["Next.js", "Django", "PostgreSQL", "Automation"]
      }
    ]
  },
  skills: {
    es: [
      { "name": "React", "level": "Avanzado", "category": "Frontend", "percentage": 95 },
      { "name": "Node.js", "level": "Intermedio", "category": "Backend", "percentage": 90 },
      { "name": "Tailwind", "level": "Avanzado", "category": "Estilos", "percentage": 90 },
      { "name": "Nest.js", "level": "Intermedio", "category": "Backend", "percentage": 90 },
      { "name": "PostgreSQL", "level": "Intermedio", "category": "Base de datos", "percentage": 85 },
      { "name": "Next.js", "level": "Intermedio", "category": "Frontend", "percentage": 80 },
      { "name": "Express", "level": "Intermedio", "category": "Backend", "percentage": 75 },
      { "name": "MongoDB", "level": "Intermedio", "category": "Base de datos", "percentage": 70 }
    ],
    en: [
      { "name": "React", "level": "Advanced", "category": "Frontend", "percentage": 100 },
      { "name": "Tailwind", "level": "Advanced", "category": "Styles", "percentage": 100 },
      { "name": "PostgreSQL", "level": "Intermediate", "category": "Database", "percentage": 100 },
      { "name": "Node.js", "level": "Intermediate", "category": "Backend", "percentage": 90 },
      { "name": "Nest.js", "level": "Intermediate", "category": "Backend", "percentage": 90 },
      { "name": "Next.js", "level": "Intermediate", "category": "Frontend", "percentage": 80 },
      { "name": "Express", "level": "Intermediate", "category": "Backend", "percentage": 50 },
      { "name": "MongoDB", "level": "Intermediate", "category": "Database", "percentage": 30 }
    ]
  }
};

// ===== COMPONENTE ABOUT =====
class AboutComponent {
  async render(lang = 'es') {
    console.log('🔥 AboutComponent: Iniciando render con idioma:', lang);
    const container = document.getElementById('about-content');
    
    if (!container) {
      console.error('❌ AboutComponent: Container about-content no encontrado');
      return;
    }

    try {
      const data = DATA.about[lang];
      console.log('✅ AboutComponent: Datos cargados:', data);
      
      container.innerHTML = `
        <div class="mb-8">
          ${data.summary.map(paragraph => `<p class="text-gray-300 mb-4 text-left">${paragraph}</p>`).join('')}
        </div>
      `;
      
      console.log('✅ AboutComponent: Contenido renderizado');
      
    } catch (err) {
      console.error('❌ AboutComponent: Error cargando datos:', err);
    }
  }
}

// ===== COMPONENTE EXPERIENCES =====
class ExperiencesComponent {
  async render(lang = 'es') {
    console.log('🔥 ExperiencesComponent: Iniciando render con idioma:', lang);
    const container = document.getElementById('experiences-list');
    
    if (!container) {
      console.error('❌ ExperiencesComponent: Container experiences-list no encontrado');
      return;
    }

    try {
       const experiences = DATA.experiences[lang];
       console.log('✅ ExperiencesComponent: Datos cargados:', experiences);
       console.log('🔍 ExperiencesComponent: Es array?', Array.isArray(experiences));
       console.log('🔍 ExperiencesComponent: Tipo:', typeof experiences);
       
       if (!Array.isArray(experiences)) {
         console.error('❌ ExperiencesComponent: Los datos no son un array:', experiences);
         return;
       }
       
       container.innerHTML = experiences.map(exp => {
          console.log('🔍 ExperiencesComponent: Procesando exp:', exp);
          console.log('🔍 ExperiencesComponent: exp.technologies:', exp.technologies);
          
          const technologies = exp.technologies || [];
          
          return `
            <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-semibold text-white">${exp.position || 'Sin título'}</h3>
                <span class="text-cyan-400 text-sm">${exp.period || 'Sin fecha'}</span>
              </div>
              <p class="text-cyan-400 mb-3">${exp.company || 'Sin empresa'}</p>
              <p class="text-gray-300 mb-4">${exp.description || 'Sin descripción'}</p>
              <div class="flex flex-wrap gap-2">
                ${technologies.map(tech => `
                  <span class="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm">
                    ${tech}
                  </span>
                `).join('')}
              </div>
            </div>
          `;
        }).join('');
      
      console.log('✅ ExperiencesComponent: Contenido renderizado');
      
    } catch (err) {
      console.error('❌ ExperiencesComponent: Error cargando datos:', err);
    }
  }
}

// ===== COMPONENTE SKILLS =====
class SkillsComponent {
  // Función para calcular el nivel basado en el porcentaje de manera positiva
  calculateLevelFromPercentage(percentage, lang = 'es') {
    const levels = {
      es: {
        expert: 'Experto',
        advanced: 'Avanzado', 
        proficient: 'Competente',
        skilled: 'Hábil'
      },
      en: {
        expert: 'Expert',
        advanced: 'Advanced',
        proficient: 'Proficient', 
        skilled: 'Skilled'
      }
    };

    const currentLevels = levels[lang] || levels.es;

    if (percentage >= 90) return currentLevels.expert;
    if (percentage >= 80) return currentLevels.advanced;
    if (percentage >= 65) return currentLevels.proficient;
    return currentLevels.skilled;
  }

  getTechIcons() {
    return {
      'React': 'react',
      'Next.js': 'nextdotjs',
      'Tailwind': 'tailwindcss',
      'Tailwind CSS': 'tailwindcss',
      'Node.js': 'nodedotjs',
      'Nest.js': 'nestjs',
      'Express': 'express',
      'MongoDB': 'mongodb',
      'PostgreSQL': 'postgresql',
      'JavaScript': 'javascript',
      'TypeScript': 'typescript',
      'Python': 'python',
      'Docker': 'docker',
      'Git': 'git'
    };
  }

  async render(lang = 'es') {
    console.log('🔥 SkillsComponent: Iniciando render con idioma:', lang);
    const container = document.getElementById('skills-container');
    
    if (!container) {
      console.error('❌ SkillsComponent: Container skills-container no encontrado');
      return;
    }

    try {
      const skills = DATA.skills[lang];
      console.log('✅ SkillsComponent: Datos cargados:', skills);
      
      if (!skills || skills.length === 0) {
        console.error('❌ SkillsComponent: No se encontraron skills');
        return;
      }

      container.innerHTML = '';
      container.className = 'mt-6 max-w-5xl mx-auto';

      const firstRow = document.createElement('div');
      firstRow.className = 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mb-3';
      
      // Segunda fila con flexbox centrado
      const secondRow = document.createElement('div');
      secondRow.className = 'flex justify-center gap-3';

      const techIcons = this.getTechIcons();

      skills.forEach((skill, index) => {
        console.log('🔥 SkillsComponent: Creando card para:', skill.name);
        
        const card = document.createElement('div');
        card.className = 'skill-card bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-3 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 cursor-pointer group';
        
        // Icono
        const iconContainer = document.createElement('div');
        iconContainer.className = 'flex justify-center mb-2';
        
        const iconName = techIcons[skill.name];
         if (iconName) {
           iconContainer.innerHTML = `
             <div class="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300">
               <img src="https://cdn.simpleicons.org/${iconName}" 
                    alt="${skill.name}" 
                    class="w-8 h-8 group-hover:scale-110 transition-all duration-300 skill-icon"
                    style="filter: brightness(0) invert(1);"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
               <div class="w-8 h-8 bg-gray-700/30 rounded-lg flex items-center justify-center text-white group-hover:text-cyan-400 text-xs font-bold transition-all duration-300" style="display:none;">
                 ${skill.name.charAt(0)}
               </div>
             </div>
           `;
         } else {
           iconContainer.innerHTML = `
             <div class="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300">
               <div class="w-8 h-8 bg-gray-700/30 rounded-lg flex items-center justify-center text-white group-hover:text-cyan-400 text-xs font-bold transition-all duration-300">
                 ${skill.name.charAt(0)}
               </div>
             </div>
           `;
         }
        
        // Nombre
        const name = document.createElement('h3');
        name.className = 'text-white text-xs font-medium text-center mb-2 group-hover:text-cyan-400 transition-colors duration-300';
        name.textContent = skill.name;
        
        // Barra de progreso
        const progressContainer = document.createElement('div');
        progressContainer.className = 'w-full';
        const calculatedLevel = this.calculateLevelFromPercentage(skill.percentage, lang);
        progressContainer.innerHTML = `
          <div class="w-full bg-gray-700/50 rounded-full h-1.5 mb-1">
            <div class="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-out" 
                 style="width: ${skill.percentage}%"></div>
          </div>
          <p class="text-xs text-gray-400 text-center">${calculatedLevel}</p>
        `;
        
        card.appendChild(iconContainer);
        card.appendChild(name);
        card.appendChild(progressContainer);
        
        if (index < 6) {
          firstRow.appendChild(card);
        } else {
          // Aplicar ancho específico para que coincida con las cards de la primera fila
          card.classList.add('w-36');
          secondRow.appendChild(card);
        }
      });

      container.appendChild(firstRow);
      if (secondRow.children.length > 0) {
        container.appendChild(secondRow);
      }

      console.log('✅ SkillsComponent: Cards renderizadas correctamente');
      
    } catch (err) {
      console.error('❌ SkillsComponent: Error cargando datos:', err);
    }
  }
}

// ===== APLICACIÓN PRINCIPAL =====
class PortfolioApp {
  constructor() {
    this.currentLang = 'es';
    this.components = {};
    console.log('🔥 PortfolioApp: Constructor ejecutado');
  }

  init() {
    console.log('🔥 PortfolioApp: Iniciando init()');
    this.initComponents();
    this.initEventListeners();
    this.loadInitialContent();
    console.log('✅ PortfolioApp: Init completado');
  }

  initComponents() {
    console.log('🔥 PortfolioApp: Inicializando componentes');
    this.components.about = new AboutComponent();
    this.components.experiences = new ExperiencesComponent();
    this.components.skills = new SkillsComponent();
    console.log('✅ PortfolioApp: Componentes inicializados');
  }

  initEventListeners() {
    console.log('🔥 PortfolioApp: Configurando event listeners');
    // Los event listeners para cambio de idioma ya están en el HTML
    console.log('✅ PortfolioApp: Event listeners configurados');
  }

  async loadInitialContent() {
    console.log('🔥 PortfolioApp: Cargando contenido inicial');
    this.updateLanguageButtons(this.currentLang);
    this.updateStaticTexts(this.currentLang);
    await this.renderAllContent();
    console.log('✅ PortfolioApp: Contenido inicial cargado');
  }

  async switchLanguage(lang) {
    console.log('🔥 PortfolioApp: Cambiando idioma a:', lang);
    this.currentLang = lang;
    this.updateLanguageButtons(lang);
    this.updateStaticTexts(lang);
    await this.renderAllContent();
    console.log('✅ PortfolioApp: Idioma cambiado');
  }

  updateLanguageButtons(lang) {
    console.log('🔥 PortfolioApp: Actualizando botones de idioma');
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('bg-cyan-600', 'text-white');
      btn.classList.add('bg-gray-700', 'text-gray-300');
    });
    
    const activeBtn = document.querySelector(`[onclick="switchLanguage('${lang}')"]`);
    if (activeBtn) {
      activeBtn.classList.remove('bg-gray-700', 'text-gray-300');
      activeBtn.classList.add('bg-cyan-600', 'text-white');
    }
    console.log('✅ PortfolioApp: Botones de idioma actualizados');
  }

  updateStaticTexts(lang) {
    console.log('🔥 PortfolioApp: Actualizando textos estáticos');
    // Aquí puedes agregar la lógica para cambiar textos estáticos si es necesario
    console.log('✅ PortfolioApp: Textos estáticos actualizados');
  }

  async renderAllContent() {
    console.log('🔥 PortfolioApp: Iniciando renderAllContent');
    
    try {
      console.log('🔥 PortfolioApp: Renderizando header...');
      await this.renderHeader();
      console.log('✅ PortfolioApp: Header renderizado');
      
      console.log('🔥 PortfolioApp: Renderizando about...');
      await this.components.about.render(this.currentLang);
      console.log('✅ PortfolioApp: About renderizado');
      
      console.log('🔥 PortfolioApp: Renderizando experiences...');
      await this.components.experiences.render(this.currentLang);
      console.log('✅ PortfolioApp: Experiences renderizado');
      
      console.log('🔥 PortfolioApp: Renderizando skills...');
      await this.components.skills.render(this.currentLang);
      console.log('✅ PortfolioApp: Skills renderizado');
      
      console.log('✅ PortfolioApp: Todo el contenido renderizado correctamente');
      
    } catch (error) {
      console.error('❌ PortfolioApp: Error en renderAllContent:', error);
    }
  }

  async renderHeader() {
    try {
      console.log('🔥 HEADER: Cargando datos...');
      const about = DATA.about[this.currentLang];
      console.log('✅ HEADER: Datos cargados:', about);
      
      // Renderizar nombre y rol en el header
      const headerName = document.getElementById("header-name");
      const headerRole = document.getElementById("header-role");
      
      if (headerName) {
        headerName.textContent = about.name;
        console.log('✅ HEADER: Nombre actualizado');
      }
      
      if (headerRole) {
        headerRole.textContent = about.role;
        console.log('✅ HEADER: Rol actualizado');
      }

      // Renderizar links del header
      console.log('🔥 HEADER: Renderizando links...');
      this.renderHeaderLinks(about);
      console.log('✅ HEADER: Links renderizados');
      
    } catch (error) {
      console.error('❌ HEADER: Error renderizando header:', error);
    }
  }

  renderHeaderLinks(about) {
    console.log('🔥 LINKS: Iniciando renderHeaderLinks');
    const linksContainer = document.getElementById("header-links");
    console.log('🔍 LINKS: Container encontrado:', !!linksContainer);
    console.log('🔍 LINKS: About.links:', about.links);
    
    if (!linksContainer) {
      console.error('❌ LINKS: Container header-links no encontrado');
      return;
    }
    
    if (!about.links) {
      console.error('❌ LINKS: about.links no existe');
      return;
    }

    const linksHTML = about.links.map(link => `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-white hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-sm">
        <i data-lucide="${link.icon}" class="w-4 h-4"></i>
        ${link.name}
      </a>
    `).join('');
    
    console.log('🔥 LINKS: HTML generado:', linksHTML);
    linksContainer.innerHTML = linksHTML;
    console.log('✅ LINKS: HTML insertado en container');

    // Crear iconos de Lucide
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
      console.log('✅ LINKS: Iconos de Lucide creados');
    } else {
      console.error('❌ LINKS: Lucide no está disponible');
    }
  }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔥 DOM LOADED - Iniciando aplicación...');
  window.portfolioApp = new PortfolioApp();
  console.log('🔥 PortfolioApp creado:', window.portfolioApp);
  window.portfolioApp.init();
  console.log('🔥 Init() ejecutado');
});

window.switchLanguage = (lang) => {
  console.log('🔥 switchLanguage llamado con:', lang);
  if (window.portfolioApp) {
    window.portfolioApp.switchLanguage(lang);
  } else {
    console.error('❌ portfolioApp no está disponible');
  }
};

console.log('✅ main.js completamente cargado con todos los componentes consolidados');
