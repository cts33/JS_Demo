function animtor(obj, target, callback) {

	// 重置定时器
	clearInterval(obj.timer);
	// 设置定时器，同时给对象赋值timer对象
	obj.timer = setInterval(function() {

		var step = (target - obj.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		
		//对象的左侧距离，如果等于目标值，结束动画
		if (obj.offsetLeft == target) {
			clearInterval(obj.timer);
			//判断回调对象是否存在
			if (callback) {
				//如果存在，调用
				callback();
			}
		}
		console.log(step);
		obj.style.left = obj.offsetLeft + step + 'px';
		
	}, 50);//间隔时间

}
