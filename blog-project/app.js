// express框架
const express = require('express');
const path = require('path');
// 创建网站服务器
const app = express();

// 告诉express 模板的所在位置
app.set('views',path.join(__dirname,'views'));
//告诉express模板后缀
app.set('view engine','art');
// 当后缀为art模板时，所使用的模板引擎是什么
app.engine('art',require('express-art-template'));


//引入静态资源文件
app.use(express.static(path.join(__dirname,'public')));

const home = require('./route/home');
const admin = require('./route/admin');
 
app.use('/home',home);
app.use('/admin',admin);
// 监听端口
app.listen(80);

console.log('服务器启动成功');
