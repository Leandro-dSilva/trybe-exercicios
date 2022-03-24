// models/Author.js
const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

// Busca por id
const getById = async (id) => {
  const query =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';

  const [author] = await connection.execute(query, [id]);

  if (author.length === 0) return null;

  return author.map(serialize).map(getNewAuthor);
};

const isValid = (first_name, middle_name, last_name) => {
  if (!first_name || typeof first_name !== 'string') return false;
  if (!last_name || typeof last_name !== 'string') return false;
  if (middle_name && typeof middle_name !== 'string') return false;

  return true;
};

const create = async (first_name, middle_name, last_name) => {
  const query =
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?);';

  connection.execute(query, [first_name, middle_name, last_name]);
};

module.exports = {
  getAll,
  getById,
  isValid,
  create,
};
