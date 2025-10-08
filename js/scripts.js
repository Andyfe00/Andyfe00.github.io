//Languages
let variable = [
  "I'm a Mechatronics Engineer.",
  "I'm a Roboticist.",
  "I'm a Programmer.",
  "I'm a Developer."
];

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");
let typed; // 🔹 variable global para Typed.js

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }

  if (language === "en") {
    console.log("Inglés");
    variable = [
      "I'm a Mechatronics Engineer.",
      "I'm a Roboticist.",
      "I'm a Programmer.",
      "I'm a Developer.",
    ];
  } else if (language === "es") {
    console.log("Español");
    variable = [
      "Soy Ingeniero Mecatrónico.",
      "Soy Roboticista.",
      "Soy Programador.",
      "Soy Desarrollador.",
    ];
  }

  // 🔹 Reiniciar Typed.js con el nuevo idioma
  if (typed) typed.destroy();
  startTyped(variable);
};

flagsElement.addEventListener("click", (e) => {
  const lang = e.target.closest(".flags_item")?.dataset.language;
  if (lang) changeLanguage(lang);
});

//ScrollSpy
document.addEventListener("DOMContentLoaded", function () {
  new bootstrap.ScrollSpy(document.body, {
    target: ".navbar",
    offset: 90,
  });
  // Inicializar Typed la primera vez
  startTyped(variable);
});

//TYPED
function startTyped(strings) {
  typed = new Typed("#typed", {
    strings: strings,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 300,
    loop: true,
  });
}


//3D Canvas 
window.onload = function() {
  try {
    TagCanvas.Start('myCanvas','tags',{
      textColour: null,
      outlineMethod: 'none',     // elimina bordes blancos o mezcla
      reverse: true,
      depth: 0.9,
      maxSpeed: 0.05,
      imageMode: "both",         // activa el modo de imagen correcto
      imageScale: 0.25,          // escala más baja (reduce tamaño dentro del canvas)
      imagePadding: 5,           // espacio entre logos
      initial: [0.1,-0.1],
      dragControl: true,
      decel: 0.95,
      shuffleTags: true,
      wheelZoom: false,
      noSelect: true,            // evita selección de imágenes
      fadeIn: 800,               // animación inicial suave
    });
  } catch(e) {
    document.getElementById('myCanvasContainer').style.display = 'none';
    console.error(e);
  }
};

//SWIPER COVERFLOW
const swiper = new Swiper('.swiper', {
// Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

   autoplay: {
   delay: 2000,
 },
    scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
  },
});

//NAVBAR TRANSPARENT
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  // Al cargar la página, comprueba si esta en el top o no
  toggleNavbar();
  // Detecta cuando haces scroll
  window.addEventListener("scroll", toggleNavbar);
  function toggleNavbar() {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});
