// strings properties and methods
// wrapper String Object, dont memorize methods

let text = " Peter Jordanmo";

//PROPERTY
let result = text.length; //property que retorna o comprimento das strings, e conta os espacos tambem
console.log(result);
console.log(text.length);

//METHODS
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(1)); // index da string

console.log(text.charAt(text.length - 1)); //end of the strings (usando o length, ele comeca do zero e vai ate o 14, e no index 15 nao tem nada na string, entao se colocarmos length-1 vai sempre retornar o ultimo caracter)

console.log(text.indexOf("e")); // se nao tiver na string vai voltar o valor -1, se tiver mais de um caracter igual vai voltar o primeiro

console.log(text);
console.log(text.trim()); // tira os espacos do inicio e final da string
console.log(text.startsWith("peter"));
console.log(text.startsWith(" Peter"));

console.log(text.trim().toLowerCase().startsWith("peter"));

console.log(text.includes("eter"));

console.log(text.slice(0, 6)); //substring

console.log(text.slice(-1)); // end of the string, valores negativos vai mostrando de tras para frente

//-----------------------------------------------------
// const person = {
//   name: "peter", //property
//   greeting() {
//     //methods
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);
// console.log(person.name);
// person.greeting();
