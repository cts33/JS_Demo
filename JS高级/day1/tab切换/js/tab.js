var that;
class Tab {
	constructor(id) {
		// 获取元素 
		that = this;
		this.main = document.querySelector(id);

		this.add = this.main.querySelector('.tabadd');
		this.ul = this.main.querySelector('.firstnav ul:first-child')
		this.fsection = this.main.querySelector('.tabscon');

		this.init();
	}
	//刷新父布局
	updateNode() {
		this.lis = this.main.querySelectorAll('li');
		this.sections = this.main.querySelectorAll('section');
		this.remove = this.main.querySelectorAll('.icon-guanbi');
		this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
	}

	init() {
		this.updateNode();
		for (var i = 0; i < this.lis.length; i++) {
			//索引
			this.lis[i].index = i;
			this.lis[i].onclick = this.toggleTab;
			this.remove[i].onclick = this.removeTab;
			this.spans[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
		}
		this.add.onclick = this.addTab;
	}
	//切换开关
	toggleTab() {
		console.log();
		that.clearCss();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';

	}
	clearCss() {
		//清除tab和内容的状态
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}

	addTab() {

		that.clearCss();
		var random = Math.random();
		//add li
		var li = '<li class="liactive"><span>new Tab</span><span class="iconfont icon-guanbi"></span></li>';
		that.ul.insertAdjacentHTML('beforeend', li);
		// add section
		var section = '<section class="conactive">' + random + '</section>';
		that.fsection.insertAdjacentHTML('beforeend', section);

		that.init();
	}

	removeTab(e) {
		e.stopPropagation(); //阻止冒泡，防止触发li的点击事件
		var index = this.parentNode.index;
		console.log(index);
		that.ul.children[index].remove();
		that.sections[index].remove();
			
		that.init();
		//如果是最后一个，返回
		if(index==0){
			return;
		}
		//关闭的选项之前一个为选中状态
		that.lis[index-1].click();
	}

	editTab() {
		window.getSelection? window.getSelection().removeAllRanges():document.selection.empty();
		// console.log('hh');
		var str = this.innerHTML;
		this.innerHTML = '<input type= "text" value ="'+str+'"/>';
		
		var input = this.children[0];
		input.select();//处于选定状态
		input.onblur = function(){
			//重新赋值
			input.parentNode.innerHTML = this.value;
		}
		//实现点击回车，确认内容
		input.onkeyup = function(e){
			if(e.keyCode===13){
				this.blur();
			}
		}
	}


}
new Tab('#tab');
