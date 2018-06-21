
$(document).ready(function () {
	
        $('.nav > li').click(function (e) {
          console.log("YESS 000");
          //   e.preventDefault();
            $('.nav > li').removeClass('active');
            $(this).addClass('active');       
        });      


// $('body').scrollspy({target: ".navbar", offset: 50}); 

$("#header li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 600, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});





    });


// $('body').scrollspy({ target: '#header' })