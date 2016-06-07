'use strict'

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/timeSeries", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
