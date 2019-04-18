/*
 * Sabin Shrestha
 * INFO 2220
 * Prof.Jonathan Holmes
 * 02 / 04 / 2019
 * Assignment 3
 * Purpose: This javascript runs at beginning of html
*/
alert("The script in the header has run.");
var loadLast = "I loaded last";
var myArray;
if (myArray === undefined) {
    myArray = [];
} else {
    alert("The array was not undefined");
}
myArray.push(34);
myArray.push(5.5);
myArray.push(33.5);
myArray.push(46.5);
myArray.push(59);
myArray.push(64);
myArray.push(43);
myArray.push(64);
myArray.push(48);
myArray.push(49);
myArray.push(40);
myArray.push(59);
myArray.push(44);
myArray.push(54);
myArray.push(19.5);
myArray.push(25);
myArray.push(69);
myArray.push(23);
var totalSum = 0;

for (var j = 0; j < myArray.length; j++) {
    totalSum += myArray[j];
}
alert(totalSum / myArray.length);

function myName() {
    return "Sabin Shrestha";
}