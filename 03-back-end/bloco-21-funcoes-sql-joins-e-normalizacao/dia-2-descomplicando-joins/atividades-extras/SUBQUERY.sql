SELECT * FROM sakila.film;

SELECT * FROM sakila.film WHERE rating = 'R';

SELECT title, rating FROM sakila.film
WHERE rating = 'R';

-- Usando uma SUBQUERY como fonte de dados para o FROM

SELECT f.title, f.rating
FROM (SELECT * FROM sakila.film WHERE rating = 'R') AS f;