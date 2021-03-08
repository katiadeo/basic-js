const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let result = {};
  
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.floor(result.turns / (turnsSpeed / 3600));
  
  return result;

};

// turnsSpeed = turns/hour  ==>  hours = turns/turnsSpeed   ==>   seconds = turns/turnsSpeed/3600
