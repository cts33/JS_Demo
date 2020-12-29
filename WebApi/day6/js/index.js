window.addEventListener('DOMContentLoaded',function(){
	
	var arrowl = document.querySelector('.arrow-l');
	var arrowr = document.querySelector('.arrow-r');
	var focus = document.querySelector('.focus');
	var ul = focus.querySelector('ul');
	var focusWidth = focus.offsetWidth;

	arrowl.addEventListener('click',function(){
		
		console.log('left');
	})
	var num=0;
	arrowr.addEventListener('click',function(){
		
		// 位移图片
		num++;
		console.log('width='+focusWidth);
		
		animate(ul,- num * focusWidth,function(){
			console.log('anim ok!')
		});
		
	})
	
	
	
})