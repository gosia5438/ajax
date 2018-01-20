'use strict';

/*
function ajax(method, url) {
    var xhttp = new XMLHttpRequest();
    //console.log(xhttp);

    xhttp.open(method, url);

    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                var data = xhttp.responseText;
                console.log(data);
            }
            xhttp = null;
        }
    }
    xhttp.send();
}

ajax("GET", "https://jsonplaceholder.typicode.com/posts/1");
ajax("GET", "https://jsonplaceholder.typicode.com/albums");
*/

//TO SAMO TYLKO W JQUERY

/*$.getJSON("https://jsonplaceholder.typicode.com/posts/1", function (data) {
    console.log(data)
});

// TO SAMO W AJAX

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    dataType: "json",
    success: function (resultJSON) {
        console.log(resultJSON);
    }
});*/

function ajax(method, url) {
    var xhttp = new XMLHttpRequest();

    xhttp.open(method, url);

    xhttp.onreadystatechange = function () {

        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                var data = xhttp.responseText;
//                var obj = JSON.parse(data);
                                console.log(data);


                var paragraf = document.createElement('p');
                var paragrafText = document.createTextNode('User ID jest rowne: ' + obj.userId + ' UserName jest rowne ' + obj.userName + ' User URL jest rowne ' + obj.userURL);
                paragraf.appendChild(paragrafText);
                document.body.appendChild(paragraf);
            }
            xhttp = null;
        }
    }
    xhttp.send();
}

function pobierzDane() {
    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
}
document.getElementById('button').addEventListener('click', pobierzDane);




// JQUERY

/*$(function () {
    $('button').click(function(){    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data) {
        console.log(data);
        var paragraf = $('p');
        var paragrafText = $(document.createTextNode('User ID jest rowne: ' + data.userId + ' UserName jest rowne ' + data.userName + ' User URL jest rowne ' + data.userURL));
        $('p').append(paragrafText);
        $('body').append(paragraf);
        });
    });
});*/