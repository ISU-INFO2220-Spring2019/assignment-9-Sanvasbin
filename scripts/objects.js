/*  Sabin Shrestha
    INFO 2220
    Prof.Jonathan Holmes
    02 / 12 / 2019
    Assignment 4
    Purpose: A Javascript file to understand Javascript function and objects
*/
var personHolder;
var charArray;

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age;
    this.stepsToTake;
    this.steps = getSteps;
    this.sumAge = sumOddAge;

    function getSteps() {
        var output = "";
        for (var i = 1; i <= this.stepsToTake; i++) {
            output += i.toString() + " ";
        }
        return output;
    }

    function sumOddAge() {
        var output = 0;
        for (var j = 1; j < parseInt(this.age); j++) {
            if (j % 2 === 1) {
                output += j;
            }
        }
        return output;
    }
}

function Converter() {
    this.getC = getDegreesInC;
    this.getF = getDegreesInF;
    function getDegreesInF(degreeC) {
        fahrenheit = (9/5) * (degreeC) + 32;
        return fahrenheit;
    }
    function getDegreesInC(degreeF) {
        celsius = (degreeF - 32) * (5 / 9);
        return celsius;
    }
}

function sayHello() {
    var name = prompt("Please enter your name: ");
    alert("Hello " + name);
}

function greet(salutation) {
    var name = prompt("Please enter your name: ");
    alert(salutation + " " + name);
}

function doMaths(num1, num2) {
    concatination = "" + num1 + num2;
    addition = num1 + num2;
    subtraction = num1 - num2;
    multiplication = num1 * num2;
    division = num1 / num2;
    output = concatination + "\r\n" + addition + "\r\n" + subtraction + "\r\n" + multiplication
        + "\r\n" + division; 
    alert(output);
}

function createPerson() {
    var firstName = prompt("Please enter your first name: ");
    var lastName = prompt("Please enter your last name: ");
    var age;
    do {
        age = parseInt(prompt("Please enter your age (1-200): "));
    }
    while(age <= 1 || age >= 200)
    personHolder = new Person(firstName, lastName);
    personHolder.age = age;
}

function showSteps() {
    if (typeof personHolder == "undefined") {
        alert("Please click the 'Fill Object' button first");
    }
    personHolder.stepsToTake = 10;
    steps = personHolder.steps();
    alert(personHolder.firstName + " " + personHolder.lastName + " took steps \r\n" + steps);
}

function getDegreesInC(farenhite) {
    var converter = new Converter();
    alert(converter.getC(farenhite));
}

function getDegreesInF(celsius) {
    var converter = new Converter();
    alert(converter.getF(celsius));
}

function fillCharacterArray() {
    var firstName =  ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var lastName = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var age = [36, 34, 7, 34, 32, 8];
    charArray = [];
    for (var i = 0; i < firstName.length; i++) {
        var person = new Person(firstName[i], lastName[i]);
        var charObj = new Object(person);
        charObj.age = age[i];
        charArray.push(charObj);
    }
}

function getCharacterAt(ndx) {
    if (typeof charArray === "undefined") {
        alert("please click the 'Fill Array' button.");
    }
    else {
        var charObj = charArray[ndx];
        alert(charObj.firstName + " your odd age sum is " + charObj.sumAge());
    }
}