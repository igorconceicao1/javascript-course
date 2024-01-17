// Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];
const lastNames = ["pepper", "onion", "banana"];

//length - comprimento do array
console.log(names.length);
console.log(names[names.length - 1]); // ultimo elemento by index

// concat
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

//unshift - Isso significa que o array terá um novo elemento no índice 0, e os índices dos elementos existentes serão incrementados.
allNames.unshift("susy");
allNames.unshift("anna");
console.log(allNames);

//shift - Isso significa que o elemento no índice 0 será removido, e os índices dos elementos restantes serão decrementados.
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

//push -  Isso significa que o novo elemento será inserido no final do array.
allNames.push("susy");
console.log(allNames);

//pop - Isso significa que o elemento no final do array será removido.
allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log(allNames);

// splice - mutates original array - Remove três elementos do array allNames, começando do índice 0. Esses elementos removidos são retornados pelo método splice.
const specificNames = allNames.splice(0, 3);
console.log(specificNames);
console.log(allNames);
