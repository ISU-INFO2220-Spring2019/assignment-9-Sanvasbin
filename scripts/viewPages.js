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
        var pwd = document.getElementById("passWord").value;
        var remember = document.getElementById("remember").checked;

        if (userName == loginInfo[0] && pwd == loginInfo[1]) {
            alert("You are logged in");
            if (remember === true) {
                localStorage.setItem('userName', userName);
            } else {
                localStorage.removeItem('userName');
            }
        } else {
            alert("Login Failed");
        }
        // refrence from https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
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
        people.group = $("input:radio[name=group]:checked").val()
        People.push(people);
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
            .text("Name: "(data[i].name) + " " + "Phone: " + (data[i].phone) + " " + "Age: " + (data[i].age) + " " + "Group: " +  (data[i].group));
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
