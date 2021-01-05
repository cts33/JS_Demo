$(function(){
	
	$('.box li').mouseenter(function(){
		//当前执行动画，大图淡入 小图淡出
		$(this).stop().animate({
			width:224
		}) 
		.find('.small').stop().fadeOut()
		.siblings('.big').stop().fadeIn();
		//其他li 执行缩小动画
		$(this).siblings('li').stop().animate({
			width:69
		})
		.find('.small').stop().fadeIn()
		.siblings('.big').stop().fadeOut();
		
	})
	
})