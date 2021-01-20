require('./expresion');

const x = require('mathjs-expression-parser');

const expresion0 = '4 * 5 - 2 / 1 * 3 - 1';

console.log('resultados: \r');
console.log(x.eval(expresion0, {}));