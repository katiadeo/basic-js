const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(mode = true) {
    this.mode = mode;   
  }
  
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let cipheredMesssage = '';
    let cipheredLetter;
    let keyLetter = 0;
    
    if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error('no arguments');
    
    for (let i = 0; i < message.length; i++) {
      if (!message[i].match(/[A-Z]/i)) cipheredMesssage += message[i];
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        cipheredLetter = ((message.charCodeAt(i) - 65) + (key[keyLetter % key.length].charCodeAt() - 65)) % 26; // Ci = (Pi + Ki) mod N
        cipheredMesssage += String.fromCharCode(cipheredLetter + 65);
        keyLetter++;
      }
    }
    
    if (this.mode) return cipheredMesssage;
    if (!this.mode) return cipheredMesssage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) { 
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decipheredMesssage = '';
    let decipheredLetter;
    let keyLetter = 0;

    if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') throw new Error('no arguments');
    
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!encryptedMessage[i].match(/[A-Z]/i)) decipheredMesssage += encryptedMessage[i];    
      if (encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90) {
        // Pi = (Ci + N - Ki) mod N => Ci = (Pi - Ki + N) mod N
        decipheredLetter = ((encryptedMessage.charCodeAt(i) - 65) - (key[keyLetter % key.length].charCodeAt() - 65) + 26) % 26;
        decipheredMesssage += String.fromCharCode(decipheredLetter + 65);
        keyLetter++;
      }
    }
        
    if (this.mode) return decipheredMesssage;
    if (!this.mode) return decipheredMesssage.split('').reverse().join('');
  }

}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); // 'AEIHQX SX DLLU!'
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); // 'ATTACK AT DAWN!'

// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')); // '!ULLD XS XQHIEA'
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) // '!NWAD TA KCATTA'

module.exports = VigenereCipheringMachine;
