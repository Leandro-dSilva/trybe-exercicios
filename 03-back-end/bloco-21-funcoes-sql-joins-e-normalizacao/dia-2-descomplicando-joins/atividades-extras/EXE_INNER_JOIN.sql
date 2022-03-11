-- Exemplo
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT a.first_name, a.actor_id, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- ----------
--  Exercícios como utilizar INNER JOIN

-- 1. Monte uma query que exiba o id do ator , nome do ator e id do filme em que 
-- ele já atuou usando as tabelas actor e film_actor .

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários
-- do banco. Use as tabelas staff e address .

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address, a.district
FROM sakila.staff s
INNER JOIN sakila.address a
ON s.address_id = a.address_id;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados 
-- pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua 
-- onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address 
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
ORDER BY first_name DESC
LIMIT 100;

-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no
-- distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas
-- nas tabelas address e customer .

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address, a.district
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id AND a.district = 'California' AND c.first_name LIKE '%rene%';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados
--  por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser
--  encontradas na tabela address e customer

SELECT * FROM sakila.customer;
SELECT DISTINCT( CONCAT(first_name, ' ', last_name) ) FROM sakila.customer;
SELECT DISTINCT(customer_id) FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, a.address_id
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
ORDER BY first_name;












