// importing
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

/* eslint-disable no-template-curly-in-string */
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// eslint-disable-next-line import/no-unresolved
const mongoose = require('mongoose');

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

require('dotenv').config();

// eslint-disable-next-line import/no-unresolved
const middlewares = require('./middlewares');
const logs = require('./api/logs');

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

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening at http://localhost:${port}');
});
// eslint-disable-next-line no-multiple-empty-lines

// rendering
ReactDOM.render(
  <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>
      <App />
  </Auth0Provider>,
  document.getElementById('root'),
);
