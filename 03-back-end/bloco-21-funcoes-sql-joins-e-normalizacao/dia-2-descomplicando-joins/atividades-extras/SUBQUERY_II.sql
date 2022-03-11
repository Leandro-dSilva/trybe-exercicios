SELECT * FROM sakila.city;
SELECT * FROM sakila.address;

SELECT a.address, a.district, c.city
FROM sakila.city c
INNER JOIN sakila.address a
ON c.city_id = a.city_id
ORDER BY a.address;

-- 2. Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY

SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address
ORDER BY address;