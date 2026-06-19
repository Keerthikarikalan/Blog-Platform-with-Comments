CREATE DATABASE blogdb;

USE blogdb;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE posts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    content TEXT
);

CREATE TABLE comments(
    id INT PRIMARY KEY AUTO_INCREMENT,
    postId INT,
    comment TEXT,
    FOREIGN KEY(postId) REFERENCES posts(id)
);
