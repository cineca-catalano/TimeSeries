'use strict'

var MongoClient = require('mongodb').MongoClient;
var Joi = require('joi');

var push=function(item, cb){

  var schema = Joi.object().keys({
      type: Joi.string().alphanum().required(),
      content: Joi.string().alphanum().required(),
      author: Joi.string().alphanum().required()
  });
  console.log('qui');
  Joi.validate(item, schema, function (err, value) {
    monogoOperate((error,collection)=>{
      if(error!=undefined){
        console.log(error);
        return;
      }
      else{
        collection.insert(value);
        console.log('inserito '+value);
        if(cb){
          cb();
          }
        }
    });

  });



}


var  fetch=function(cb){

  monogoOperate((error,collection)=>{
    var retArray = collection.find().toArray((err, list) =>{
      if(cb){
          //console.log(list);
          cb(null,list);
      }
    });


})


}


var monogoOperate=function(callBack){
  MongoClient.connect("mongodb://localhost:27017/timeSeries", function(err, db) {
    if(!err) {
      console.log("We are connected");
      db.createCollection('timeseries', (err,collection)=>{

            callBack(err,collection);
        });
      }else{
          callBack(err);
          return;
        }
    });
};


module.exports={push:push,fetch:fetch};

//push({'ciao':1,'pippo':'pluto'});
//fetch();
