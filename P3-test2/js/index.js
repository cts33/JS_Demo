window.addEventListener('DOMContentLoaded', function() {


	var code = document.querySelector('.top');
	var img = code.querySelector('img');
	code = code.querySelector('ul');
	var li = code.querySelectorAll('li');

	console.log(li[2]);
	// 鼠标移动到位置
	li[2].addEventListener('mouseenter', function() {

		img.style.display = 'block';

	})
	// 鼠标移出到位置
	li[2].addEventListener('mouseleave', function() {

		img.style.display = 'none';

	})


	var hr = document.querySelector('.header_r');
	var close = hr.querySelector('span');
	close.addEventListener('click', function() {

		hr.style.display = 'none';
	})

	var content = document.querySelector('.content');

	var li = content.querySelectorAll('li');
	for (var i = 0; i < li.length; i++) {

		li[i].addEventListener('click', function() {
			console.log('--');

			for (var i = 0; i < li.length; i++) {

				var div = li[i].querySelector('div');
				div.style.border = '1px solid lightgray';
			}

			var div = this.querySelector('div');
			div.style.border = '1px solid pink';

		})
	}
	 
	
	var back = document.querySelector('.back');
	back.addEventListener('click',function(){
		
		// 回到顶部
		window.scroll(0,0);
	})
})
