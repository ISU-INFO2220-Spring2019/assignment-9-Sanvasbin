/*  Sabin Shrestha
    INFO 2220
    Prof.Jonathan Holmes
    04 / 15 / 2019
    Assignment 9
    Purpose: A Javascript file to learn web storage
*/
var People = [];
$(document).ready(function () {

    if (localStorage.userName != null) {
        $("#userName").val(localStorage.userName);
    }

    var loginInfo = ["tester", "tested"];

    $("#btnLogin").click(function () {
        var userName = document.getElementById("userName").value;
        var passcode = document.getElementById("passWord").value;
        var save = document.getElementById("remember").checked;

        if (userName == loginInfo[0] && passcode == loginInfo[1]) {
            alert("You are logged in");
            if (save) {
                localStorage.setItem('userName', userName);
            } else {
                localStorage.removeItem('userName');
            }
        } else {
            alert("Login Failed");
        }
        location.reload();
    });

    // Click event for forget button
    $("#btnForget").click(function () {
        localStorage.removeItem("userName");
    });


    //Click event to add people
    $("#btnAddPerson").click(function () {
        var people = {};
        people.name = document.getElementById("name").value;
        people.phone = document.getElementById("phone").value;
        people.age = document.getElementById("age").value;
        // refrence from https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php
        people.group = $("input:radio[name=group]:checked").val()
        People.push(people);
        // stringify to change into object
        localStorage.Peop = JSON.stringify(People);
        displayPeople();
    });

    //stoping to reload the page. 
    $("form").submit(function (e) {
        e.preventDefault();
    });

    if (localStorage.getItem("Peop") != null) {
        displayPeople();
    }
    
    $("#btnClearStorage").click(function () {
        localStorage.removeItem("Peop");
        location.reload();
    });

    $("#btnEdit").click(function () {

    });

});

// function to help create li elements for displaying people
function displayPeople() {
    var list = $("#list")
    list.empty();
    var json = localStorage.Peop;
    var data = JSON.parse(json);
    for (var i = 0; i < data.length; i++) {
        var li = $("<li></li>").addClass('best')
            .text((data[i].name) + " " + (data[i].phone) + " " + (data[i].age) + " " + (data[i].group));
        var btnEdit = $("<button> Edit</button>");
        li.append(btnEdit);
        list.append(li);
        if (data[i].group == 1) {
            li.addClass('groupI');
        }
        else if (data[i].group == 2) {
            li.addClass('groupII');
        }
        else {
            li.addClass('groupIII');
        }
    }

}
