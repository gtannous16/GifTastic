$(document).ready(function () {

    var princesses = ["Cinderella","The Little Mermaid","Rapunzel","Belle","Princess Jasmine","Merida","Tiana","Princess Aurora","Pocahontas","Snow White","Mulan","Anastasia","Elsa & Anna"];



    function createButton() {
    
        $("#button").empty();

        for (var i = 0; i < princesses.length; i++) {
        
            var pOption = $("<button>")
            pOption.addClass("character");
            pOption.attr("data-name", princesses[i]);
            pOption.text(princesses[i]);
           
            $("#button").append(pOption);
        }

    }
        
        $("#submitButton").on("click", function () {
            var char = $("#userinput").val().trim();
            princesses.push(char)
            form.reset();
            createButton()          
            return false;
        })

    
        createButton()
    
    
})