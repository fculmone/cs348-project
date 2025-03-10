CREATE DATABASE cs348_project_db;
USE cs348_project_db;


-- ALSO probably want to make one schema for all tables so we can just paste that in
--  and create database with some pre-filled data


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



-- Create city table
DROP TABLE IF EXISTS city;
CREATE TABLE city (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    description TEXT,
    popularity INT DEFAULT 0 CHECK (popularity BETWEEN 0 AND 100)
);

INSERT INTO city (city_name, country, description, popularity)
VALUES
('Paris', 'France', 'Known for its rich history and landmarks like the Eiffel Tower.', 92),
('New York', 'USA', 'Famous for the Statue of Liberty, Times Square, and skyscrapers.', 85);


-- Create favourite cities table
DROP TABLE IF EXISTS  favourite_cities;
CREATE TABLE favourite_cities (
    username VARCHAR(255) NOT NULL,
    city_id INT NOT NULL,
    FOREIGN KEY (username) REFERENCES user(username),
    FOREIGN KEY (city_id) REFERENCES top100_cities(ranking),
    PRIMARY KEY (username, city_id)
);

-- Sample favourite cities data
INSERT INTO favourite_cities (username, city_id)
VALUES 
('bart', 1);
