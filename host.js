$(document).ready(function(){
 
	$('.ir-host').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-host').slideDown(500);
		} else {
			$('.ir-host').slideUp(500);
		}
	});
 
});// JavaScript Document