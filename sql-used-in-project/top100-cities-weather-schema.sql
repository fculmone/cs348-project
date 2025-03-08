USE cs348_project_db;

DROP TABLE IF EXISTS top100_cities_weather;
CREATE TABLE top100_cities_weather(
   city                VARCHAR(17) NOT NULL
  ,temperature_celsius DECIMAL(20,16) NOT NULL
  ,wind_speed_ms       DECIMAL(10,5) NOT NULL
  ,latitude            DECIMAL(10,5) NOT NULL
  ,longitude           DECIMAL(10,5) NOT NULL
  ,description         VARCHAR(20) NOT NULL
  ,country             VARCHAR(20) NOT NULL
  ,PRIMARY KEY(city, country)
);
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Paris',10.460000000000036,2.06,48.8534,2.3488,'clear sky','France');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Dubai',29.32000000000005,3.09,25.2582,55.3047,'clear sky','United Arab Emirates');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Madrid',9.970000000000027,3.6,40.4165,-3.7026,'clear sky','Spain');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Tokyo',21.58000000000004,2.06,35.6895,139.6917,'broken clouds','Japan');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Amsterdam',8.0,3.58,52.374,4.8897,'clear sky','Netherlands');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Berlin',15.660000000000025,2.68,52.5244,13.4105,'clear sky','Germany');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Rome',26.090000000000032,3.6,34.257,-85.1647,'broken clouds','Italy');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('New York',21.79000000000002,4.63,40.7143,-74.006,'clear sky','United States');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Barcelona',14.230000000000018,4.12,41.3888,2.159,'shower rain','Spain');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('London',7.670000000000016,2.57,51.5085,-0.1257,'scattered clouds','England');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Singapore',26.82000000000005,0.51,1.2897,103.8501,'broken clouds','Singapore');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Munich',10.840000000000032,0.89,48.1374,11.5755,'overcast clouds','Germany');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Milan',11.25,1.54,45.4643,9.1895,'scattered clouds','Italy');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Seoul',15.410000000000025,2.06,37.5683,126.9778,'clear sky','South Korea');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Dublin',19.870000000000005,7.2,37.7021,-121.9358,'clear sky','Ireland');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Osaka',19.0,1.54,34.6937,135.5022,'light rain','Japan');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Hong Kong',26.29000000000002,4.02,22.2855,114.1577,'scattered clouds','China');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Vienna',13.879999999999995,4.63,48.2085,16.3721,'clear sky','Austria');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Los Angeles',21.910000000000025,6.69,34.0522,-118.2437,'clear sky','United States');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Lisbon',12.120000000000005,5.14,38.7167,-9.1333,'few clouds','Portugal');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Prague',14.120000000000005,1.54,50.088,14.4208,'clear sky','Czech Republic');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Sydney',16.600000000000023,3.09,-33.8679,151.2073,'scattered clouds','Australia');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Istanbul',13.210000000000036,4.63,41.0351,28.9833,'broken clouds','Turkey');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Melbourne',24.04000000000002,7.2,28.0836,-80.6081,'clear sky','Australia');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Orlando',25.129999999999995,6.69,28.5383,-81.3792,'few clouds','United States');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Frankfurt',12.210000000000036,2.57,50.1167,8.6833,'clear sky','Germany');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Kyoto',19.02000000000004,1.4,35.0211,135.7538,'overcast clouds','Japan');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Taipei',24.100000000000023,1.54,25.0478,121.5319,'scattered clouds','Taiwan');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Florence',15.490000000000009,0.51,43.7667,11.25,'clear sky','Italy');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Toronto',15.620000000000005,5.14,43.7001,-79.4163,'overcast clouds','Canada');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Athens',17.890000000000043,2.57,37.9795,23.7162,'clear sky','Greece');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Zurich',8.830000000000041,1.54,47.3667,8.55,'few clouds','Switzerland');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Bangkok',32.35000000000002,4.88,13.75,100.5167,'clear sky','Thailand');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Las Vegas',27.439999999999998,12.52,36.175,-115.1372,'clear sky','United States');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Miami',25.04000000000002,8.23,25.7743,-80.1937,'broken clouds','United States');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Kuala Lumpur',26.07000000000005,1.54,3.1431,101.6865,'few clouds','Malaysia');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Venice',27.710000000000036,1.54,27.0998,-82.4543,'overcast clouds','Italy');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Abu Dhabi',29.5,1.54,24.4667,54.3667,'clear sky','United Arab Emirates');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Stockholm',5.2900000000000205,2.57,59.3326,18.0649,'overcast clouds','Sweden');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Brussels',8.410000000000025,2.06,50.8504,4.3488,'light rain','Belgium');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Tel Aviv',21.140000000000043,1.03,32.0833,34.8,'broken clouds','Israel');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('San Francisco',17.07000000000005,14.75,37.7749,-122.4194,'few clouds','United States');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Shanghai',18.120000000000005,6.0,31.2222,121.4581,'mist','China');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Warsaw',15.300000000000011,2.57,52.2298,21.0118,'clear sky','Poland');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Guangzhou',24.970000000000027,4.32,23.1167,113.25,'broken clouds','China');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Copenhagen',13.07000000000005,6.17,55.6759,12.5655,'overcast clouds','Denmark');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Nice',5.53000000000003,4.28,44.0,7.25,'overcast clouds','France');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Washington',13.910000000000025,5.83,47.5001,-120.5015,'overcast clouds','United States');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Budapest',15.53000000000003,3.09,47.498,19.0399,'clear sky','Hungary');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Shenzhen',26.370000000000005,1.95,22.5455,114.0683,'scattered clouds','China');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Vancouver',10.890000000000043,4.63,49.2497,-123.1193,'broken clouds','Canada');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Palma de Mallorca',14.860000000000014,3.09,39.5694,2.6502,'scattered clouds','Spain');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Seville',14.150000000000034,2.57,37.3824,-5.9761,'clear sky','Spain');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('São Paulo',23.910000000000025,4.12,-23.5475,-46.6361,'clear sky','Brazil');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Valencia',13.660000000000025,1.14,39.3333,-0.8333,'overcast clouds','Spain');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Mexico City',26.680000000000007,7.6,19.4285,-99.1277,'scattered clouds','Mexico');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Antalya',18.939999999999998,2.57,36.7741,30.7178,'clear sky','Turkey');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Sapporo',11.020000000000039,8.23,43.0642,141.3469,'scattered clouds','Japan');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Beijing',8.939999999999998,1.24,39.9075,116.3972,'light rain','China');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Busan',13.990000000000009,2.57,35.1028,129.0403,'moderate rain','South Korea');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Fukuoka',19.650000000000034,1.03,33.6064,130.4181,'heavy intensity rain','Japan');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Edinburgh',5.7900000000000205,4.12,55.9521,-3.1965,'clear sky','Scotland');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Porto',10.740000000000009,3.13,41.1496,-8.611,'clear sky','Portugal');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Jerusalem',18.160000000000025,0.45,31.769,35.2163,'broken clouds','Israel');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Kraków',12.760000000000048,2.06,50.0833,19.9167,'clear sky','Poland');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Rio de Janeiro',27.99000000000001,3.6,-22.9028,-43.2075,'clear sky','Brazil');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Honolulu',26.600000000000023,6.17,21.3069,-157.8583,'scattered clouds','United States');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Montreal',15.990000000000009,3.09,45.5088,-73.5878,'broken clouds','Canada');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Macau',26.0,3.6,22.2006,113.5461,'scattered clouds','China');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Cancún',28.960000000000036,9.26,21.1743,-86.8466,'light rain','Mexico');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Islamabad',15.870000000000005,2.53,33.7104,73.1338,'overcast clouds','Pakistan');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Doha',26.970000000000027,3.09,25.2867,51.5333,'clear sky','Qatar');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Sharjah',27.160000000000025,3.09,25.3573,55.4033,'clear sky','United Arab Emirates');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Rhodes',18.77000000000004,5.66,36.4408,28.2225,'clear sky','Greece');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Verona',12.980000000000018,2.06,45.4167,11.0333,'clear sky','Italy');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Bologna',12.930000000000007,1.03,44.4667,11.4333,'scattered clouds','Italy');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Thessaloniki',16.430000000000007,1.54,40.6403,22.9439,'few clouds','Greece');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Buenos Aires',15.310000000000002,12.52,-34.6132,-58.3772,'clear sky','Argentina');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Lima',21.140000000000043,4.63,-12.0432,-77.0282,'fog','Peru');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Phuket',27.120000000000005,1.03,8.0,98.25,'few clouds','Thailand');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Delhi',27.05000000000001,1.03,28.6667,77.2167,'haze','India');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Heraklion',14.760000000000048,6.17,35.2445,25.0929,'few clouds','Greece');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Tallinn',9.07000000000005,2.57,59.437,24.7535,'clear sky','Estonia');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Mecca',30.350000000000023,1.33,21.4267,39.8261,'scattered clouds','Saudi Arabia');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Ho Chi Minh City',29.480000000000018,1.03,10.75,106.6667,'scattered clouds','Vietnam');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Playa Del Carmen',28.010000000000048,8.23,20.6274,-87.0799,'light rain','Mexico');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Johor Bahru',26.79000000000002,0.51,1.4655,103.7578,'broken clouds','Malaysia');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Santiago',14.860000000000014,2.57,-33.4569,-70.6483,'clear sky','Chile');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Tbilisi',16.840000000000032,1.54,41.6941,44.8337,'clear sky','Georgia');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Riyadh',19.08000000000004,1.06,24.6877,46.7219,'broken clouds','Saudi Arabia');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Marrakech',15.04000000000002,4.63,31.6315,-8.0083,'light rain','Morocco');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Vilnius',11.490000000000009,3.09,54.6892,25.2798,'clear sky','Lithuania');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Mugla',14.189999999999998,2.53,37.2303,28.3557,'clear sky','Turkey');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Zhuhai',26.210000000000036,3.6,22.2769,113.5678,'scattered clouds','China');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Mumbai',30.99000000000001,1.54,19.0144,72.8479,'smoke','India');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Punta Cana',26.870000000000005,6.69,18.5818,-68.4043,'few clouds','Dominican Republic');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Guilin',24.060000000000002,0.97,25.2819,110.2864,'clear sky','China');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Hanoi',28.0,2.49,21.0245,105.8412,'clear sky','Vietnam');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Cairo',19.420000000000016,4.63,30.0626,31.2497,'clear sky','Egypt');
INSERT INTO top100_cities_weather(city,temperature_celsius,wind_speed_ms,latitude,longitude,description,country) VALUES ('Muscat',28.010000000000048,2.76,23.6139,58.5922,'broken clouds','Oman');


-- below are the locations in this database but not in the top100_cities database
-- New York, United States


-- Marne-la-Vallée, France
INSERT INTO top100_cities_weather (
    city, temperature_celsius, wind_speed_ms, latitude, longitude, description, country
) VALUES (
    'Marne-la-Vallee', 11.00, 5.86, 48.8417, 2.6063, 'scattered clouds', 'France'
);



-- Pattaya, Thailand
INSERT INTO top100_cities_weather (
    city, temperature_celsius, wind_speed_ms, latitude, longitude, description, country
) VALUES (
    'Pattaya', 28.00, 3.09, 12.9236, 100.8825, 'few clouds', 'Thailand'
);



-- the cities in this dataset but not the top100_cities can be found with the query below
-- (ctrl-/) to uncomment

-- SELECT top100_cities.city, top100_cities.country
-- FROM top100_cities LEFT OUTER JOIN top100_cities_weather
-- ON top100_cities.city = top100_cities_weather.city AND 
-- top100_cities.country = top100_cities_weather.country
-- WHERE top100_cities_weather.city IS NULL;