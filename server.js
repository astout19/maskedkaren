// import { notFound } from './src/middleware';
// import {errorHandler} from './src/middleware';

import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
// eslint-disable-next-line import/no-unresolved
import { connect } from 'mongoose';
import logs from './routes/api/logs';
import routes from './routes/api-routes';

require('dotenv').config();

// eslint-disable-next-line import/no-unresolved

const app = express();

connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use(',/src/api/logs', logs);
app.use('./routes/api-routes', routes);

// app.use(middleware.notFound);
// app.use(middleware.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost: ${port}`);
});
