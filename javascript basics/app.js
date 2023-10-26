// Numbers
// Loosely Typed = don't declare type

const number = 34;
// let pants = 2.466;
// pants = 'are great';
const number2 = 2.456;
const number3 = "2.456";

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(number3);

// Numbers
// +=, -=, /=, *=, ++ , --, %
// Modulus (%) operator returns the remainder after integer division

let n1 = 40;
console.log(n1);
n1 += 5;
console.log(n1);
n1 += 5;
n1 += 5;
n1 += 5;
n1 += 5;
console.log(n1);
n1++;
n1++;
n1++;
n1++;
console.log(n1);

//resto da divisao
const pizza = 10;
const criancas = 3;
const pedacos = pizza % criancas;

console.log(pedacos);

//paresentes nos operadores importante
const res1 = 1 + 1 + 1 * 10;
const res2 = (1 + 1 + 1) * 10;
console.log(res1);
console.log(res2);
