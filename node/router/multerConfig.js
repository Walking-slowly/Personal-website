const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
	// 设置上传后文件路径, 自动生成upload文件夹
	destination: function(req, file, cb) {
		cb(null, '../dist/upload/')
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

module.exports = upload