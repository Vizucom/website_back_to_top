$(document).ready(function() {

    var amountScrolled = 200;
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    
    $('a.back-to-top, a.simple-back-to-top').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

});