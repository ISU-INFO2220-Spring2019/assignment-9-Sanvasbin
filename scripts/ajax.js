/*  Sabin Shrestha
    INFO 2220
    Prof.Jonathan Holmes
    04 / 1 / 2019
    Assignment 8
    Purpose: A jquery file where we apply json and ajax
*/
$(document).ready(function () {
    $("#btnSearch").click(function (e) {
        $.ajax({
            url: "data/books.json",
                success: function (jsonData) {
                    var txt = $("#txtSearch").val().toLowerCase();
                    if (jsonData.ok === "true") {
                        var data = jsonData.data;
                        var tblBody = $('#showDetail');
                        tblBody.empty();
                        for (var i = 0; i < data.length; i++) {
                            if (JSON.stringify(data[i]).toLowerCase().indexOf(txt) > -1) {
                                var row = $("<tr></tr>");
                                var title = $("<td></td>").text(data[i]['Title']);
                                var isbn = $("<td></td>").text(data[i]['ISBN']);
                                var author = $("<td></td>").text(data[i].Author.LastName + "," + data[i].Author.FirstName + data[i].Author.MiddleName);
                                var tag = $("<td></td>");
                                var list = $("<ul></ul>");
                                for (var j = 0; j < data[i].Tags.length; j++) {
                                    list.append($("<li></li>").text(data[i].Tags[j]));
                                }
                                tag.append(list);
                                row.append(title);
                                row.append(isbn);
                                row.append(author);
                                row.append(tag);
                                tblBody.append(row);
                            }
                        }
                    }
                }

        });
        return false;
    });
    $("#txtKey").keyup(function (e) {
        $.ajax({
            url: "data/people.json",
            success: function (people) {
                var ul = $("#display");
                ul.empty();
                var txtPeople = $("#txtKey").val();
                for (var i = 0; i < people.length; i++) {
                    if ((people[i].name.toLowerCase().indexOf(txtPeople.toLowerCase()) > -1) ||
                        (people[i].phone.toLowerCase().indexOf(txtPeople.toLowerCase()) > -1)) {
                        var li = $("<li></li>").addClass('best')
                            .text((people[i].name) + " " + (people[i].age) + " " + (people[i].phone) + " " + (people[i].group));
                        ul.append(li);
                        if (people[i].group == 1) {
                            li.addClass('groupI');
                        }
                        else if (people[i].group == 2) {
                            li.addClass('groupII');
                        }
                        else {
                            li.addClass('groupIII');
                        }
                    }
                }
            }
        });
    });
    return false;
});




