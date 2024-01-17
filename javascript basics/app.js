// arrays and for loop

const names = ["anna", "markin", "juca", "henrique"];
const lastName = "teste1";
let newArray = [];

for (let i = 0; i < names.length; i++) {
  console.log(i);
  newArray.push(`${names[i]} ${lastName}`);
}

console.log(newArray);
