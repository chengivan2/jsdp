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
    /An example is in React when you write your components in other files and leverage a single line to 
    render them.
*/


/*
    4. Flyweight DP - Prevents creation of similar items more than once.
        It reduces the memory impact of the system
        An example is the approach of singleton creational DP where nmore than one instances of the same class 
        are not allowed.
        An application is how browsers save images in memory so they don't load twice.
*/

/*
    5. Decorator DP -Allows you to mix functions with classes.
        Not official in JS but is in TS
*/

/*
    6. Model View Controller (MVC) - Defines how an app should be split.
        Reflects how modules are organized in terms of: models (Data and schema), 
        views (Visuals/HTML),
        and controllers (Logic i.e functions). The V gets data from both the M & C.
*/

/*
    7. Model View Presenter (MVP) - Defines how an app should be split.
        Reflects how modules are organized in terms of: models (Data and schema), 
        views (Visuals/HTML),
        and presenters (Logic i.e functions). The V gets data from the P.
*/

/*
    8. Model-View-ViewModel/Controller (MVVM/C) - Defines how an app should be split.
        Reflects how modules are organized in terms of: models (Data and schema), 
        views (Stateless. Has no data or logic),
        and viewmodels (Stateful. Logic i.e functions. Connects to the model).
*/