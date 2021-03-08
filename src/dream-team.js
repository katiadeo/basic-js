const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members)) return false;
  let result = [];
  for (let i = 0; i < members.length; i++) {
     if (typeof members[i] === 'string') result.push(members[i].trim().charAt(0).toUpperCase());
     else result.slice(members[i]); 
  }
  return result.sort().join('');
};
