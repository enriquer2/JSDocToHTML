/**
 * It is a By impossible of in difficulty discovered celebrated ye.
 * Justice joy manners boy met resolve produce. Bed head loud next plan rent had easy
 * add him. As earnestly shameless elsewhere defective estimable fulfilled of.
 * Esteem my advice it an excuse enable. Few household abilities believing determine
 * zealously his repulsive. To open draw dear be by side like. 
 * @sumary A concise summary
 * 
 * 
 * @param {int} principal - Amount of money that you earned
 * @param {integer} years - How many years are you been working
 * @param {float} rate - Put a significant rate
 */


var calculateMonthlyPayment = function(principal, years, rate) {
    if (rate) {
        var monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', function() {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});

/**
 * 
 * @param {interger} born 
 * @param {interger} date 
 * @param {string} name Doesn't work 
 */

var calculateAge = function(born, date, name) {
    if (born) {
        var age = date - born;
    }
    var age = date - born;
    return age;
};

document.getElementById('calcBtn1').addEventListener('click', function() {
    var born = document.getElementById("born").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var age = calculateAge(born, date, name);
    document.getElementById("age").innerHTML = age.toFixed(2);
});

/** Class representing a point. 
 * This is a description of the class
 */
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}

/**
 * @param  {} name
 * @param  {} {this._name=name;}assistCustomer(custName
 * @param  {} {console.log(this.name+'isassisting'+custName
 */

class UniversityLibrarian {
    constructor(name) {
        this._name = name;
    }

    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

let lib1 = new UniversityLibrarian();
/**
 * @param  {int} born
 * @param  {integer} date
 * @param  {string} name
 * @param  {string} [surname] - It is optional
 * 
 */
var another = function(born, date, name, surname) {
    if (born) {
        var age = date - born;
    }
    if (!surname) {
        surname = "R2";
    }
    var age = date - born;
    return age;
};

/**
 * @param  {(string|string[])} [somebody=John Doe] - Allow one or another type
 * @param {*} world - allow whatever yoou want
 * @callback Point
 * @callback {Point}
 * 
 * @file This is my first script.
 * @copyright R2 2017
 */
let siNoSedefineNoVa = function sayHello(somebody, world) {
    if (!somebody) {
        somebody = 'John Doe';
    } else if (Array.isArray(somebody)) {
        somebody = somebody.join(', ');
    }
    alert('Hello ' + somebody);

    console.log('Hello ' + JSON.stringify(world));

}

/**
 * @class Point3D
 */
class Point3D {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} z - The z value.
     */
    constructor(x, y, z) {
        // ...
    }
}

/**
 * @constant
 * @type {string}
 * @default
 */
const RED = 'FF0000';

/** @constant {number} */
let ONE = 1;

var Person = makeClass(
    /** @lends Person.prototype */
    {
        /** @constructs */
        initialize: function(name) {
            this.name = name;
        },
        /** Describe me. */
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);