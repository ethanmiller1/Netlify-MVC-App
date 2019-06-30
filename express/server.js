'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

let views = 'https://github.com/king-melchizedek/netlify-mvc-app/tree/master/views';

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: views });
});

router.get('/page1', (req, res) => {
  res.sendFile('page1', { root: views })
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

// Development template.

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/page1', (req, res) => {
  res.render('page1')
});

module.exports = app;
module.exports.handler = serverless(app);