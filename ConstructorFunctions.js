//Objetos 
// Criar um objeto é simples, basta difinirmos uma variável e iniciar a definição do seu valor em chaves {}.
// Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior ?

const carro = {
    marca: 'Marca',
    preco: 0,
}

// Metodo Incoreto
const honda = carro;
honda.marca = 'Honda'; // Mudando a propriedade
honda.preco = 4000; // Mudando a propriedade

const fiat = carro;
fiat.marca = 'Fiat'; // Mudando a propriedade
fiat.preco = 3000; // Mudando a propriedade

//Constructor Functions
// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

function Carro(marcaAtribuida, precoAtribuido){ //Função construtora geralmente esta em Pascal Case.
    // this está se referindo ao construtor Carro(){}
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
    // this.marca = 'Marca';
    // this.preco = 4000;
}

const toyota = new Carro('Toyota', 4000);
// toyota.marca = 'Toyota';
// toyota.preco = 4000;

const ferrari = new Carro('Ferrari', 5000);
// ferrari.marca = 'Ferrari';
// ferrari.preco = 5000;

/*
//new Keyword
// A palavra chave "new" é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

const mini = new Carro();

// 1 - Cria um novo objeto;
mini = {};

// 2 - Define o protótipo
mini.prototype = Carro.prototype;

// 3 - Aponta a variável this para o objeto
this = mini;

// 4 - Executa a função, substituindo this pelo objeto
mini.marca = 'Mini';
mini.preco = 4000;
*/

// this Keyword
// o this faz referência ao próprio objeto construído com a Constructor Function.

function Carro2(marca, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    // console.log(this);
}

/*
    Variáveis dentro de Construtores estão "protegidas"
*/

const volvo = new Carro2('Volvo', 2000);
// O objeto "volvo" apenas tem acesso aos objetos com this