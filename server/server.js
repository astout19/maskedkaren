import middlewares from './src/middleware';

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// eslint-disable-next-line import/no-unresolved
const mongoose = require('mongoose');

require('dotenv').config();

// eslint-disable-next-line import/no-unresolved

const logs = require('./src/api/logs');
const routes = require('../routes/api-routes');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('/api/logs', logs);
app.use('/routes/api-routes', routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost: ${port}`);
});
