USE cs348_project_db;

DROP VIEW IF EXISTS most_favourited_cities;

CREATE VIEW most_favourited_cities AS
SELECT 
    fc.city_id,
    t.city AS city_name,
    t.country,
    COUNT(fc.username) AS total_favourites
FROM favourite_cities fc
LEFT JOIN top100_cities t ON fc.city_id = t.ranking
GROUP BY fc.city_id, t.city, t.country;