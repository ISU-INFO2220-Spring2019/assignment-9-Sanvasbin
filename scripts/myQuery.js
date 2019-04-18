/*
 * Sabin Shrestha
 * INFO 2220
 * Prof.Jonathan Holmes
 * 03 / 25 / 2019
 * Assignment 7
 * Purpose: To learn jquery and manipulate DOM using jQuery
*/
$(document).ready(function () {
    $("#btnChangeSpan").click(function () {
        $("#spnOne").text("New Text for the Span");
    });
    $("#btnAppendToSpan").click(function () {
        $("#spnOne").append(" == Text at the back");
    });
    $("#btnPrependToSpan").click(function () {
        $("#spnOne").prepend("Text at the front -- ");
    });
    $("#btnBeforeSpan").click(function () {
        $("#spnOne").before("Text Before ++ ");
    });
    $("#btnAfterSpan").click(function () {
        $("#spnOne").after(" @@ Text After");
    });
    $("#btnShowSpan").click(function () {
        alert($("#spnOne").text());
    });
    $("#btnNumberPs").click(function () {
        var children = $("#divNumbers").children();
        for (var i = 0; i < children.length; i++){
            children[i].prepend(i+1 + ". ");
        }
    });
    $("#btnClassPSuccess").click(function () {
        $('#divClass p').addClass("success");
    });
    $("#btnClassPError").click(function () {
        $('#divClass p:even').removeClass("success");
        $('#divClass p:even').addClass("error");
    });
    $("#btnClassPWarning").click(function () {
        $('#divClass p').removeClass("success error");
        $('#divClass p').addClass("warning");
    });
    $("#btnAddLastNames").click(function () {
        $('.bff').before().prepend('<strong>FlintStone </strong>');
        $('.bff').append('<em> Rubble </em>');
        $('.bff').next().append('<del> the Dinosaur </del>');
    });
    $("#btnRemoveLarry").click(function () {
        $('ul .first').remove();
    });
    $("#btnClearCurly").click(function () {
        $('ul .second').empty();
    });
    $("#btnRemoveMoeLastName").click(function () {
        $('ul .third span').remove();
    });
    $("#btnRemoveShempLastName").click(function () {
        $('ul .third + li span').remove();
    });
    $("#btnChangeText").click(function () {
        $('#spnTwo').parent().siblings().children().next().eq(0).text("I was Changed");
    });
    $("#btnTooglePs").click(function () {
        $('p').toggle();
        if ($("#btnTooglePs").text() === "Hide All Ps")
            $("#btnTooglePs").text("Show All Ps");
        else
            $("#btnTooglePs").text("Hide All Ps");
    });
});
