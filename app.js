const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function (req, res, next) {
    // do your logging here
    console.log(req.method, req.url, 'StatusCode: ', res.statusCode);
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
});

app.use('/special', function (req, res, next) {
  res.send("You're not supposed to be here bro >:(");
  next();
});

app.get('/', function(req, res) {
  res.send('Home Page: Hello World!');
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
