'use strict';


function pobierzDane() {

    $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    success: function (resultJSON) {
        console.log(resultJSON);
//        var array = [];
//        JSON.stringify(array);
        
        
        for (var i = 0; i<resultJSON.length; i++){
            
        var paragraf = document.createElement('p');
         var paragrafText = document.createTextNode(' User ID: ' + resultJSON[i].id + ' User IMIE: ' + resultJSON[i].name + ' User URL: ' + resultJSON[i].website);
         paragraf.appendChild(paragrafText);
        document.body.appendChild(paragraf);
            
        }                
    }
});
}
window.onscroll = function() {pobierzDane()};

