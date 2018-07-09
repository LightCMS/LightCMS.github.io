$(document).ready(function(){
  $(".slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000
  });

  $('.popup-btn').on('click', function(event){
    event.preventDefault();
    $('.popup').fadeIn();
  });
  $('.popup-close').on('click', function(event){
    event.preventDefault();
    $('.popup').fadeOut();
  })

  
});