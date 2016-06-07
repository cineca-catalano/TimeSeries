const Code = require('code');   // assertion library
const Lab = require('lab');
const myFunz=require('./index.js');

const lab = exports.lab = Lab.script();

lab.test('ok',(done)=>{

  myFunz.push({
    'type':'tipo',
    'content':'contenuto',
    'author':'author'
  });

myFunz.fetch((array)=>{
  for (elem of array) {
      console.log(elem);
  }

})

  done();
});
