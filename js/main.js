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
 * 
 * H1 Casa
 * Alt-H1
 * 
 * En esta clase nosotros tenemos que trabajar con un *punto* dando dos coordenadas
 * 
 * 1. Crearemos un punto
 * 2. Haremos el get
 * ..1. Tenemos que
 * ..2. poner la palabra *get*
 * 
 * Despues de todo este tendremos un `punto` lo cual es importante.
 * 
 * ```Funciona?
 * si esto no funciona sera porque has instroducido algo mas
 * revisa el codigo
 * ```
 * 
 * > Si quieres hacer un bloque tendras que hacerlo de esta forma
 * > Veremos como sale
 * 
 * <dl>
 *  <dt>Definition list </dt>
 *  <dd> Is something people use sometimes </dd>
 * </dl>
 *
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