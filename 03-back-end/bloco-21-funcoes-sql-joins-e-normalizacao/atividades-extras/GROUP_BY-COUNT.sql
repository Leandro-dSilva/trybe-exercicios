SELECT * FROM sakila.address;

SELECT district, COUNT(*) AS 'Total'
FROM sakila.address
GROUP BY district;