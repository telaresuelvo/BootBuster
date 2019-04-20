DROP DATABASE IF EXISTS history;

CREATE DATABASE history;

USE history;

CREATE TABLE items (
 id INT NOT NULL AUTO_INCREMENT,
 address VARCHAR(60) NOT NULL,
 PRIMARY KEY(ID)
);
INSERT INTO items (address) VALUES ('949 bryce canyon salt lake city ut');
