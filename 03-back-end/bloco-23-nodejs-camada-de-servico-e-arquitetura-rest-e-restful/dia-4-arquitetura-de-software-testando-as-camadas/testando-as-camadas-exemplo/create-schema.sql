DROP SCHEMA IF EXISTS model_movies;

CREATE DATABASE IF NOT EXISTS model_movies;

USE model_movies;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  directed_by VARCHAR(30) NOT NULL,
  release_year VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);