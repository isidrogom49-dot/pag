document.addEventListener("DOMContentLoaded", () => {
  // MENU HAMBURGUESA
  const hamburger = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // EFECTO 3D TARJETAS
  const highlights = document.querySelectorAll(".highlight");
  highlights.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `perspective(700px) rotateY(${(x - rect.width/2)/25}deg) rotateX(${-(y - rect.height/2)/25}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)";
    });
  });

  // EFECTO SPIN HERO
  const spinLogo = document.querySelector(".spin-logo");
  if(spinLogo){
    spinLogo.addEventListener("mouseenter", () => {
      spinLogo.style.transform = "rotateY(360deg) scale(1.15)";
      spinLogo.style.filter = "drop-shadow(0 0 15px rgba(255,255,255,0.7))";
    });
    spinLogo.addEventListener("mouseleave", () => {
      spinLogo.style.transform = "rotateY(0deg) scale(1)";
      spinLogo.style.filter = "drop-shadow(0 0 10px rgba(255,255,255,0.4))";
    });
  }
});
