// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop - 16;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("header__nav");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function(){
  $(".slider").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: false,
  	autoplayTimeout: 5000
  });

});
$(document).ready(function(){
  $(".slider2").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000
  });

});

// var gridText = document.getElementById('grid__text');
// var gridOverlow = document.getElementsByClassName('grid__overlow')[0];
// gridOverlow.addEventListener('mousemove', function(){
//   gridText.style.display = 'block';
// })

$('#grid__overlow1').mousemove(function(event) {
  // event.preventDefault();
  $('#grid__text1').css('display', 'block');
});
$('#grid__overlow1').mouseout(function(event) {
  $('#grid__text1').css('display', 'none');
});
$('#grid__overlow2').mousemove(function(event) {
  event.preventDefault();
  $('#grid__text2').css('display', 'block');
});
$('#grid__overlow2').mouseout(function(event) {
  $('#grid__text2').css('display', 'none');
});

$(function(){
  // var sss = $('.active .onslider-text1');
  // let timerSlider = setInterval(sliderOn, 1000);
  // function sliderOn(){
  //   $('.active .onslider-text1').addClass('wow fadeInDown');
  // };
  setInterval(function(){
var addd = $('.owl-item.active');
if(addd){
$('.active .onslider-text1').addClass('wow fadeInDown');

}}, 100);
});
// console.log(bbb);


var el = document.getElementsByClassName('header__menu-logo-item');
for (var i = 0; i < el.length; i++ ){
  el[i].addEventListener('mouseenter', showSub, false);
  el[i].addEventListener('mouseleave', hideSub, false);
}
function showSub(){
  if(this.children.length > 1){
    this.children[1].style.height = 'auto';
    this.children[1].style.opacity = '1';
    this.children[1].style.overflow = 'visibile';
    this.children[1].style.width = 'auto';
    this.children[2].style.height = 'auto';
    this.children[2].style.opacity = '1';
    this.children[2].style.overflow = 'visibile';
    this.children[2].style.width = 'auto';
    this.children[3].style.height = 'auto';
    this.children[3].style.opacity = '1';
    this.children[3].style.overflow = 'visibile';
    this.children[3].style.width = 'auto';
  } else {
    return false;
  }
}
function hideSub(){
  if(this.children.length > 1){
    this.children[1].style.height = '0';
    this.children[1].style.opacity = '0';
    this.children[1].style.overflow = 'hidden';
    this.children[2].style.height = '0';
    this.children[2].style.opacity = '0';
    this.children[2].style.overflow = 'hidden';
    this.children[3].style.height = '0';
    this.children[3].style.opacity = '0';
    this.children[3].style.overflow = 'hidden';
  } else {
    return false;
  }
}





