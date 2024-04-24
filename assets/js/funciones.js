$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".navbar").css("background-color", "#333");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
        $('.parallax').css('top', -(scroll * 0.2) + 'px');
    });

    $('.navbar-nav .nav-link').click(function(){
        var $enlace = $(this);
        $enlace.css('font-size', '20px');
        setTimeout(function(){
            $enlace.css('color', ''); 
            $enlace.css('font-size', ''); 
        }, 1000);
    });
});