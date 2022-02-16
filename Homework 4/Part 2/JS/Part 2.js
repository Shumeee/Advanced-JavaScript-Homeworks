let input = prompt('Enter parameter!');

function promise(parameter){
    return new Promise((resolve, reject) => {
        if(validate(parameter))
        setTimeout(() => {
            resolve(parameter.toUpperCase());
        }, 4000);
        else reject(parameter);
    })
}

function validate(input){
    if(input == '' || input == null) console.log('Empty parameter!');
    else if(isNaN(parseInt(input)) == true) return true;
    else return false;
}

promise(input)
.then(success => {
    console.log(success);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log(`Finished!`);
});