// Transforme o objeto abaixo em uma Constructor Function

/*
const pessoa = {
    nome: 'Nome Pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' Andou');
    }
}
*/

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = () => {
        console.log(nome + ' andou');
    }
}

// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos
const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (DOM) para manipulação de Listas de elementos do DOM.
// Deve conter as seguintes propriedades e métodos:
// elements, retorna NodeList com elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClasse = (classe) => {
        elementList.forEach ((item) => {
            item.classList.add(classe); 
        });
    }
    this.removeClass = (classe) => {
        elementList.forEach((item) => {
            item.classList.remove(classe);
        })
    }
}

const listaItens = new Dom('li');
const listaUl = new Dom('ul');

listaItens.addClasse('ativo');
listaUl.addClasse('ul-ativo');
