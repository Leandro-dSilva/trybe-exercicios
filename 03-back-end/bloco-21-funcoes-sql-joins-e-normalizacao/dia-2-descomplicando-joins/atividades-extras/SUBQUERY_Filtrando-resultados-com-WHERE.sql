SELECT * FROM sakila.city;
SELECT * FROM sakila.address;

SELECT city_id, city
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan');

-- 3. Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY .

SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id 
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);
