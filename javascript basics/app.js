// Arrays, Functions and Objects
// Functions - declare, invoke
//
//params - when declare/define
//placeholders, local vars
//arguments - when invoke/call/run
//use var/values, multiple params, undefined 

const bob = 'BOB';

function hello(name) {
  console.log("Hello there " + name);
}

hello('Igor');
hello(bob);
hello(23);
hello('igor', bob);

//-----------------------------------------------
console.log('---------------------------------------');
// return 
// 1 inch = 2.5cm

const minhaAltura = 80;

function  altura(valor) {
  // const = newValue ...
  console.log('Sua altura em cm eh: ' + (valor*2.54) + ' cm')
  return valor*2.54;

}

const alt1 = altura(100);
const alt2 = altura(minhaAltura);

const dimensions = [alt1, alt2]
console.log(dimensions)

//no return voce tem que ter uma variavel igual aqui no alt1 para ela segurar o valor voltado de return
// o que tiver depois do return, nao vai ser lido

//--------------------------------------------
console.log('---------------------------------------');

// expressions - another way to define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries

//function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(5, 6);
const secondValue = addValues(10, 10);

//function expression - eu nao quero chamar a funcao eu copio ela toda
// voce pode tirar ou nao o nome, voce escolhe, pq agora vc referencia a funcao pela variavel add tambem (se voce deletar ela vira uma funcao anonima)
// anonymous function
const add = function (num1, num2) {
  return num1 + num2;
}

const thirdValue = add(6,6);


const value = [firstValue, secondValue, thirdValue, 11, add(5,6)];
console.log(value);

//preciso fazer minha funcao rertorna algo nesse caso, se for pra ter console.log nao faz sentido ter o array
// array e muito poderoso, pode ser passado de qualquer forma um valor para dentro dele basicamente


//--------------------------------------------
console.log('---------------------------------------');

//arrow functions
//nao vamos aprender agora, so vamos dar uma passada por cima

const num1 = 4;
const num2 = 4;

const multiply = (num1, num2) => num1 * num2; 
console.log(multiply);

// outro exemplo de function expression
exports.nameOfMethod = function() {

}