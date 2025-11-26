document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });

  // Cerrar menú al hacer click en un enlace (móvil)
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if(window.innerWidth <= 768){
        navMenu.style.display = "none";
      }
    });
  });
});
