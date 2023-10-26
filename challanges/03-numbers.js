/* 
## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score
4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message
*/

//score
const score1 = 44;
const score2 = 27;
const score3 = 59;

let total_score = score1 + score2 + score3;
let average_score = total_score / 3;

console.log(total_score);
console.log(average_score);

console.log("----------------------");

//plates
const plates = 20;
const people = 7;

let remaining_plates = plates % people;

console.log(remaining_plates);

remaining_plates += 1;
console.log(remaining_plates);

const message = "There are " + remaining_plates + " plates available.";

console.log(message);
