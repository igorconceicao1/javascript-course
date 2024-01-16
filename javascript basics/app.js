//Loops
// repeatedly run a block of code while condition is true
// while loop
//TURN OFF AUTOSAVE
// I need to use a let, because i will change the value

let amount = 10;

while (amount >= 0) {
  console.log("I have " + amount + " dollars in my bank account");
  amount--; // how do you scape from the loop
}

// do while loops
// repeatedly run a block of code while condition is true
// do while loop
// code block first, condition second
// runs at least one

let money = 0;

do {
  console.log("You have " + money + " dollars");
  money++;
} while (money <= 10);
