const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let season = ['spring', 'summer', 'autumn', 'winter'];

  if (typeof date === "undefined") return 'Unable to determine the time of year!';
  if ((Object.prototype.toString.call(date) !== "[object Date]") || (isNaN(date.valueOf()))) {
    throw Error;
  }

  let month = date.getMonth();
    if (month >= 2 && month <= 4) return season[0]; // spring
    if (month >= 5 && month <= 7) return season[1]; // summer
    if (month >= 8 && month <= 10) return season[2]; // autumn
    if (month == 0 || month == 1 || month == 11) return season[3]; // winter
};
