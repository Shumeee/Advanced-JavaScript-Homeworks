$(document).ready(function(){
    let table = $("#table");
    function printPerson(person){
        table.append(`<th colspan="2">${person.name}</th>`);
        table.append(`<tr><td>Username</td><td>${person.username}</td></tr>`);
        table.append(`<tr><td>E-mail</td><td>${person.email}</td></tr>`);
        table.append(`<tr><td>Phone</td><td>${person.phone}</td></tr>`);
        table.append(`<tr><td>Website</td><td>${person.website}</td></tr>`);
        table.append(`<th colspan="2">Adress</th>`);
        table.append(`<tr><td>Street</td><td>${person.address.street}</td></tr>`);
        table.append(`<tr><td>Suite</td><td>${person.address.suite}</td></tr>`);
        table.append(`<tr><td>City</td><td>${person.address.city}</td></tr>`);
        table.append(`<tr><td>Zipcode</td><td>${person.address.zipcode}</td></tr>`);
        table.append(`<tr><td>Geo</td><td>Lat: ${person.address.geo.lat} &nbsp;&nbsp;&nbsp; Long: ${person.address.geo.lng}</td></tr>`);
        table.append(`<th colspan="2">Company</th>`);
        table.append(`<tr><td>Name</td><td>${person.company.name}</td></tr>`);
        table.append(`<tr><td>Slogan</td><td>${person.company.catchPhrase}</td></tr>`);
        table.append(`<tr><td>Work</td><td>${person.company.bs}</td></tr>`);
    }
    $("#button").click(function(){
        table.attr("border", "3px");
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(function(response){
            response.json().then(function(data){
                printPerson(data);
            })
        })
    })
})