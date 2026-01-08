SELECT name FROM USERS WHERE age> 18;

SELECT * FROM cars WHERE year> 1990;

--Return all records where the brand is NOT 'Volvo':
SELECT * FROM cars
WHERE brand <> 'Volvo';

SELECT * FROM cars
WHERE brand != 'Volvo';

SELECT * FROM cars WHERE year BETWEEN 1970 AND 1990;

SELECT * FROM CARS WHERE model IS NULL;

SELECT * FROM cars
WHERE brand NOT IN ('Volvo', 'Mercedes', 'Ford');
