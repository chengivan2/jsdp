//How to properly organize your code

/*
    1. Module DP - Encapsulating code into pure functions and using them in other files.
*/


//We import functions from other files/modules
import calc from './maths.js';

const operation = calc("add", 12, 13);

console.log(operation);

/*
    2. Mixin - an object that we can use 
        in order to add reusable functionality to another object or class, 
        without using inheritance.
*/

let carMixin = {
    revEng() {
        return `This ${this.seats}-seater is very loud`;
    }
}

class Car {
    constructor(seats, color, convertible) {
        this.seats = seats;
        this.color = color;
        this.convertible = convertible;
    }
}

Object.assign(Car.prototype, carMixin);

const cedes = new Car(32, "Green-blue", false);

console.log(cedes.revEng());

/*
    3. Facade DP - creates a facade by hiding all the code complexity away
*/