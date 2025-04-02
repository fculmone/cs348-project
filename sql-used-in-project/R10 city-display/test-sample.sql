SELECT top100_cities.city AS city, top100_cities.country AS country, ranking,
temperature_celsius, wind_speed_ms, top100_cities_weather.description AS weather_desc, top100_cities.description AS city_desc,
economic_performance, tourism_performance, tourism_policy, tourism_infrastructure, health_safety
FROM top100_cities JOIN top100_cities_weather 
ON top100_cities.city=top100_cities_weather.city
WHERE top100_cities.city = 'Paris' AND top100_cities.country = 'France';