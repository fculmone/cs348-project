-- CREATE DATABASE cs348_project_db;
USE cs348_project_db;


-- ALSO probably want to make one schema for all tables so we can just paste that in
--  and create database with some pre-filled data

-- The only one currently in use is favourite_cities. For now, the main city table is
--  top-100-cities-schema.sql

-- Create city table
DROP TABLE IF EXISTS city;
CREATE TABLE city (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    description TEXT,
    popularity INT DEFAULT 0 CHECK (popularity BETWEEN 0 AND 100),
    health_rating INT DEFAULT 0 CHECK (health_rating BETWEEN 0 and 110) 
);

INSERT INTO city (city_name, country, description, popularity)
VALUES
('Paris', 'France', 'Known for its rich history and landmarks like the Eiffel Tower.', 92, 50),
('New York', 'USA', 'Famous for the Statue of Liberty, Times Square, and skyscrapers.', 85, 30),
('Tokyo', 'Japan', 'Known for its advanced technology, fashion, and bustling city life.', 98, 12),
('London', 'United Kingdom', 'Famous for its historical landmarks like the Big Ben and the British Museum.', 93, 90);


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
