CREATE DATABASE test_sample;
USE test_sample;

CREATE TABLE users (
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);


INSERT INTO users (email, password_hash)
VALUES
('bart@simpson.com', 'password'),
('test@email.com', 'testpw'),
('amanda@waterloo.ca', 'mypassword');