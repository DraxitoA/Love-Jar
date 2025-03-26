document.addEventListener('DOMContentLoaded', function() {
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    
    // Animación al hacer hover en el botón de descarga
    const downloadBtn = document.querySelector('.btn-download');
    
    downloadBtn.addEventListener('mouseover', function() {
        const icon = this.querySelector('i');
        icon.classList.add('fa-bounce');
    });
    
    downloadBtn.addEventListener('mouseout', function() {
        const icon = this.querySelector('i');
        icon.classList.remove('fa-bounce');
    });
    
    // Confirmación de descarga
    downloadBtn.addEventListener('click', function(e) {
        if(!confirm('¿Deseas descargar Love Jar?')) {
            e.preventDefault();
        } else {
            // Opcional: Puedes añadir tracking de descargas aquí
            console.log('Descarga iniciada');
        }
    });
});
