-- CREATE DATABASE cs348_project_db;
USE cs348_project_db;


-- Create review table
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    city_id INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT,
    FOREIGN KEY (username) REFERENCES user(username),
    FOREIGN KEY (city_id) REFERENCES top100_cities(ranking)
);

INSERT INTO reviews (city_id, username, rating, review_text)
VALUES
(1, 'bart', 5, "Very nice city");
