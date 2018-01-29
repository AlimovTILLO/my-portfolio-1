'use strict';

// Simple slider
$('#slideshow > .slideshow__item:gt(0)').hide();

setInterval(function() {
  $('#slideshow > .slideshow__item:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
},  15000);

$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
  e.preventDefault();
});

// let slidesArray = $('#slideshow').children('.slideshow__item');
//
// for (let i = 0; i < slidesArray.length; i++) {
//   $('.dotts-nav').append('<i class="dotts-nav__item"></i>');
// }
//
// let navDot = 0;
//
// $('.dotts-nav__item').click(function() {
//   navDot = $(this).index();
//
//   if(navDot + 1 !== slideNow) {
//
//   }
// });
// End Simple slider
