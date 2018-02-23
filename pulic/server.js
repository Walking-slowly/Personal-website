const express = require("express");
const app = express();
const qs = require("querystring");
const hostName = '45.76.169.191';

const port = 80;

//连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'123456',
    database:'personal'
});
connection.connect();

//获取数据
app.post('/getList',function(req,res){
    res.set('Access-Control-Allow-Origin','*');
    //根据前端传过来的参数，返回数据
    var postData = '';
    var data;
    req.on("data", function (data) {
        postData += data;
    });
    req.on("end", function () {
        var query = qs.parse(postData);

        //读取数据库文件
        connection.query('SELECT * FROM list',function(err,datas){
            var frist = (Number(query.page)-1)*query.num;
            var num = Number(query.num) + frist;
            var end = (num > datas.length) ? datas.length : num;

            if (err) throw err;
            else data = datas.slice(frist,end);

            res.end(JSON.stringify({
                status:1,
                data,
                total: datas.length
            }))
        })
       
    });  
})

//登录后台
app.post('/getuser',function(req,res){
    res.set('Access-Control-Allow-Origin','*');
    //根据前端传过来的参数，返回数据
    var postData = '';
    var data;
    req.on("data", function (data) {
        postData += data;
    });
    req.on("end", function () {
        var query = qs.parse(postData);
        if(query.password){
            //查询数据库
            connection.query(`SELECT * FROM user WHERE username=${query.name} AND password='${query.password}'`,function(err,datas){
                if(datas == ''){
                    res.end('密码错误')
                }else{
                    res.end('')
                }
            })
        }else{
            //查询数据库
            connection.query(`SELECT * FROM user WHERE username=${query.name}`,function(err,datas){
                if(datas == ''){
                    res.end('账号不存在')
                }
            })
        }
        
    })
})



app.use(express.static("Personal-website")).listen(port,hostName,function(){
    console.log(`服务器运行在http://${hostName}:${port}`);
});
