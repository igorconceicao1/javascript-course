/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/

const calculateResult = function (subTotal, tax) {
    sum = subTotal + tax;
    return sum;
}

const order1 = calculateResult(1,1);
const order2 = calculateResult(2,2);
const order3 = calculateResult(3,3);

const total = [order1, order2, order3];
console.log(total);

console.log(order1,order2, order3);



