$(window).scroll(function(e){
  parallax();
  console.log("asdasd");
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.body-bg img').css('top',-(scrolled/10)+'px');
  $('.img img').css('bottom',-(scrolled/20)+'px');
}