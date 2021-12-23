var login_lay = document.querySelector('.log_reg')
var ercode_lay = document.querySelector('.ercode')
var swit = document.querySelector('.code_switch')
var lis = login_lay.querySelectorAll('li');

var isLogin = true;
swit.addEventListener('click', function() {
	if (isLogin) {
		this.src = 'img/login_icon.png'
		isLogin = false;
		//切换布局结构
		login_lay.style.visibility = 'hidden'
		ercode_lay.style.visibility = 'visible'
		
	} else {
		this.src = 'img/ercode_icon.png'
		isLogin = true;
		//切换布局结构
		login_lay.style.visibility = 'visible'
		ercode_lay.style.visibility = 'hidden'
	}


})
var pswlay = document.querySelector('.content .psw_content');
var smslay = document.querySelector('.content .sms_content');
var as = document.querySelectorAll('.log_reg li a');
for (var i = 0; i < as.length; i++) {
	as[i].onclick = function() {

		console.log(this);


		var as = document.querySelectorAll('.log_reg li a')
		for (var i = 0; i < as.length; i++) {
			as[i].className = '';
		}
		this.className = 'log_nav_curr';

		if (this.innerHTML === '密码登录') {
		 
			pswlay.style.visibility = 'visible'
			smslay.style.visibility = 'hidden';
		} else {
		 
			pswlay.style.visibility = 'hidden'
			smslay.style.visibility = 'visible';
		}
	}
}

var wx = document.querySelector('.wx');
var sl = document.querySelector('.sl');
var qq = document.querySelector('.qq');

wx.addEventListener('mouseenter',function(){
	this.src = 'img/icon3.png';
})
wx.addEventListener('mouseleave',function(){
	this.src = 'img/icon1.png';
})
sl.addEventListener('mouseenter',function(){
	this.src = 'img/icon3.png';
})
sl.addEventListener('mouseleave',function(){
	this.src = 'img/icon2.png';
})