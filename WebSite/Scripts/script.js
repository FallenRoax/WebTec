$(document).ready(function () {
    changeContent(null);

    $("#home").click(changeContent);
    $("#canvas").click(changeContent);
    $("#form").click(changeContent);

    $("#styleSwitch").click(changeStyle);
});

//Navigation
function changeContent(e) {
    var name = 'home'; // set to 'home', 'canvas', ... for debugging.
    if (e !== null) {
        changeActiveNav(e);
        name = $(e.target).attr('id');
    }
    $('#mainContent').load(name + ".html");
}

function changeActiveNav(e) {
    //"use strict";
    $('#home').removeClass('active');
    $('#canvas').removeClass('active');
    $('#form').removeClass('active');
    $(e.target).addClass('active');
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//StyleSwitch
function changeStyle(sheet) {
    document.getElementById('style').setAttribute('href', 'Css/' + sheet + '.css');
    document.cookie = 'style=' + sheet;
}

//Cookie
function getStyle() {
    var style = getCookie("style");
    if (style == null) {
        style = "spaceStyle";
    }
    changeStyle(style);
}

function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}