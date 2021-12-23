const express = require('express');

const admin = express.Router();

admin.get('/login',(req,res)=>{
	
	res.render('admin/login')
	// res.send('hello this is admin')
	 
});
//将路由对象 供外部访问
module.exports = admin;