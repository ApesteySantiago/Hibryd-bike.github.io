const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Función para determinar la sección actual en función del desplazamiento
function setActiveLink() {
    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50; // Ajusta el valor según el espaciado en el que deseas activar el enlace
        if (window.scrollY >= sectionTop) {
            currentSectionIndex = index;
        }
    });

    navLinks.forEach((link, index) => {
        link.classList.remove("active");
        if (index === currentSectionIndex) {
            link.classList.add("active");
        }
    });
}

// Agregar evento de desplazamiento para cambiar el enlace activo
window.addEventListener("scroll", setActiveLink);
window.addEventListener("resize", setActiveLink); // Para manejar cambios de tamaño de la ventana

// Llamar a setActiveLink inicialmente para establecer el estado activo al cargar la página
setActiveLink();