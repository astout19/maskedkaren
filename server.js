// import { notFound } from './src/middleware';
// import {errorHandler} from './src/middleware';
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const middleware = require("./server/src/middleware")
const port = process.env.PORT || 1337;

// eslint-disable-next-line import/no-unresolved
const logs = require("./routes/api/logs")
const routes = require("./routes/api/api-routes")


require('dotenv').config();

// eslint-disable-next-line import/no-unresolved

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

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use(',/src/api/logs', logs);
app.use('./routes/api-routes', routes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost: ${port}`);
});
