$(document).ready(function() {
  //navigation
  $('#main-nav').NavAnchor();
  //lines 0->100
  $('.line').LineAnimate({
    animateTime: 2000
  });
  //slider
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    zIndex: 1,
    dots: true
  });
  //cards events
  $('.card').on('click', function(){
    var $clicked = $(this).find('.card__interactive');
    if (!$clicked.hasClass('is-open')){
      $('.card__interactive').removeClass('is-open');
      $(this).find('.card__interactive').addClass('is-open');
    } else {    
      $('.card__interactive').removeClass('is-open');
    }
  });
  
  $('.navbar__toggle').on('click', function(event){
    event.preventDefault();
    $('.navbar__list').slideToggle(300).addClass('is-mobile');
  })
  $('.navbar__item').on('click', function(event){
    if ($('.navbar__list').hasClass('is-mobile')){
      $('.navbar__list').slideUp(300).removeClass('is-mobile');
    }
  })
});