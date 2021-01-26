Path
	
	
第三方模块
	1.获取
		npmjs.com 第三方模块的储存和分发仓库
		npm node package mangager
	2.下载模块
		npm install 模块名字
		npm uninstall 删除模块
	
	3.nodemon 命令行工具，辅助项目开发
		npm install nodemon -g    g:global全局
		在命令行工具中用nodemon 替换node命令执行文件
	4.nrm (npm registry manager) npm下载地址切换工具
		npm默认下载地址在国外。
		npm.taobao.com
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
	
	