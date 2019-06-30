'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

let views = path.join(__dirname, '../views');

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: views });
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: views });
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);