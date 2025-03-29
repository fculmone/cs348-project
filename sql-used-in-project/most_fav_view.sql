USE cs348_project_db;

DROP VIEW IF EXISTS most_favourited_cities;
CREATE VIEW most_favourited_cities AS
SELECT 
    c.city_id,
    c.city_name,
    c.country,
    COUNT(fc.username) AS total_favourites
FROM 
    favourite_cities fc
JOIN 
    city c ON fc.city_id = c.city_id
GROUP BY 
    c.city_id, c.city_name, c.country
ORDER BY 
    total_favourites DESC;
