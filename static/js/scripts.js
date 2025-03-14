// Lista de productos del menú
const menuProductos = [
    { nombre: "Hamburguesa Especial", precio: 120, imagen: "static/img/hamburguesa.png" },
    { nombre: "Papas Fritas", precio: 50, imagen: "static/img/papas.png" },
    { nombre: "Ceviche de Camarón", precio: 140, imagen: "static/img/ceviche.png" },
    { nombre: "Tostadas de Pulpo", precio: 100, imagen: "static/img/tostadas.png" }
];

// Función para cargar el menú en la página
function cargarMenu() {
    const contenedor = document.getElementById("menu-container");

    menuProductos.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("producto");
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio} MXN</p>
        `;
        contenedor.appendChild(item);
    });
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    cargarMenu(); // Cargar el menú dinámico al cargar la página

    console.log("JavaScript funcionando correctamente");

    // Obtener elementos del DOM
    const logo = document.querySelector(".logo");
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Función para cambiar el tamaño del logo cuando se hace scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            logo.style.width = "100px";  // Logo más pequeño al hacer scroll
            header.style.background = "rgba(0, 0, 0, 0.8)"; // Hacer el fondo del header más oscuro
        } else {
            logo.style.width = "150px";  // Logo más grande cuando está arriba
            header.style.background = "transparent";
        }
    });

    // Asegurar que el menú tenga buena visibilidad
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "#ffd700"; // Cambia el color al pasar el mouse
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "#fff"; // Vuelve al color original
        });
    });

    // Ajustar imagen de fondo en tiempo real
    const heroSection = document.querySelector(".hero");
    function ajustarImagenFondo() {
        if (window.innerWidth < 768) {
            heroSection.style.backgroundSize = "cover";
        } else {
            heroSection.style.backgroundSize = "contain";
        }
    }

    window.addEventListener("resize", ajustarImagenFondo);
    ajustarImagenFondo(); // Ejecutar al cargar la página
});
