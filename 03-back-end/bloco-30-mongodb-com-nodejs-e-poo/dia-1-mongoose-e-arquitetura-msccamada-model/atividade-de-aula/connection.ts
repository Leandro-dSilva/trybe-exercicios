import { connect } from 'mongoose';
require('dotenv').config()

// connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', options);

const options = {
  user: process.env.DB_USER, // Usuário do banco de dados.
  pass: process.env.DB_PASS, // senha do usuário do banco de dados.
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);
