-- test, searching for Cana
--  expecting, all canadian cities and the city Punta Cana

SELECT * FROM top100_cities WHERE city LIKE '%Cana%' OR country LIKE '%Cana%'