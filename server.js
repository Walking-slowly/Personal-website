const express = require("express");
const app = express();
//用做获取前端传递参数
const qs = require("querystring");

//图片上传
const multer = require('multer');
const fs = require('fs');


// const hostName = 'localhost';

// const port = 8080;

//连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'123456',
    database:'personal'
});
connection.connect();

//获取全部数据
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

        //详情
        if(query.id){
            connection.query(`SELECT * FROM list WHERE id=${query.id}`,function(err,datas){
                if(err) throw err;
                res.end(JSON.stringify({
                    status:200,
                    data:datas
                }))
            })
        }
        //搜索
        else if(query.search){
            connection.query(`SELECT * FROM list WHERE title like "%${query.search}%"`,function(err,datas){
                if(err) throw err;
                res.end(JSON.stringify({
                    status:200,
                    data:datas
                }))
            })
        }
        else{
            //读取数据库文件
            connection.query('SELECT * FROM list',function(err,datas){
                var frist = (Number(query.page)-1)*query.num;
                var num = Number(query.num) + frist;
                var end = (num > datas.length) ? datas.length : num;
                datas = datas.reverse();
                if (err) throw err;
                
                else data = datas.slice(frist,end);

                res.end(JSON.stringify({
                    status:200,
                    data,
                    total: datas.length
                }))
            })
        }

        
       
    });  
})

//插入数据
app.post('/insertDate',function(req,res){
    res.set('Access-Control-Allow-Origin','*');
    //获取前端传过来的参数
    var postData = '';
    var data;
    req.on("data", function (data) {
        postData += data;
    });
    req.on("end", function () {
        var query = qs.parse(postData);
        //修改对应数据
        connection.query(`INSERT INTO list (title,brief,Fabulous,lick,comment,time,ueditor) VALUES ('${query.title}','${query.brief}','${query.Fabulous}','${query.lick}','${query.comment}','${query.time}','${query.ueditor}')`,function(err,datas){
            if(err) throw err;
            res.end(JSON.stringify({
                status:200
            }))
        })
       
    }); 
})

//图片上传
const storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
		cb(null, './static/img')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		const fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
const upload = multer({
	storage: storage
});

//多图上传
app.post('/upload', upload.any(), function(req, res, next) {	
    res.append("Access-Control-Allow-Origin","*");
	res.send({
		files:req.files
	});
});




app.listen(12345);
console.log('连接成功')

// app.use(express.static("Personal-website")).listen(port,hostName,function(){
//     console.log(`服务器运行在http://${hostName}:${port}`);
// });
