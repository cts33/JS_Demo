const express = require('express');

const admin = express.Router();

admin.get('/',(req,res)=>{
	
	res.send('hello this is admin')
	console.log();
});
//将路由对象 供外部访问
module.exports = admin;