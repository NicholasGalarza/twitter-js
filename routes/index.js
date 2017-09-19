const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function (req, res) {
  console.log(__dirname + '/../public/stylesheets/style.css');
  res.sendFile('/Volumes/PNY-128GB/FullStackAcademy/JuniorPhase/twitter-js/public/stylesheets/style.css');

});
module.exports = router;
