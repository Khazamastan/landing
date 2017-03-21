 $(window).scroll(function () {
       if ($(window).scrollTop() > ($(window).innerHeight()-60)) {
         $('nav').addClass('navbar-fixed-top');
       }
       if ($(window).scrollTop() < ($(window).innerHeight()-60)) {
         $('nav').removeClass('navbar-fixed-top');
       }
   });
   $(document).on('click', '#goto-about', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
   });