$(function() {

	var one = $('.one');
	// 判断是jquery对象
	console.log(one instanceof jQuery);

	one = document.getElementsByName('one');

	console.log(one);
	// 判断是dom对象，未成功
	console.log(one instanceof HTMLElement);

	$('ul li:eq(2)').css('color', 'red');
	$('ul li').eq(4).css('color', 'green');

	var child = $('ul').children();
	console.log(child[1]);

	
	//遍历多个对象，打印index ele
	$('ul li').each(function(index, ele) {

		console.log(ele + '--index=' + index);
	})

	var targetObj = {};
	var obj = {
		id: 1,
		name: "andy"
	};
	
	// $.extend(target, obj);
	$.extend(targetObj, obj);
	console.log(targetObj);

})
