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

INSERT INTO user (username, password, pfp)
VALUES
('bart', 'password1', 'pfp0.jpg');


