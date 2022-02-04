$(document).ready(function(){
    let table = $("#table");
    
    function printPlanets(planet, i){
        table.append(`<th colspan="2">${planet.name}</th>`);
        table.append(`<tr><td>Population</td><td id="P${i}">${planet.population}</td></tr>`);
        table.append(`<tr><td>Climate</td><td id="C${i}">${planet.climate}</td></tr>`);
        table.append(`<tr><td>Gravity</td><td id="G${i}">${planet.gravity}</td></tr>`);
    }
    function overwritePlanets(planet, i){
        $("th")[i].innerText = `${planet.name}`;
        $(`#P${i}`)[0].innerText = `${planet.population}`;
        $(`#C${i}`)[0].innerText = `${planet.climate}`;
        $(`#G${i}`)[0].innerText = `${planet.gravity}`;
    }
    
    $("#button").click(function(){
        table.attr("border","2px");
        fetch(`https://swapi.dev/api/planets/?page=1`)
        .then(function(response){
            response.json().then(function(data){
                data = data.results;
                for(let i = 0; i < 10; i++){
                    printPlanets(data[i], i);
                }
            })
        })
        $("#next").removeAttr("hidden");
    })
    $("#next").click(function(){
        fetch(`https://swapi.dev/api/planets/?page=2`)
        .then(function(response){
            response.json().then(function(data){
                data = data.results;
                for(let i = 0; i < 10; i++){
                    overwritePlanets(data[i], i);
                }
            })
        })
        $("#previous").removeAttr("hidden");
        $("#next").attr("hidden", true);
    })
    $("#previous").click(function(){
        fetch(`https://swapi.dev/api/planets/?page=1`)
        .then(function(response){
            response.json().then(function(data){
                data = data.results;
                for(let i = 0; i < 10; i++){
                    overwritePlanets(data[i], i);
                }
            })
        })
        $("#next").removeAttr("hidden");
        $("#previous").attr("hidden", true);
    })
})
