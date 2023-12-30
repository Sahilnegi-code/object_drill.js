const obj = require('./testObj');
const helper  = require('../defaults');
const result = helper(obj, {Gender : 'Male'});
console.log(result);
