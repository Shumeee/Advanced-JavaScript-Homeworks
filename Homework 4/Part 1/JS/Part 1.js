$(document).ready(function(){
function getUser(){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/1`,
            success: function (result) {
                resolve(result);
            },
            error: function (error) {
                reject(error);
            }
        })
    })
}
// function getUserId(id){
//     $.ajax({
//         url: `https://jsonplaceholder.typicode.com/users/${id}`,
//         success: function (result) {
//             console.log(result);
//         },
//         error: function (error) {
//             console.log(error);
//         }
//     })
// }
async function getUserId(id){
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json();
    console.log(data);
}
getUser()
.then(success => {
    console.log(success);
    getUserId(success.userId);
})
.catch(error => {
    console.log(error);
})
.finally(() => console.log('Complete!'));
})


    