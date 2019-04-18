/*
 * Sabin Shrestha
 * INFO 2220
 * Prof.Jonathan Holmes
 * 02 / 04 / 2019
 * Assignment 3
 * Purpose: This javascript runs after intro. It helps us to learn prompt.
*/
var greeting = prompt("Please enter a greeting:");
if (greeting !== null) {
    alert(greeting + ", " + myName());
} else {
    alert("I am sorry " + myName() + "; I do not know what to do.");
}
loadLast = "I really am last.";