/* 
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/

const car = {
    make: 'Volvo',
    model: 'x70',
    year: 1999,
    colors: ['black', 'blue', 'yellow', 'red'],
    hybrid: false,

    drive() {
        console.log('You can drive');
    },

    stop: function() {
        console.log("You can stop your car here");
    },
}

console.log(car.make, car.model, car.year, car.colors[0], car.hybrid);

car.drive();
car.stop();