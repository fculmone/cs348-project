
USE test_db;

CREATE TABLE test (
    id integer PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age integer NOT NULL
);

INSERT INTO test (first_name, last_name, age)
VALUES
('Bart', 'Simpson', 10),
('Lisa', 'Simpson', 8),
('Milhouse', 'Van Houten', 10),
('Ned', 'Flanders', 60);