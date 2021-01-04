$(function() {

	$('ul li').hover(
		function() {
			$(this).siblings().stop().fadeTo(400, .5);
		},
		function() {
			$(this).siblings().stop().fadeTo(400, 1);
		});

})
