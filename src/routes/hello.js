const num1 = [ 3 , 4 , 5];
const num2 = [ 4 , 5 , 6]; 
const num3 = [ 5 , 7 , 9];
const num4 = [ 7 , 9 , 1];
const num5 = [ 8 , 1 , 9];

const getUnion = () => {
    let oneArr = [...num1, ...num2, ...num3, ...num4, ...num5];
    return [ ...new Set(oneArr)]
};

console.log(getUnion())



// *****************??*************

const _ = require('lodash');

let pairs = [['Action', "K.G.f"], ['Romantic', "DDLJ"], ['Historycal', "Bahubali"]]
  
let obj = _.fromPairs(pairs);
  
console.log(obj)














