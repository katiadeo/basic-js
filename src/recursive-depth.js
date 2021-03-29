const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrCount = 0; // счетчик
    let arrDepth = 0; // уровень вложенности

    arr.forEach(char => {
      if (Array.isArray(char)) { // если элемент массива - массив => 
        arrCount = this.calculateDepth(char); // присваиваем count функции с этим элементов в виде аргумента
        if (arrCount > arrDepth) return arrDepth = arrCount;
      } 
      
      if (!Array.isArray(char)) return 1; // если элемент массива - не массив => вложенности нет, вернуть единицу, т к уже есть один массив
    })

    return arrDepth + 1; // или вернуть вложенность плюс 1
  }
};


// const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])); // 1
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]])) //  2
// console.log(depthCalc.calculateDepth([[[]]])) // 3