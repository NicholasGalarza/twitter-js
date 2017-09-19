'use strict'
const express = require('express');
const router = express.Router();
const path = require('path');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.use(express.static('public'));

router.get('/', function(req, res) {
  const allTweets = tweetBank.list();
  res.render('index', {
    tweets: allTweets
  });
});

// retrieve user's tweets by name from tweetBank.
router.get('/users/:name', function(req, res) {
  const tweetsForName = tweetBank.find({
    name: req.params.name
  });
  res.render('index', {
    tweets: tweetsForName
  });
});

module.exports = router;
