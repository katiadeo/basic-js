const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' }) {
  let additionRepeater = [];
  let stringRepeater = [];
  let result = '';
  

  if (typeof addition !== "undefined") {
 
      for (let i = 0; i < additionRepeatTimes; i++) {
        additionRepeater.push(String(addition));
        str + additionRepeater.join(additionSeparator);
      }
    
  }

  for (let j = 0; j < repeatTimes; j++) {
    stringRepeater.push(str + additionRepeater.join(additionSeparator));
    result = stringRepeater.join(separator)
  }
  
  return result;
};