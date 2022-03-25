const connection = require('./connection');

function isValid(firstName, lastName, email, password) {
  if (!firstName) return { error: true, message: "Erro no campo 'firstName'" };
  if (!lastName) return { error: true, message: "Erro no campo 'lastName'" };
  if (!email) return { error: true, message: "Erro no campo 'email'" };

  if (!password || password.length < 6)
    return {
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    };

  return true;
}

module.exports = {
  isValid,
};

// {
//   "firstName": "Calebe",
//   "lastName": "Junior",
//   "email": "calebe.junior@gmail.com",
//   "password": "d496d5ea2442"
// }
