CREATE DATABASE test_database;
USE test_database;


DROP TABLE IF EXISTS user;
CREATE TABLE user (
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL
);


INSERT INTO user (email, password_hash, username)
VALUES
('bart@simpson.com', 'password', 'bart_s'),
('test@email.com', 'testpw', 'test_user'),
('amanda@waterloo.ca', 'mypassword', 'amanda');