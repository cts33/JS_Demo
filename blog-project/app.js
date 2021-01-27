// express框架
const express = require('express');
const path = require('path');
// 创建网站服务器
const app = express();

//引入静态资源文件
app.use(express.static(path.join(__dirname,'public')));

const home = require('./route/home');
const admin = require('./route/admin');
 
app.use('/home',home);
app.use('/admin',admin);
// 监听端口
app.listen(80);

console.log('服务器启动成功');
