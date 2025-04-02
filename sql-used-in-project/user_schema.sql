CREATE DATABASE cs348_project_db;
USE cs348_project_db;

-- the user table. Added a profile picture and removed email just so that 
--   there are less things to manage
DROP TABLE IF EXISTS user;
CREATE TABLE user (
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, 
    pfp VARCHAR(255) NOT NULL,
    PRIMARY KEY (username)
);

-- insert a user when someone signs up
INSERT INTO user (username, password, pfp)
VALUES
('bart', 'password1', 'pfp0.jpg');


-- get a user from the database and check if the password matches input on server
SELECT * FROM user WHERE username = 'bart';


-- delete an account
DELETE FROM user WHERE username = 'bart'