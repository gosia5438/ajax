'use strict';







function pobierzDane() {


    var xhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/users";

    xhttp.onreadystatechange = function () {
        'use strict';
        if (this.readyState == 4 && this.status == 200) {
            var pobraneDane = JSON.parse(this.responseText);
            console.log(pobraneDane);

            for (var i = 0; i < pobraneDane.length; i++) {

                var paragraf = document.createElement('p');
                var paragrafText = document.createTextNode(' User ID: ' + pobraneDane[i].id  + ' User IMIE: ' + pobraneDane[i].name + ' User URL: ' + pobraneDane[i].website);
                paragraf.appendChild(paragrafText);
                document.getElementById('container').appendChild(paragraf);

            }


        }

    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

function addElements() {
    var scrollTop = Math.floor(document.documentElement.scrollTop); // z
    var windowHeight = window.innerHeight; //y
    var heightHTML = document.documentElement.offsetHeight; //x

    console.log(windowHeight);
    console.log(scrollTop);
    console.log(heightHTML);


    if (windowHeight + scrollTop == heightHTML) {
        pobierzDane()
    }
}

window.onscroll = addElements;