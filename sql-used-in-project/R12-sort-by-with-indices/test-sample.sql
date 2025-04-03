USE cs348_project_db;

--display city/country's economic performance in ascending order
SELECT city, country FROM top100_cities ORDER BY economic_performance ASC;
