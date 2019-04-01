$(document).ready(function () {

    var princesses = ["Cinderella","The Little Mermaid","Rapunzel","Belle","Princess Jasmine","Merida","Tiana","Princess Aurora","Pocahontas","Snow White","Fa Mulan","Anastasia","Elsa","Anna"];



    //creating buttons for princesses array 
    function createButton() {
        
        $("#button").empty();

        //loop through array, and append to html
        for (var i = 0; i < princesses.length; i++) {
            //adding a button for each array option, and adding class, text and attr
            var princessOption = $("<button>")
            princessOption.addClass("Character");
            princessOption.attr("data-name", princesses[i]);
            princessOption.text(princesses[i]);
            //adding to html
            $("#button").append(princessOption);
        }

    } 

    function showGifs() {
        $('#gifs').empty;
        var character = $(this).attr("data-name");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=V8VwAun9NDurZ4LUOyqB11YA67GbA5d7&q=" + character + "&limit=10&offset=0&rating=G&lang=en";
        
        $.ajax({
            url: queryUrl, 
            method: 'GET'
        }).then(function(response) {
            console.log(response);
    
        })
    }
  
    createButton()

})