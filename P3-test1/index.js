var xx = document.querySelector('.header .search .search_input')

xx.addEventListener('focus', function() {
	this.placeholder = '';
	console.log(this);

})

xx.addEventListener('blur', function() {
	this.placeholder = '毛衣';
})
var sea_all = document.querySelector('.header .search').querySelector('button');

// console.log('sea=' + sea_all);
sea_all.addEventListener('click', function() {

	alert(xx.value);
})


var color = document.querySelector('.color')
var aa = color.querySelectorAll('a');
for (var i = 0; i < aa.length; i++) {
	var isOk = false;
	aa[i].addEventListener('click', function() {
		if (isOk) {
			this.style.border = '2px solid gray';
			isOk = false;
		} else {
			this.style.border = '1px solid gray';
			isOk = true;
		}

	})
}



var size = document.querySelector('.size')
var ss = size.querySelectorAll('a');

for (var i = 0; i < ss.length; i++) {

	ss[i].addEventListener('click', function() {
		var s = size.querySelectorAll('a');
		// console.log(s);
		for (var i = 0; i < s.length; i++) {
			s[i].style.border = '1px solid gray';
		}

		this.style.border = '2px solid gray';

	})
}

var num = document.querySelector('.num')
var jian = num.querySelector('.jian');
var jia = num.querySelector('.jia');

jian.addEventListener('click', function() {
	var shuliang = num.querySelector('.shuliang');
	var index = parseInt(shuliang.innerHTML);
	if (index > 1) {
		index--;
		shuliang.innerHTML = index+'';
	}
	if (index == 1) {
		shuliang.disabled = true;
	}
});

jia.addEventListener('click', function() {

	var shuliang = num.querySelector('.shuliang');

	var index = parseInt(shuliang.innerHTML);
	index++;
	shuliang.innerHTML= index+'';
});
