SELECT * FROM sakila.address;

SELECT district, COUNT(*) AS 'Total maior que 5'
FROM sakila.address
GROUP BY district
HAVING COUNT(*) > 5;