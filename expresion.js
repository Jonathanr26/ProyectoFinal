const Arbol = require('./arbol');

var arbol1 = new Arbol();
var expresion1 = [4, '*', 5, '-', 2, '/', 1, '*', 1, '-', 1];
  
for (var i = 0; i < expresion1.length; i++) {
    arbol1.agregarRecur(expresion1[i]);
}

console.log('Preorder: ');
arbol1.preorden();
console.log();
console.log('Postorder: ');
arbol1.postorden();
console.log();


