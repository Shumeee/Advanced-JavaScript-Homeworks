$(document).ready(function(){
    $("#button").click(function(i){
        $("#ul").append("<h3>The first 10 pokemon are:</h3>");
        for( i = 1; i <= 10; i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`,
                success: function(result){
                    console.log(result.name);
                    $("#ul").append(`<li>${result.name}</li>`);
                },
                error: function(){
                    console.log("Error!");
                }
            })
        }
    })
})