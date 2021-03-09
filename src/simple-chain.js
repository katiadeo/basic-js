const CustomError = require("../extensions/custom-error");

const chainMaker = {
  sequence : [],
  
  getLength() {
    return this.length;
  },
      
  addLink(value) {
    if (arguments.length == 0) this.sequence.push('( )');
    else this.sequence.push(`${value}`);
    return this;
  },
    
    removeLink(position) {
      if (position === '') {
        this.sequence = [];
        throw new Error('nonexistent link');
      }
      
      if (isNaN(position)) {
        this.sequence = [];
        throw new Error('Not a number');
      }
      
      if (!Number.isInteger(position)) {
        this.sequence = [];
        throw new Error('Not an integer');
      }
        
      this.sequence.splice(position - 1, 1);
      return this;
    },
    
    reverseChain() {
      this.sequence = this.sequence.reverse();
      return this;
    },
    
    finishChain() {
      let finished = `( ${this.sequence.join(' )~~( ')} )`;
      this.sequence = [];
      return finished;
    }
  };

module.exports = chainMaker;
