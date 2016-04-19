"use strict";

const app = require('widget-cms');
const dbConfig = require('./config');


app.config({
  port: 3000, // default 3000

  secret: 'my_ninja_cat',

  saveLogs: true,  // write application logs to files

  db: dbConfig,

  cache: false, // optional - defaults to false

  redis: {}, // optional - assumes localhost, port 6379

  rootDir: process.cwd(), // required

  middleware: {
    enableForms: true,
    enableCSRF: false,
    enableSessions: true
  }
});

app.registerMiddleware(function (req, res, next) {
  // pass user object to templates
  res.locals.user = {
    name: 'Que',
    email: 'que@widget-cms.com'
  };

  next();
});

app.start();
