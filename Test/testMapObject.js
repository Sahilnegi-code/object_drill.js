const obj = require('./testObj');
const helper  = require('../mapObject');
const cb  = (obj)=>{


    for (let key in obj) {
        obj[key ] = ` the value is ${obj[key]} `;
      }
}
const result = helper(obj , cb);
console.log(result);
