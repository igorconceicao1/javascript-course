/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

const person1 = {
  name: "igor",
  age: 18,
  status: "resident",
};

const person2 = {
  name: "teste2",
  age: 25,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("idade aceita e status resident");
} else {
  console.log("status negado");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("idade aceita e status resident");
} else {
  console.log("status negado");
}
