//引入file模块
const fs = require('fs');

// 读取文件内容
fs.readFile('./a.js','utf-8',(err,doc)=>{
	if(err){
		console.log(err);
	}else{
		console.log(doc);
	}
})
const con = '学习Node!'
//写入文件内容
fs.writeFile('../test1.md',con,err =>{
	console.log(err);
})