const express = require('express');
const router = require('./src/controllers/userController');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/user', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
