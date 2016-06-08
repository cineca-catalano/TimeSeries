const Code = require('code');   // assertion library
const Lab = require('lab');
const myFunz=require('./index.js');
var MongoClient = require('mongodb').MongoClient;

const lab = exports.lab = Lab.script();


lab.test('ok',(done)=>{

  MongoClient.connect("mongodb://localhost:27017/timeSeries", function(err, db) {
    if(!err) {
      console.log("We are connected");
      db.createCollection('timeseries', (err,collection)=>{
        myFunz.push(collection,{
          'type':'tipo',
          'content':'contenuto',
          'author':'author'
        });

        myFunz.fetch(collection,(array)=>{
          for (elem of array) {
              console.log(elem);
          }

        })
            db.close();
            done();
        });
      }else{
        console.log('qui1');
          callBack(err);
            db.close();
            done();
          return;
        }


    });
});
