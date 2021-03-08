const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  if (typeof(sampleActivity) !== 'string') return false;
  if (!sampleActivity) return false;
  if (isNaN(Number(sampleActivity))) return false;
  if ((sampleActivity <= 0) || (sampleActivity > 15)) return false;
 
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD) );

  // t = ln(N0 / N) / (k / t1/2);
};
