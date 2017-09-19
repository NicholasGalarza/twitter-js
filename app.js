const nunjucks = require('nunjucks');
const express = require( 'express' );
const morgan = require('morgan');
const bank = require('./tweetBank');
const app = express(); // creates an instance of an express application
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates


// const locals = {
//   title: 'An Example',
//   people: [
//     { name: 'Gandalf'},
//     { name: 'Frodo' },
//     { name: 'Hermione'}
//   ]
// };

//Middleware
app.use(morgan('combined'));

//Routes
app.use('/', routes);

app.listen(3000, function() {
  console.log("Listening on port ", 3000);
});















// app.use(function (req, res, next) {
//     console.log(req.method, req.url, 'StatusCode: ', res.statusCode);
//     next();
// });

// app.use('/special', function (req, res, next) {
//   res.send("You're not supposed to be here bro >:(");
//   next();
// });
