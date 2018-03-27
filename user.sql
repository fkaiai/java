/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-03-22 13:48:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL COMMENT '用户名称',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `sex` char(1) DEFAULT NULL COMMENT '性别',
  `address` varchar(256) DEFAULT NULL COMMENT '地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '王五a', '2014-07-10', '2', '在');
INSERT INTO `user` VALUES ('10', '张三', '2014-07-10', '1', '北京市');
INSERT INTO `user` VALUES ('16', '张小明', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('22', '陈小明', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('24', '张三丰', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('25', '陈小明', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('26', '王五', '2014-07-10', '2', '顶替');
INSERT INTO `user` VALUES ('27', '张三丰1', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('28', '张三丰2', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('29', '张三丰3', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('30', '张三丰4', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('31', '张三丰5', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('32', '张三丰6', '2014-07-10', '1', '河南郑州');
INSERT INTO `user` VALUES ('33', '张三丰7', '2014-07-10', '1', '河南郑州');
