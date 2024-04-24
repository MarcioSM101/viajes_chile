$(document).ready(function(){
    // Desplazamiento suave al hacer clic en los enlaces de la barra de navegación
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll > 50) {
                $(".navbar").css("background-color", "#333"); // Cambiar el color de fondo al hacer scroll
            } else {
                $(".navbar").css("background-color", "transparent"); // Restaurar el color de fondo al llegar al principio
            }
        });
    
});
    

