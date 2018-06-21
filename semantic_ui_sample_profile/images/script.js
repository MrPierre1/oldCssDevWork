$('#menu a').on('click', function() {
	$(this).addClass("active");

});


$('#menu a').click(function() {
	$('#menu a').addClass("active");

});
	// var rel = $('body[rel]').attr('rel');
	// $('#menu a:eql('+ rel +'), #m_menu a:eql('+ rel +')').addClass('active');



	$( "#m_btn" ).click(function() {
	$('.ui.labeled.icon.sidebar')
	.sidebar('toggle');
	});



$('.pop').popup();

$('#center > div').click(function() {
	$('.reveal').transition('tada', '2000ms').transition('pulse', 600);
	/* Act on the event */
});

// $( "#center > div" ).click(function() {

// $('.reveal')
//   .transition('horizontal flip')

	// });