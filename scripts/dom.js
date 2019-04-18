/*
 * Sabin Shrestha
 * INFO 2220
 * Prof.Jonathan Holmes
 * 02 / 18 / 2019
 * Assignment 5
 * Purpose: The purpose of this js is to learn dom manipulation
*/
var firstName = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var lastName = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
var age = [36, 34, 7, 34, 32, 8];

function showInnerText() {
    var pOne = document.getElementById('pOne');
    alert(pOne.innerText);
}

function showInnerHTML() {
    var pOne = document.getElementById('pOne');
    alert(pOne.innerHTML);
}

function numberList() {
    var liElement = document.getElementsByTagName("li");
    for (var i = 0; i < liElement.length; i++) {
        liElement[i].innerText += " " + parseInt(i + 1);
    }
}

function markRows() {
    var trElement = document.getElementById("tblMarkRows").getElementsByTagName("tr");
    for (var i = 0; i < trElement.length; i++) {
        if (i % 2 === 1) {
            trElement[i].classList.add("other");
        } 
    }
}

function addRows() {
    var table = document.getElementById("tblAddRows");
    for (var i = 0; i < firstName.length; i++) {
        var newRow = document.createElement("tr");
        if (i % 2 === 1) {
            newRow.classList.add("other");
        }
        var firstNameCell = document.createElement("td");
        var lastNameCell = document.createElement("td");
        var ageCell = document.createElement("td");
        firstNameCell.innerHTML = firstName[i];
        lastNameCell.innerHTML = lastName[i];
        ageCell.innerHTML = age[i];

        // adding childs
        newRow.appendChild(firstNameCell);
        newRow.appendChild(lastNameCell);
        newRow.appendChild(ageCell);
        table.appendChild(newRow);
    }
}

function addSuccess() {
    var divElement = document.createElement("div");
    divElement.classList.add("success");
    divElement.innerHTML += "This is a Success Message";
    document.getElementById("divMessages").appendChild(divElement);
}

function addWarning() {
    var divElement = document.createElement("div");
    divElement.classList.add("warning");
    divElement.innerHTML += "This is a Warning Message";
    document.getElementById("divMessages").appendChild(divElement);
}

function addError() {
    var divElement = document.createElement("div");
    divElement.classList.add("error");
    divElement.innerHTML += "This is a Error Message";
    document.getElementById("divMessages").appendChild(divElement);
}