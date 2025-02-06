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


-- Create cities table
CREATE TABLE cities (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    description TEXT
);


INSERT INTO cities (city_name, country, description)
VALUES
('Paris', 'France', 'Known for its rich history and landmarks like the Eiffel Tower.'),
('New York', 'USA', 'Famous for the Statue of Liberty, Times Square, and skyscrapers.');

-- Create reviews table
CREATE TABLE reviews (
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
INSERT INTO reviews (user_email, city_id, rating, review_text)
VALUES
('bart@simpson.com', 1, 4, 'Amazing city with lots of history!'),
('test@email.com', 2, 5, 'The best city in the world, so much to do!'),
('amanda@waterloo.ca', 1, 3, 'Nice place, but a bit crowded.');
