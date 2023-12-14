//Conditional Statements
// > < >= <=  == === != !===
// == checks only value
// === checks value and type

const value = false;
console.log(typeof value);

const value2 = 1 > 2;

if (value2) {
  console.log("valor verdadeiro");
} else {
  console.log("valor falso");
}

const num1 = 6;
const num2 = 6;

if (num1 > num2) {
  console.log("primeiro numero maior");
} else if (num1 >= num2) {
  console.log("primeiro e maior ou igual");
} else {
  console.log("segundo numero maior");
}

const num3 = 6;
const num4 = "6";
const value3 = num3 == num4;
const value4 = num3 === num4;

console.log(value3);
console.log(value4);

const num5 = 6;
const num6 = "6";
const value5 = num5 != num6;
const value6 = num5 !== num6;

console.log(value5);
console.log(value6);

//Logical Operators
// (|| - OR) (&& - AND), !

const name1 = "peter";
const age = 24;

if (name1 === "bob" || age === 24) {
  console.log("operador logico funcionou");
} else {
  console.log("operador logico nao funcionou");
}
