const connection = require('./connection');

function isValid(firstName, lastName, email, password) {
  if (!firstName) return { error: true, message: "Erro no campo 'firstName'" };
  if (!lastName) return { error: true, message: "Erro no campo 'lastName'" };
  if (!email) return { error: true, message: "Erro no campo 'email'" };

  if (!password || password.length < 6 || typeof password !== 'string')
    return {
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    };

  return true;
}

async function create(firstName, lastName, email, password) {
  const query =
    'INSERT INTO users_crud.users (firstName, lastName, email, password) VALUES (?, ?, ?, ?);';

  return connection.execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

module.exports = {
  isValid,
  create,
};
