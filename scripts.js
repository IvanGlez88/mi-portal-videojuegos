// Obtiene todas las miniaturas de la galería
const miniaturas = document.querySelectorAll('.miniatura');
const imagenGrande = document.getElementById('imagen_grande');

// Función para cambiar la imagen grande cuando se hace clic en una miniatura
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        // Cambia la imagen principal al src de la miniatura clickeada
        imagenGrande.src = miniatura.src;

        // Hace que la imagen se agrande suavemente
        imagenGrande.style.transform = "scale(2.5)";  // Cambia el tamaño
        setTimeout(() => {
            imagenGrande.style.transform = "scale(1.8)";  // Vuelve al tamaño original después de un breve tiempo
        }, 300);  // El tiempo es el mismo que el de la animación en CSS
    });
});
