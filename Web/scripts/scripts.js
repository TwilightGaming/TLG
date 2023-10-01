console.log('javascript loaded');
$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});
$(window).on('load',function() {
    $("#splash").delay(1300).fadeOut('slow',function(){
});
});
$(function () {
    $(window).scroll(function(){
      var windowHeight = $(window).height(),
      scrollY = $(window).scrollTop();
      $('.second-area, .third-area, .valo-text-wrapper, .valo-div-img, .ssbu-text-wrapper, .ssbu-div-img').each(function(){
        var thisPosition = $(this).offset().top;
        if(scrollY > thisPosition - windowHeight){
          $(this).addClass('scrollin');
        }
      });
    });
  });
let submitted = false;
