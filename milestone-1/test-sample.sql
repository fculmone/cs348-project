CREATE DATABASE test_db;
USE test_db;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL
);


INSERT INTO users (email, password_hash, username)
VALUES
('bart@simpson.com', 'password', 'bart_s'),
('test@email.com', 'testpw', 'test_user'),
('amanda@waterloo.ca', 'mypassword', 'amanda');


-- Create city table
DROP TABLE IF EXISTS city;
CREATE TABLE city (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    description TEXT
);

INSERT INTO city (city_name, country, description)
VALUES
('Paris', 'France', 'Known for its rich history and landmarks like the Eiffel Tower.'),
('New York', 'USA', 'Famous for the Statue of Liberty, Times Square, and skyscrapers.');


-- Create review table
DROP TABLE IF EXISTS review;
CREATE TABLE review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(255),
    city_id INT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_email) REFERENCES users(email),
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);

-- Insert sample reviews
INSERT INTO review (user_email, city_id, rating, review_text)
VALUES
('bart@simpson.com', 1, 4, 'Amazing city with lots of history!'),
('test@email.com', 2, 5, 'The best city in the world, so much to do!'),
('amanda@waterloo.ca', 1, 3, 'Nice place, but a bit crowded.');


-- Create country table
DROP TABLE IF EXISTS country;
CREATE TABLE country (
    country_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    health_recommendations TEXT,
    canada_travel_advisory TEXT,
    currency_exchange_rate DECIMAL(10, 2)
);

-- Sample country data
INSERT INTO country (name, health_recommendations, canada_travel_advisory, currency_exchange_rate)
VALUES 
('France', 'Vaccination required for yellow fever.', 'No travel restrictions.', 1.45),
('USA', 'General vaccinations recommended.', 'Exercise normal security precautions.', 1.30);



-- Create favourite cities table
DROP TABLE IF EXISTS  favourite_cities;
CREATE TABLE favourite_cities (
    username VARCHAR(255) NOT NULL,
    city_id INT NOT NULL,
    country_id INT NOT NULL,
    FOREIGN KEY (username) REFERENCES users(username),
    FOREIGN KEY (city_id) REFERENCES cities(city_id),
    FOREIGN KEY (country_id) REFERENCES countries(country_id),
    PRIMARY KEY (username, city_id, country_id)
);

-- Sample favourite cities data
INSERT INTO favourite_cities (username, city_id, country_id)
VALUES 
('bart_s', 1, 1),
('test_user', 2, 2);


