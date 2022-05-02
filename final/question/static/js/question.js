$(function() {
  $('a.btn').click(function() {
    $('div.wrap').animate({width: '20vw', height: '31vh'}, 2000)
    $('div.frame').animate({top: '10%', left: '5%'}, 2000)
    $('img#quail').animate({width: '17vw', height: '31vh'}, 2000)
    $('div.info').fadeOut(1000)
    $('a.btn').fadeOut(1000)
    $('div.bubble1').delay(1000).fadeIn(1000)
    $('div.bubble2').delay(1000).fadeIn(1000)
    $('a.btn1').delay(1000).fadeIn(1000)
  })

  $('a.btn').click(function() {
    
  })
});