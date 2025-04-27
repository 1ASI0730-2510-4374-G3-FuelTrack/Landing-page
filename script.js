// ===================
// 📌 Scroll Progress Bar
// ===================
window.addEventListener('scroll', () => {
  const scroll = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.scroll-progress').style.width = scroll + "%";
});

// ===================
// 📌 Smooth Scroll on Anchor Links
// ===================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ===================
// 📌 Typed.js (Texto animado en Hero)
// ===================
new Typed('.typed-text', {
  strings: ['Bienvenido a FuelTrack', 'Gestión Inteligente de Combustible'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// ===================
// 📌 VanillaTilt (Hover en tarjetas con 3D efecto)
// ===================
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});


// ===================
// 📌 AOS (Animaciones por scroll)
// ===================
AOS.init({
  once: true,
  duration: 1000
});

// ===================
// 📌 IntersectionObserver - Features
// ===================
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.feature-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
});

// ===================
// 📌 IntersectionObserver - Testimonials
// ===================
document.addEventListener('DOMContentLoaded', () => {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  testimonialCards.forEach(card => observer.observe(card));
});

// ===================
// 📌 IntersectionObserver - Pricing Cards
// ===================
document.addEventListener('DOMContentLoaded', () => {
  const pricingCards = document.querySelectorAll('.pricing-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.3 });

  pricingCards.forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
  });
});

// ===================
// 📌 Tabs funcionalidad (Cliente vs Proveedor)
// ===================
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Quitar estado activo de todos los tabs
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Ocultar todos los grupos de features
    document.querySelectorAll('.features-group').forEach(group => group.classList.remove('show'));

    // Mostrar el grupo correspondiente
    const target = btn.getAttribute('data-target');
    document.getElementById(target).classList.add('show');

    // Scroll a sección
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  });
});
// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function() {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";  // Muestra el botón
  } else {
    btn.style.display = "none";  // Oculta el botón cuando estás arriba
  }
};

// Hacer scroll hacia arriba cuando se hace clic en el botón
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // Activar scroll suave
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-bg", {
  y: "30%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
// script.js
document.querySelectorAll('.toggle-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Mueve el indicador
    const indicator = document.getElementById('toggle-indicator');
    indicator.style.left = index === 0 ? '4px' : 'calc(50% + 4px)';

    // Mostrar grupo de funcionalidades
    document.querySelectorAll('.features-group').forEach(g => g.classList.remove('show'));
    const target = btn.getAttribute('data-target');
    document.getElementById(target).classList.add('show');
  });
});
// Sticky inteligente y sombra dinámica
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > 50) {
    navbar.style.top = "-80px"; // oculta navbar
  } else {
    navbar.style.top = "0"; // muestra navbar
  }
  lastScroll = currentScroll;

  // sombra dinámica
  if (currentScroll > 10) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Link activo al hacer click
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll('.navbar-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
// Selección activa de idioma
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    // Aquí podrías activar la lógica para cambiar idioma si deseas
  });
});
// Registrar el plugin
gsap.registerPlugin(ScrollTrigger);

// Lista de secciones con sus animaciones
const sections = [
  { selector: ".hero", animation: { y: 60, opacity: 0, duration: 1 } },
  { selector: ".features", animation: { y: 40, opacity: 0, duration: 1 } },
  { selector: ".welcome-section", animation: { scale: 0.95, opacity: 0, duration: 1 } },
  { selector: ".testimonials-mosaic", animation: { x: -50, opacity: 0, duration: 1 } },
  { selector: ".pricing-container", animation: { y: 50, opacity: 0, duration: 1 } },
  { selector: ".contact-container", animation: { y: 40, opacity: 0, duration: 1 } },
  { selector: ".footer-container", animation: { opacity: 0, duration: 1 } }
];

sections.forEach(({ selector, animation }) => {
  gsap.from(selector, {
    ...animation,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%", // cuando el top de la sección entra en 80% del viewport
      toggleActions: "play none none reverse"
    }
  });
});
