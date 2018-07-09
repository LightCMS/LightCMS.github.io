$(document).ready(function(){
  $(".slider").owlCarousel({
  	items: 1,
  	loop: true,
    nav: true,
  	autoplay: true,
  	autoplayTimeout: 10000
  });

  $(".btn-nav").on("click", function() {
  	var target = $(this).data("target");
  	$(target).toggleClass("nav__list--open");
  });

  
});