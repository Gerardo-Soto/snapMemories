let timeout; // Variable para controlar el tiempo de espera antes de ocultar la barra

document.addEventListener('scroll', function() {
    clearTimeout(timeout); // Limpia el timeout anterior
    document.body.style.overflow = 'auto'; // Muestra la barra de desplazamiento

    // Configura un nuevo timeout para ocultar la barra después de un cierto tiempo
    timeout = setTimeout(function() {
        document.body.style.overflow = 'hidden'; // Oculta la barra de desplazamiento nuevamente
    }, 1000); // Cambia el valor de 1000 a la cantidad de milisegundos que desees esperar antes de ocultarla
});