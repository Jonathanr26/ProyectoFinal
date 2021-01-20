const Node = require('./node');

class Arbol{
    constructor(){
        this.inicio = null;
    }
  
    nulo(){
        return this.inicio === null;
    }
  
    agregar(expresion){
        if (this.nulo()){
            this.inicio = new Node(expresion);
            return;
        }
  
        var aux = this.inicio;
  
        while(aux){
            if(expresion < aux.expresion){
                if(aux.izquierda){
                    aux = aux.izquierda;
                } else{
                    aux.izquierda = new Node(expresion);
                    return;
                }
            } else{ 
                if(aux.derecha){
                aux = aux.derecha;
                } else{
                    aux.derecha = new Node(expresion);
                    return;
                }
            }
        }
    }
  
    agregarRecur(expresion, node = this.inicio){
        if(!node){
            this.inicio = new Node(expresion);
            return;
        }
  
        if(expresion < node.expresion){
            if(node.izquierda){
                return this.agregarRecur(expresion, node.izquierda);
        }
        node.izquierda = new Node(expresion);
        return;
        } else{ 
            if(node.derecha){
                return this.agregarRecur(expresion, node.derecha);
            }
            node.derecha = new Node(expresion);
            return;
        }
    }
    
    preorden(node = this.inicio){
        if(!node){
            return;
        }
        console.log(node.expresion);
        this.preorden(node.izquierda);
        this.preorden(node.derecha);
    }
    
    postorden(node = this.inicio){
        if(!node){
            return;
        }
        this.postorden(node.izquierda);
        this.postorden(node.derecha);
        console.log(node.expresion);
    }
}

module.exports = Arbol;