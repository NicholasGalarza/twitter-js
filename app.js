const nunjucks = require('nunjucks');
const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

const locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf'},
    { name: 'Frodo' },
    { name: 'Hermione'}
  ]
};

app.get('/', function(req, res) {
  res.render('index', locals);
});

//Middleware
app.use(function (req, res, next) {
    console.log(req.method, req.url, 'StatusCode: ', res.statusCode);
    next();
});

app.use('/special', function (req, res, next) {
  res.send("You're not supposed to be here bro >:(");
  next();
});

app.post('/testing', function(req, res) {
  res.send('POST: Testing');
});

app.get('/news', function(req, res) {
  res.send('The news will ruin your day');
});

app.listen(3000, function() {
  console.log("Listening on port ", 3000);
});
