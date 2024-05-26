// Quando mudamos a propriedade seletor, o objeto DOM irá passar a selecionar o novo seletor em seus métodos

/* Usando objeto e não construtor

const Dom = {
     seletor: 'li',
     element(){
         return document.querySelector(this.seletor);
     },
     ativo(){
         this.element().classList.add('ativo');
     },
 }

Dom.ativo(); // Adiciona ativo ao li

// Ativando o ul
Dom.seletor = 'ul';
Dom.ativo(); // Adiciona ativo ao ul

*/

// Transformando em construtor

function Dom(seletor) {
    this.element = () => {
        return document.querySelector(seletor);
    }
    this.ativo = () => {
        this.element().classList.add('ativo');
    }
}

const li = new Dom('li');
const ul = new Dom('li');

const lastLi = new Dom('li:last-child');
lastLi.ativo();


//Lembre-se de usar parâmetros
function Dom2(seletor){
    const element = document.querySelector(seletor);
    this.ativo = function(classe){
        element.classList.add(classe);
    };
}

const lista = new Dom2('ul'); // Seleciona o elemento DOM 
lista.ativo('ativo'); // Adiciona a classe chamada 'ativo' ao elemento DOM selecionado

const lastLiChild = new Dom2('li:last-child');
lastLiChild.ativo('ativo');