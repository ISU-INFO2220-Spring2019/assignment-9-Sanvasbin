/*
 * Sabin Shrestha
 * INFO 2220
 * Prof.Jonathan Holmes
 * 02 / 25 / 2019
 * Assignment 6
 * Purpose: The purpose of this js is to learn events and events handling
*/
function moveMouse(e) {
    var e = e || window.event;
    var xPos = e.x;
    var yPos = e.y;
    text = "x: " + xPos + " y: " + yPos;
    document.getElementById("mouseCoords").innerText = text;
}

function mousePressed(e) {
    var e = e || window.event;
    var trgt = e.target || e.srcElement;
    var crgt = e.currentTarget || e.srcElement;
    if (trgt !== crgt) {
        trgt.className = "pressed";
    }
}

function resetClass(e){
    var e = e || window.event;
    var trgt = e.target || e.srcElement;
    trgt.className="";
}

function mouseHeadOver(e){
    var e = e || window.event;
    var trgt = e.target || e.srcElement;
    trgt.className="overHead";
}

window.onload= function(){
    var sec = document.getElementById("secMouser")
    sec.addEventListener("mousemove",moveMouse);
    sec.addEventListener("mousedown",mousePressed);
    sec.addEventListener("mouseup", resetClass);
    
    var header = document.getElementsByTagName("h1");
    for(var i = 0; i < header.length; i++){
        header[i].addEventListener("mouseover",mouseHeadOver);
        header[i].addEventListener("mouseout",resetClass);
    }

    var btn = document.getElementById("btnSayHello");
    btn.addEventListener("click", function() {
        alert("Hello!");
    });

    btn.addEventListener("mousemove", function(e){
        var e = e || window.event;
        e.stopPropagation();
        e.cancelBubble = true;
        document.getElementById("mouseCoords").innerText = "Over the button";
    });
}