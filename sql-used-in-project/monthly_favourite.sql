DROP TABLE IF EXISTS most_favourited;

CREATE TABLE most_favourited (
    city_id INT PRIMARY KEY,
    city_name VARCHAR(255),
    country VARCHAR(255),
    total_favourites INT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO most_favourited (city_id, city_name, country, total_favourites)
SELECT
    t.ranking AS city_id,   
    t.city AS city_name,
    t.country,
    COUNT(fc.username) AS total_favourites
FROM
    favourite_cities fc
JOIN
    top100_cities t ON fc.city_id = t.ranking 
GROUP BY
    t.ranking, t.city, t.country;


DROP EVENT IF EXISTS reset_monthly_favourites;

CREATE EVENT reset_monthly_favourites
ON SCHEDULE EVERY 1 MONTH
STARTS TIMESTAMP(CURRENT_DATE + INTERVAL 1 MONTH)
DO
    UPDATE most_favourited
    SET total_favourites = 0, last_updated = CURRENT_TIMESTAMP;