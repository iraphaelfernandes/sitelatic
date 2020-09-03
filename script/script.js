
$('#right-arrow').click(function () {
  var currentSlide = $('.slide.active');
  var nextSlide = currentSlide.next();

  currentSlide.fadeOut(300).removeClass('active');
  nextSlide.fadeIn(300).addClass('active');

  if (nextSlide.length == 0) {
    $('.slide').first().fadeIn(300).addClass('active');
  }
});

$('#left-arrow').click(function () {
  var currentSlide = $('.slide.active');
  var prevSlide = currentSlide.prev();

  currentSlide.fadeOut(300).removeClass('active');
  prevSlide.fadeIn(300).addClass('active');

  if (prevSlide.length == 0) {
    $('.slide').last().fadeIn(300).addClass('active');
  }

});

$(function () {
  $('#slider .slide:eq(0)').addClass("active").show();
  setInterval(slide, 3000);

  function slide() {
    if ($('.active').next().size()) {
      $('.active').fadeOut().removeClass('active').next().fadeIn().addClass('active');
    }
    else {
      $('.active').fadeOut().removeClass('active');
      $("slider .slide:eq(0)").fadeIn().addClass('active');
    }
  }
})