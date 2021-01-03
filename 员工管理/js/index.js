(function(){
	var add = document.querySelector('.add');
	var nav = document.querySelector('.nav');
	var navs = nav.querySelectorAll('a');
	var list = document.querySelector('.list');
	var operate = document.querySelector('.operate');
	var showForm = false; //是否显示 输入框
	/*
		dataState 当前 展示哪项列表
		0: 所有列表
		1: 女员工列表
		2: 男员工列表
		3: 在职员工列表
		4: 离职员工列表
	*/
	var dataState = 0;
	render();
	/* 切换输入框的显示和隐藏 */
	var addBtn = document.querySelector('.addBtn');
	addBtn.onclick = function(){
		showForm = !showForm;
		render();
	};
	/* 数据提交 */
	var name = document.querySelector('.name');
	var age = document.querySelector('.age');
	var state = document.querySelector('.state');
	var gender = document.querySelector('.gender');
	var submit = document.querySelector('.submit');
	submit.onclick = function(){
		addData({
			name: name.value,
			age: age.value,
			state: !state.checked,
			gender: gender.checked?"女":"男"
		});
		showForm = false;
		dataState = 0;
		render();
	};
	/* 视图切换 */
	navs.forEach((item,key)=>{
		item.onclick = function(){
			dataState = key;
			render();
		};	
	});
	/*获取当前列表对应数据*/
	function getList(nub){
		var list = [
			getAll,
			getLadies,
			getGentlemen,
			getEmployee,
			getFormer
		]
		if(nub === undefined){
			nub = dataState;
		}
		return list[nub]();
	}	
	/*添加数据*/
	function addData(info){
		data.push(Object.assign(info,{id:Symbol(),selected:false}));
	}
	/* 获取所有数据 */
	function getAll(){
		return data;
	}
	/* 获取所有数据 */
	function getLadies(){
		return data.filter((item)=>item.gender == "女");
	}
	/* 获取男员工数据 */
	function getGentlemen(){
		return data.filter((item)=>item.gender == "男");
	}
	/* 获取在职员工数据 */
	function getEmployee(){
		return data.filter((item)=>item.state);
	} 		
	/* 获取离职员工数据 */
	function getFormer(){
		return data.filter((item)=>(!item.state));
	}
	/* 判断当前列表中的选中项 */
	function getChecked(){
		return getList().filter((item)=>item.checked);
	}
	/* 判断当前列表是否全选 */
	function getListChecked(){
		return getList().length == getChecked().length;		
	}
	/* 当前列表 全选、选不选 */
	function changeListChecked(state){
		getList().forEach((item)=>{
			item.checked = state;
		});
	}
	/* 修改当前选中项的删除 */
	function changeChecked(id,state){
		getList().forEach((item)=>{
			id == item.id?item.checked = state:"";
		});
		return this;
	}
	/* 改变该条目 职位状态 */
	function changeState(id,state){
		getChecked().forEach((item)=>{
			id == item.id?item.state = state:""
		});
	}
	/* 改变当前视图的职位状态 */
	function changeGroupState(state){
		getChecked().forEach((item)=>{
			item.state = state;
		});
	}
	/* 删除某个条目 */
	function remove(id){
		data = data.filter((item)=>{
			return item.id !== id;		
		});
	}
	/* 批量删除 */
	function removeCheck(){
		let checkData = getChecked();
		data = data.filter((item)=>{
			for(let i = 0; i < checkData.length; i++){
				if(checkData[i] ==item){
					return false;
				} 
			}
			return true;
		});	
	}
	/* 根据数据渲染视图 */
	function render(){
		var data = getList(); //根据当前列表的状态，拿到对应的数据，建立新数组
		/* 渲染输入框 */
		add.style.display = showForm?"flex":"none";
		/* 渲染导航 */
		nav.style.display = data.length?"flex":"none";
		for(var i = 0; i < navs.length&&data.length > 0; i++){
			navs[i].className = dataState == i?"selected":"";
			navs[i].style.display = getList(i).length?"block":"none"; 
		}
		/* 渲染列表 */		
		list.style.display = data.length?"block":"none";
		
		list.innerHTML = `<li>
			<span>
				<input type="checkbox" ${getListChecked()?"checked":""} class="checkAll">
			</span>
			<span>姓名</span>
			<span>性别</span>
			<span>年龄</span>
			<span>状态</span>
			<span>操作</span>
		</li>`;
		list.querySelector(".checkAll").onchange = function(){
			changeListChecked(this.checked);
			render();
		};
		data.forEach((item)=>{
			var li = document.createElement("li");
			li.innerHTML = `
			<span>
				<input type="checkbox" ${item.checked?"checked":""} class="checkAll">
			</span>
			<span>${item.name}</span>
			<span>${item.gender}</span>
			<span>${item.age}</span>
			<span><a href="javascript:;">${item.state?"在职":"离职"}</a></span>
			<span><a href="javascript:;">删除</a></span>`;
			var check = li.querySelector('input');
			var btns = li.querySelectorAll('a');
			check.onchange = function(){
				changeChecked(item.id,this.checked);
				render();
			};	
			btns[0].onclick = function(){
				changeState(item.id,!item.state);
				render();
			};
			btns[1].onclick = function(){
				remove(item.id);
				render();
			};
			list.appendChild(li);
		});
		/* 渲染操作按钮 */
		operate.style.display = getChecked().length?"flex":"none";
	}
	/* 批量操作 */
	var operateBtns = operate.querySelectorAll('a');
	operateBtns[0].onclick = function(){
		removeCheck();
		render();
	};
	operateBtns[1].onclick = function(){
		changeGroupState(true);
		render();
	};
	operateBtns[2].onclick = function(){
		changeGroupState(false);
		render();
	};
})();