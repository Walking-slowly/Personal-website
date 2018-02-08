const express = require("express");
const app = express();
const qs = require("querystring");

//连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'123456',
    database:'Personal'
});
connection.connect();

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
app.listen(12345);
console.log('连接成功')