const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (arr.length === 0) return [];
  if (!Array.isArray(arr)) throw new Error('Not an array');
  
  let newArray = [];
  let rules = ['--discard-next',  '--discard-prev', '--double-next', '--double-prev'];

      for (let i = 0; i < arr.length; i++) {
          if (arr[i - 1] === rules[0]) undefined;
          else if (arr[i + 1] === rules[1]) undefined;
          else if (arr[i] === rules[2]) newArray.push(arr[i + 1]);
          else if (arr[i] === rules[3]) newArray.push(newArray.slice(-1).pop()); // slice() makes new array with a copy of a single element, pop modifies only that copy. the original arr remains unharmed
          else newArray.push(arr[i]);
      } 

   
      let filtered = newArray.filter(char => (char !== rules[0] && char !== rules[1] && char !== undefined));

  return filtered;

};
