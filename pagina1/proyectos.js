const proyectos = [
  {
    titulo: "Puerta automática",
    descripcion: "Sistema de acceso automatizado con sensores y servomotores.",
    imagenes: ["img/APERTURA.jpg", "img/puerta2.jpg", "img/puerta3.jpg"],
    pdf: "F_PDF/PRIMER.pdf",
    integrantes: "Trabajo grupal de estudiantes.",
    tecnologias: "Arduino, Ultrasonido, Servo",
    fecha: "15/05/2025"
  },
  {
    titulo: "Código Morse",
    descripcion: "Comunicación mediante pulsos de luz y sonido.",
    imagenes: ["img/morse.jpg", "img/morse2.jpg", "img/morse3.jpg"],
    pdf: "gestos.pdf",
    integrantes: "Trabajo grupal de estudiantes.",
    tecnologias: "Arduino, LEDs, Buzzer",
    fecha: "22/06/2025"
  },
  {
    titulo: "Casa inteligente",
    descripcion: "Control de iluminación y seguridad desde el celular.",
    imagenes: ["img/C.I.jpg", "img/c1.jpg", "img/c2.jpg", "img/c3.jpg"],
    pdf: "F_PDF/gestos.pdf",
    integrantes: "Trabajo grupal de estudiantes.",
    tecnologias: "ESP32, Sensores, App móvil",
    fecha: "10/07/2025"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("proyectos");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-img");
  const modalDesc = document.getElementById("modal-desc");
  const modalIntegrantes = document.getElementById("modal-integrantes");
  const modalTecnologias = document.getElementById("modal-tecnologias");
  const modalFecha = document.getElementById("modal-fecha");
  const modalPdf = document.getElementById("modal-pdf");
  const prevBtn = document.getElementById("prevImg");
  const nextBtn = document.getElementById("nextImg");

  let indiceImagen = 0;
  let imagenesActuales = [];

  proyectos.forEach(proyecto => {
    const card = document.createElement("div");
    card.classList.add("proyecto-card");
    card.innerHTML = `
      <img src="${proyecto.imagenes[0]}" alt="${proyecto.titulo}">
      <h2>${proyecto.titulo}</h2>
      <p>${proyecto.descripcion}</p>
    `;

    // Animación 3D
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `perspective(800px) rotateY(${(x - rect.width/2)/20}deg) rotateX(${-(y - rect.height/2)/20}deg) scale(1.07)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    });

    card.addEventListener("click", () => {
      modal.classList.add("show");
      imagenesActuales = proyecto.imagenes;
      indiceImagen = 0;
      modalImg.src = imagenesActuales[indiceImagen];
      modalTitle.textContent = proyecto.titulo;
      modalDesc.textContent = proyecto.descripcion;
      modalIntegrantes.textContent = proyecto.integrantes;
      modalTecnologias.textContent = proyecto.tecnologias;
      modalFecha.textContent = proyecto.fecha;
      modalPdf.href = proyecto.pdf;
    });

    contenedor.appendChild(card);
  });

  prevBtn.addEventListener("click", () => {
    indiceImagen = (indiceImagen - 1 + imagenesActuales.length) % imagenesActuales.length;
    modalImg.src = imagenesActuales[indiceImagen];
  });

  nextBtn.addEventListener("click", () => {
    indiceImagen = (indiceImagen + 1) % imagenesActuales.length;
    modalImg.src = imagenesActuales[indiceImagen];
  });

  closeModal.addEventListener("click", () => modal.classList.remove("show"));
  window.addEventListener("click", e => { if(e.target === modal) modal.classList.remove("show"); });

  // VIDEO MODAL
  const videoModal = document.getElementById("videoModal");
  const introVideo = document.getElementById("introVideo");
  const closeVideo = document.getElementById("closeVideo");

  videoModal.style.display = "flex";
  document.body.classList.add("video-active");

  closeVideo.addEventListener("click", () => {
    videoModal.style.display = "none";
    introVideo.pause();
    document.body.classList.remove("video-active");
  });

  videoModal.addEventListener("click", e => {
    if(e.target === videoModal){
      videoModal.style.display = "none";
      introVideo.pause();
      document.body.classList.remove("video-active");
    }
  });
});
