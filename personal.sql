/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : personal

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-04-28 11:03:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '标题',
  `brief` varchar(255) NOT NULL COMMENT '简介',
  `Fabulous` int(200) NOT NULL COMMENT '浏览数',
  `lick` int(200) NOT NULL COMMENT '喜欢',
  `comment` int(200) NOT NULL COMMENT '评论',
  `time` varchar(10000) NOT NULL COMMENT '时间',
  `ueditor` varchar(10000) NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '第一个', '恩恩呢', '0', '0', '0', '1523329853136', '<p>66666</p>');
INSERT INTO `list` VALUES ('2', '第二个', '恩恩呢打打打', '0', '1', '0', '1523329853136', '<p>66666</p>');
INSERT INTO `list` VALUES ('3', '第三个', '恩恩呢打打打水水水水水水', '1', '2', '0', '1523344218688', '<p>66666</p>');
INSERT INTO `list` VALUES ('4', '第三个', '恩恩呢打打打水水水水水水', '1', '2', '0', '1523344218688', '<p>66666</p>');
INSERT INTO `list` VALUES ('5', '第三个', '恩恩呢打打打水水水水水水', '1', '2', '0', '1523344218688', '<p>66666</p>');
INSERT INTO `list` VALUES ('6', '第三个', '恩恩呢打打打水水水水水水', '1', '2', '0', '1523344218688', '<p>66666</p>');
INSERT INTO `list` VALUES ('7', '1', '1', '0', '0', '0', '1524820824927', '<p>1</p>');
INSERT INTO `list` VALUES ('8', '1', '1', '0', '0', '0', '1524820856439', '<p>1</p>');
INSERT INTO `list` VALUES ('9', '2', '2', '0', '0', '0', '1524821484775', '<p>2</p>');
INSERT INTO `list` VALUES ('10', '2', '2', '0', '0', '0', '1524821559135', '<p>2</p>');
INSERT INTO `list` VALUES ('11', '3', '3', '0', '0', '0', '1524821570319', '<p>3</p>');
INSERT INTO `list` VALUES ('12', '4', '4', '0', '0', '0', '1524821621295', '<p>4</p>');
INSERT INTO `list` VALUES ('13', '5', '5', '0', '0', '0', '1524821703663', '<p>5</p>');
INSERT INTO `list` VALUES ('14', '6', '6', '0', '0', '0', '1524821722063', '<p>6</p>');
INSERT INTO `list` VALUES ('15', '7', '7', '0', '0', '0', '1524821757686', '<p>7</p>');
INSERT INTO `list` VALUES ('16', '8', '8', '0', '0', '0', '1524821770046', '<p>8</p>');
INSERT INTO `list` VALUES ('17', '8', '8', '0', '0', '0', '1524821781750', '<p>8</p>');
INSERT INTO `list` VALUES ('18', '8', '8', '0', '0', '0', '1524821808661', '<p>8</p>');
INSERT INTO `list` VALUES ('19', '9', '9', '0', '0', '0', '1524821819958', '<p>9</p>');
INSERT INTO `list` VALUES ('20', '10', '10', '0', '0', '0', '1524821857567', '<p>10</p>');
INSERT INTO `list` VALUES ('21', '11', '11', '0', '0', '0', '1524821907175', '<p>11</p>');
INSERT INTO `list` VALUES ('22', '1212', '12', '0', '0', '0', '1524821941622', '<p>12</p>');
INSERT INTO `list` VALUES ('23', '13', '13', '0', '0', '0', '1524821953942', '<p>13</p>');
INSERT INTO `list` VALUES ('24', '试试', '是', '0', '0', '0', '1524822422750', '<p>水水水水水是是飒飒是是</p><blockquote>var time = new Date();&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var dada = dadadasdadasdad&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let dadada&nbsp; dadada&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</blockquote><p><br></p><p><br></p><p><br></p>');
INSERT INTO `list` VALUES ('25', 'dad', 'dadsa', '0', '0', '0', '1524822599151', '<p>&nbsp; &nbsp; &nbsp; &nbsp; 大大大萨达打算大苏打水水水水水水水水水水水水水水水水水水水sssssssssssssssss试试是</p><blockquote>var new Data();<br>var left dadada<br>dadad&nbsp;</blockquote>');
INSERT INTO `list` VALUES ('26', 'sdada ', 'dadad ', '0', '0', '0', '1524822761469', '<blockquote>var ele = document.getElementById()<br>vadasdadasdasdasdad<br>dadadada</blockquote>');
INSERT INTO `list` VALUES ('27', 'ssds', 'ssssssss', '0', '0', '0', '1524823194373', '<p><span style=\"font-weight: 700;\">试试</span></p><p><span style=\"font-style: italic;\">杀杀杀</span></p><p><span style=\"text-decoration-line: underline;\">杀杀杀</span></p><p><span style=\"font-size: x-large;\">杀杀杀</span></p><p><span style=\"text-decoration-line: line-through;\">杀杀杀</span></p><p><span style=\"text-decoration-line: line-through;\">杀杀杀</span></p><p><span style=\"text-decoration-line: line-through;\">顶顶顶</span></p><p><span style=\"color: rgb(194, 79, 74);\">杀杀杀</span></p><p>试试</p><p><a href=\"http://www.baidu.com\" target=\"_blank\">百度</a><br></p>');
SET FOREIGN_KEY_CHECKS=1;
