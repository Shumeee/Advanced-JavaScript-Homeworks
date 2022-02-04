let number = +prompt("Enter a number!");

function check(number){
    if(isNaN(number)) return 0;
    return 1;
}
function factoriel(number){
    if(number == 1) return '1';
    return `${number}` + factoriel(number - 1);
}

if(check(number)){
    console.log(`The number ${number} has a factoriel of ${factoriel(number)}`);
}else alert("Invalid number!");