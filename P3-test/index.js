document.addEventListener("DOMContentLoaded", function() {

	var sou = document.querySelector('.header_input');
	console.log(sou);
	sou.addEventListener("focus", function() {

		console.log(this);
		this.value = "";
	});

	sou.addEventListener("blur", function() {

		this.value = "11.11";
	});

	var yy = document.querySelector('.tab_n').querySelectorAll('li');

	console.log(yy);
	for (var i = 0; i < yy.length; i++) {
		yy[i].setAttribute('index', i);
		yy[i].onclick = function() {

			for (var i = 0; i < yy.length; i++) {
				yy[i].className = '';
			}
			this.className = 'tab_curr';
			var index = this.getAttribute('index');

			var span = document.querySelector('.content').querySelector('span');

			console.log(this.innerHTML);
			span.innerHTML = this.innerHTML;


		}
	}


	var li = document.querySelector('.left_tag').querySelectorAll('li');

	for (var i = 0; i < li.length; i++) {
		li[i].setAttribute('index', i);

		li[i].onclick = function() {
			console.log(this);
			for (var i = 0; i < li.length; i++) {
				li[i].className = '';
			}

			this.className = 'tag_curr';
		}
	}

})
