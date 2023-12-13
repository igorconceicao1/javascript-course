// Arrays, Functions and Objects
// Objects - key/value pairs methods
// dot notation para acessar os methodos 

const person = {
  name: 'Igor',
  lastName: 'Da Conceicao Silva Delgado',
  age: 28,
  education: true,
  married: false,
  siblings: ['paloma', 'teste', 'teste2'],
  hello: function() {
    console.log("Teste de funcao que vai virar metodo");
  },

  hello2(){
    console.log('Teste de funcao sem o function escrito');
  },

  hello3: function helloTest() {
    console.log('Teste de funcao com o function e o nome da funcao escrita');
  }
}

//But again, in the object setting, this is a method essentially, once you are going to invoke the function, it is going to be a method, just something to keep in mind.

console.log(person.name);
console.log(person.education);
console.log(person.siblings[2]);
person.hello();

const age = person.age;
console.log(age)

person.name = 'Iggor'
console.log(person.name);

person.hello2();
person.hello3();