$(document).ready(function(){
    let div = $("#div");
    function image(dog){
        div.append(`<img src="${dog}"></img>`);
    }
    $("#button").click(function(){
        $.ajax({
            url: "https://dog.ceo/api/breed/hound/images",
            success: function(response){
                response = response.message;
                for(let dog of response){
                    console.log(dog);
                    image(dog);
                }
            },
            erorr: function(){
                console.log("Erorr!");
            }
        })
    })
})