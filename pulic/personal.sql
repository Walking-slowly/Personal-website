/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : personal

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-03-13 09:51:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(200) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '文章标题',
  `brief` varchar(255) NOT NULL COMMENT '文章简介',
  `img` varchar(255) DEFAULT NULL,
  `browse` int(200) NOT NULL COMMENT '浏览数',
  `Fabulous` int(200) NOT NULL COMMENT '点赞量',
  `water` int(200) NOT NULL,
  `ueditor` varchar(10000) NOT NULL COMMENT '文章内容',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '第一第一', '第一个标题的简介，第一个标题的简介，第一个标题的简介，第一个标题的简介，第一个标题的简介，第一个标题的简介，第一个标题的简介，', 'img/01.jpg', '3', '0', '0', '<p><img src=\"http://pic1.sc.chinaz.com/Files/pic/Listfaces/4983/01.gif\" alt=\"[坏笑]\" data-w-e=\"1\"><img src=\"../../../static/img/files-1520300957309.jpg\" style=\"max-width: 100%;\"><br></p>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('3', 'wangEditor', '富文本编辑器', 'img/03.jpg', '3', '0', '0', '<h2 style=\"text-align: center;\">&nbsp;wangEditor</h2><p>第一次使用wangEditor编辑器</p><p><br></p><blockquote style=\"text-align: center;\">大动静啊大姐啊还贷款阿第克阿卡打开的卡卡的咯大k</blockquote>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('4', '这是第四个标题', '第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，', 'img/04.jpg', '0', '0', '0', '<p>上线撒倒萨</p>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('5', '这是第五个标题', '第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，', 'img/05.jpg', '0', '0', '0', '<p><a href=\"http://www.baidu.com\" target=\"_blank\">百度</a>杀杀杀<br></p>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('6', '这是第六个标题', '第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，', 'img/06.jpg', '0', '0', '0', '', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('7', '这是第七个标题', '第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，', 'img/07.jpg', '0', '0', '0', '', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('8', '这是第四个标题', '第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，第四个标题的简介，', 'img/04.jpg', '0', '0', '0', '', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('9', '这是第五个标题', '第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，', 'img/05.jpg', '0', '0', '0', '', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('10', '这是第六个标题', '第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，', 'img/06.jpg', '2', '0', '0', '', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('12', '这是第七个标题', '第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，第五个标题的简介，', 'img/07.jpg', '2', '0', '0', '', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('17', '第N个', '测试', '', '87', '23', '4', '<p><img src=\"../../../static/img/files-1520473766471.png\" style=\"max-width:100%;\"><br></p>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('18', '反反复复', '反反复复', '', '2', '0', '0', '<p style=\"text-align: center;\">烦烦烦</p><p style=\"text-align: left;\"><img src=\"../../../static/img/files-1520473594924.png\" style=\"max-width:100%;\"><br></p><p style=\"text-align: left;\">111</p>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('19', 'ssss', 'ssss', '', '2', '0', '0', '<p>sssss</p>', '2018-03-12 09:22:16');
INSERT INTO `list` VALUES ('20', 'ssss', 'ssss', '', '1', '0', '0', '<p>sssss</p>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('21', 'ssss', 'ssss', '', '1', '0', '0', '<p>sssss<img src=\"../../../static/img/files-1520477299182.png\" style=\"max-width: 100%;\"></p>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('22', '水水水水水', '杀杀杀', '', '8', '0', '0', '<p>杀杀杀<img src=\"../../../static/img/files-1520477538850.jpg\" style=\"max-width: 100%;\"></p>', '2018-03-09 15:05:20');
INSERT INTO `list` VALUES ('25', 's是', '是', '', '4', '0', '0', '<p>是</p>', '2018-03-12 09:38:47');
INSERT INTO `list` VALUES ('26', '水水水水水水水水水水水水水水', '水水水水水水水水水水水水水水水水水水', '', '18', '2', '1', '<p>水水水水水水水水水水水水水水水水水<span style=\"background-color: rgb(241, 241, 241);\">editor.customConfig.customUploadImg = function (files, insert) {</span></p><pre><code>\n            // files 是 input 中选中的文件列表\n            // insert 是获取图片 url 后，插入到编辑器的方法\n\n            // 上传代码返回结果之后，将图片插入到编辑器中\n            var formData = new FormData();\n            $(files).each(function(index,item){\n                \n                formData.append(\"files\",item);\n            })\n\n           $.ajax({\n				url: \"http://localhost:12345/upload\",\n				type: \"POST\",\n				cache: false, //不必须\n				data: formData,\n				processData: false,\n				contentType: false,\n				success: function(data) {\n					$(data.files).each(function(index,item){\n                        insert(\"../../../static/img/\"+item.filename)\n                    })\n				}\n            })\n        }</code></pre><p><br></p>', '2018-03-12 09:38:38');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '17688881701', 'ly951220');
SET FOREIGN_KEY_CHECKS=1;
