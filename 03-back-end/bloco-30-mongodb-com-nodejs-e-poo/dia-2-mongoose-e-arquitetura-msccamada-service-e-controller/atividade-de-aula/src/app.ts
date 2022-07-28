import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import routes from './routes/Router';

const app = express();
app.use(express.json());
app.use(errorHandler);

export default app;
