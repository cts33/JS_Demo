const fs = require('fs');
// 获取路径对象
const path = require('path');

// 获取当前目录路径
console.log('1='+__dirname);
//
console.log('2='+path);
// 目录路径和文件拼接
console.log('3='+path.join(__dirname, 'a.js'))

//读取拼接后的文件，打印err doc
fs.readFile(path.join(__dirname, 'a.js'), 'utf8', (err, doc) => {
	console.log(err)
	console.log(doc)
});
// 写入数据到文件里
fs.writeFile(path.join(__dirname,'test.md'),'被写入的内容',err =>{
	if(err){
		console.log(err);
	} 
})