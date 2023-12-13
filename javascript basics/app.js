// Arrays, Functions and Objects
// Functions - declare, invoke
//
//params - when declare/define
//placeholders, local vars
//arguments - when invoke/call/run
//use var/values, multiple params, undefined 

const bob = 'BOB';

function hello(name, second) {
  
  console.log("Hello there " + name);
  console.log(second);
}

hello('Igor teste', 23);
hello(bob, 'teste second bob');
hello(23, 44);
hello('igor', bob);

//-----------------------------------------------
console.log('---------------------------------------');
// return 
// 1 inch = 2.5cm

const minhaAltura = 80;

function  calculate(value) {
  // const = newValue ...
  console.log('O valor em cms eh: ' + (value * 2.54) + ' cm')
  return (value * 2.54); // para mostrar os valores dentro de uma string, precisamos usar o return

}

const width = calculate(100);
const height = calculate(minhaAltura);

const dimensions = [width, height];
console.log(dimensions);

//no return voce tem que ter uma variavel igual aqui no alt1 para ela segurar o valor voltado de return
// o que tiver depois do return, nao vai ser lido

//--------------------------------------------
console.log('---------------------------------------');

// expressions - another way to define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries

//---MANEIRA DE FAZER FUNCOES---
//function definition/declaration
function addValues(num1, num2) {
  total = num1 + num2;
  return total;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

//function expression - eu nao quero chamar a funcao eu copio ela toda
// voce pode tirar ou nao o nome, voce escolhe, pq agora vc referencia a funcao pela variavel add tambem (se voce deletar ela vira uma funcao anonima)

//---MANEIRA DE FAZER FUNCOES---
// anonymous function
const add = function (num1, num2) {
  return num1 + num2;
}

const thirdValue = add(6,6);

const value = [firstValue, secondValue, thirdValue, 11, add(6,7)];
console.log(value);


//preciso fazer minha funcao rertorna algo nesse caso, se for pra ter console.log nao faz sentido ter o array
// array e muito poderoso, pode ser passado de qualquer forma um valor para dentro dele basicamente


//--------------------------------------------
console.log('---------------------------------------');

//---MANEIRA DE FAZER FUNCOES---
//arrow functions
//nao vamos aprender agora, so vamos dar uma passada por cima

const num1 = 4;
const num2 = 4;

const multiply = (num1, num2) => num1 * num2; 
console.log(multiply);

// outro exemplo de function expression
//exports.nameOfMethod = function() {}