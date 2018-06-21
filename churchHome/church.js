$("div.menu-part").find('a').click(function() {
  $(this).css({"color": "DarkViolet", "font-size": "18px"});
});
 


function messageSlide() {
  //$('.message p').hide();
  var index = Math.floor((Math.random() * 3) + 0);
  $('.messages p').hide()
  $('.messages p').eq(index).show()
}

setInterval(function() {
  (messageSlide(), 1200);
}, 3000)

function pictureSlide() {
  //$('.message p').hide();
  var index = Math.floor((Math.random() * 4) + 0);
  /*  console.log(index  + " YES MAN " + $('.image-container img').length )*/

  $('.image-container img').hide()
  $('image-container img').eq(index).show()
}

setInterval(function() {
  (pictureSlide(), 1000);
}, 1000)

$(".next img").click(function() {
  $('.image-container').find('.img2').css('margin-right', '80px')
});

$(".prev img").click(function() {
  $('.image-container').next('.img1').css("background", "yellow")
});

