const express = require('express');

const home = express.Router();

home.get('/',(req,res)=>{
	
	res.send('hello this is home')
	console.log();
});
//将路由对象 供外部访问
module.exports = home;