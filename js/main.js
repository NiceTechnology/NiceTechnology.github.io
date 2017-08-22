// Menu Always On Top //
$(document).ready(function(){
    var stickyNavTop = $('.menu').offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); 
        if (scrollTop > stickyNavTop){
            $('.menu').css({ 'position': 'fixed', 'top':0, 'z-index':9999 });
        }
        else{
            $('.menu').css({ 'position': 'relative' });
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});
// End Menu Always On Top //

// Hamburger Menu //
$(document).ready(function(){
    $('.button-hamburger').click(function(){
        $('.menu-mobile').toggleClass("slide-menu-show");
    });
});
// End Hamburger Menu //