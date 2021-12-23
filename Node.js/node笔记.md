Node
	是一个基于Chrome V8引擎的JavaScript代码运行环境
下载安装
	[](https://nodejs.org/en/)
	LTS = Long Term Support 长期支持版 稳定版	Current 拥有最新特性 实验版
配置环境Node环境变量	
	将node配置到环境变量里 

三部分
		javascript 三部分组成：ECMAScript DOM BOM
		Node.js是有ECMAScript 及Node 环境提供的一些附加API组成的。
执行命令
	命令窗口
	node test.js
全局对象global
	在浏览器里全局对象是window,在node里全局对象是global
	
	全局方法：这些方法可以全局使用，global可以省略
	console.log()
	setTimeOut()
	clearTimeOut()
	setInterval()
	clearInterval()
	
Node 模块化开发
	Node.js 规定一个js 文件就是一个模块，模块内部的变量和函数，默认情况下无法外部得到

	exprots.sum 被其他模块使用
	require('./a.js')引用a文件
	
	module.exports和exports 同时使用，以module.exports为准。
	
	
javascript 开发问题
	js使用时存在两大问题，文件依赖和命名冲突
	
系统模块
	文件模块
	_dirname 获取当前文件路径  console.log(__dirname);
	
	path.join() 拼接路径
	fs.readFile(path.join(__dirname, '01.helloworld.js'), 'utf8', (err, doc) => {
		console.log(err)
		console.log(doc)
	});

	
第三方模块
	1.获取
		npmjs.com 第三方模块的储存和分发仓库
		npm （node package mangager） node管理工具
	2.下载模块
		npm install 模块名字
		npm uninstall package 删除模块
	
	3.nodemon 命令行工具，辅助项目开发
		npm install nodemon -g    g:global全局
		在命令行工具中用nodemon 替换node命令执行文件
	4.nrm (npm registry manager) npm下载地址切换工具
		npm默认下载地址在国外。
		npm.taobao.com
		nrm ls 列出可用的地址列表
		nrm use 设置使用哪个地址
Gulp
	项目上线，html css js 文件压缩
	语法转换 es6 less
	公共文件抽离
	修改浏览器自动刷新
	
package.json
		项目描述文件，记录项目信息，名称 版本作者 github地址，当前项目依赖了哪些第三方插件
		npm init 初始化

node_mudole 文件夹		
		项目依赖
		开发依赖 ： 辅助开发环境的依赖
			{
				devDependencies:{
					'gulp':'^3.9.1'
				}
			}
			
package-lock.json 文件
	记录module之间的依赖关系，锁定包的版本，防止其他人下载其他版本
	


MongoDB
	数据库相关概念
		database 库
		collection 集合 一组数据的集合
		document	文档 一条具体的数据
		field 字段  属性名称
Express
		web服务器应用框架