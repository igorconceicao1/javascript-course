/* 
## Arrays #4

1. create "fruits" array and store some fruit values
2. setup the last item as number (random)
3. assign first fruit to the variable
4. re-assign last array item to the actual fruit
5. log both first fruit variable and entire fruits array
*/

const fruits = ["apple", "orange", "banana", "watermelon", "strawberry", 5];

const firstFruit = fruits[0];
fruits[0] = "grap";
fruits[5] = "apple";

console.log(fruits[0], fruits[5]);
console.log(firstFruit, fruits);
