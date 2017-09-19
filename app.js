'use strict'
const nunjucks = require('nunjucks');
const express = require( 'express' );
const morgan = require('morgan');
const bank = require('./tweetBank');
const app = express(); // creates an instance of an express application
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

//Middleware
app.use(morgan('dev'));

//Routes
app.use('/', routes);

app.listen(3000, function() {
  console.log("Listening on port ", 3000);
});
