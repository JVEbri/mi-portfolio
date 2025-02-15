// Animación de entrada con GSAP
gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
gsap.from("p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

// Animación al hacer clic en el botón
document.getElementById("animar").addEventListener("click", () => {
  gsap.to("#portfolio", {
    backgroundColor: "#1E40AF", // Azul Tailwind
    duration: 1,
  });
});
