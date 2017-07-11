CREATE DATABASE nubia CHARSET=UTF8;
USE nubia;

CREATE TABLE nubia_user(
 uid INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(25),
 upwd  VARCHAR(32)
);
INSERT INTO nubia_user VALUES(null,'liudongmei','123456');
INSERT INTO nubia_user VALUES(null,'nubia','123456');

