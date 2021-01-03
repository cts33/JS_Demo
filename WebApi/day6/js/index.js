window.addEventListener('DOMContentLoaded', function() {

	var arrowl = document.querySelector('.arrow-l');
	var arrowr = document.querySelector('.arrow-r');
	var focus = document.querySelector('.focus');
	var ol = document.querySelector('ol');
	var ul = focus.querySelector('ul');

	var focusWidth = focus.offsetWidth;
	//大盒子 鼠标经过
	focus.addEventListener('mouseenter', function() {


		arrowl.style.display = 'block';
		arrowr.style.display = 'block';
		clearInterval(timer);
		console.log('鼠标经过！')
		timer = null;
	})

	focus.addEventListener('mouseleave', function() {

		arrowl.style.display = 'none';
		arrowr.style.display = 'none';
		timer = setInterval(function() {
			arrowr.click();
		}, 2000);

	})
	//总个数
	var count = ul.children.length;
	for (var i = 0; i < count; i++) {
		// count[i].
		var li = document.createElement('li');
		li.setAttribute('index', i);
		li.addEventListener('click', function() {
			var index = this.getAttribute('index');	
			console.log('圆点-'+index);
			
			circle = index;
			num = index;
			
			circleChange()
			animation();
		})

		ol.appendChild(li);
	}
	//默认圆点
	ol.children[0].className = 'current';

	//克隆轮播图最后一张，添加到后面
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);

	arrowl.addEventListener('click', function() {

		if (flag) {
			flag = false;
			// 位移图片
			if (num == 0) {
				num = ul.children.length - 1;
				// console.log("left="+ul.style.left);
				ul.style.left = -num * focusWidth + 'px';

			}
			num--;

			animation();

			circle--;

			if (circle < 0) {
				circle = ol.children.length - 1;
			}
			circleChange();
		}
	})
	var num = 0;
	var circle = 0;
	arrowr.addEventListener('click', function() {
		if (flag) {
			flag = false;
			if (num == ul.children.length - 1) {
				ul.style.left = 0 + "px";
				num = 0;
			}
			// 位移图片
			num++;
			console.log('width=' + focusWidth);

			animation();

			//排他思想处理小圆点
			circle++;
			if (circle == ol.children.length) {
				circle = 0;
			}
			circleChange();
		}
	})

	var timer = setInterval(function() {

		arrowr.click();

	}, 2000);

	var flag = true;

	function animation() {

		animate(ul, -num * focusWidth, function() {
			flag = true;
		});
	}

	/**
	 * 小圆点 
	 */
	function circleChange() {
		for (var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = '';
		}
		ol.children[circle].className = 'current';
	}


})
