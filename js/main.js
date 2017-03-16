/**
 * 
 * @param {int} principal - Amount of money that you earned
 * @param {integer} years - How many years are you been working
 * @param {float} rate - Put a significant rate
 */


var calculateMonthlyPayment = function (principal, years, rate) {
    if (rate) {
        var monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', function () {
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

var calculateAge = function (born, date, name) {
    if (born) {
        var age = date - born;
    }
    var age = date - born;
    return age;
};

document.getElementById('calcBtn1').addEventListener('click', function () {
    var born = document.getElementById("born").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var age = calculateAge(born, date, name);
    document.getElementById("age").innerHTML = age.toFixed(2);
});




