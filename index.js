'use strict'


var Joi = require('joi');

var push=function(collection,item, cb){

  var schema = Joi.object().keys({
      type: Joi.string().alphanum().required(),
      content: Joi.string().alphanum().required(),
      author: Joi.string().alphanum().required()
  });

  Joi.validate(item, schema, function (err, value) {
    if(err){
      console.log("errpre "+err);
      return;
    }


      if(err!=undefined){
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

}


var  fetch=function(collection,cb){
    console.log('quo');
    var retArray = collection.find().toArray((err, list) =>{
      if(cb){
          //console.log(list);
          cb(null,list);
      }
    });

}





module.exports={push:push,fetch:fetch};

//push({'ciao':1,'pippo':'pluto'});
//fetch();
