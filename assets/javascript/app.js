$(document).ready(function () {

    var princesses = ["Cinderella","The Little Mermaid","Rapunzel","Belle","Princess Jasmine","Merida","Tiana","Princess Aurora","Pocahontas","Snow White","Fa Mulan","Anastasia"];



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


    createButton()

})