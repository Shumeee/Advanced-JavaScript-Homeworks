let fNames = ["David","Angel","Sharko","Darko","Marko"];
let lNames = ["Shumanski","Angelovski", "Sharkovski","Darkovski","Markovski"];

function printNames(fname, lname, count){
    let n = `First name: ${fname[count-1]} Last name: ${lname[count-1]}\n`;
    if(count == 1){
        return n;
    }
    count --;
    return n + printNames(fname, lname, count);
}

console.log(printNames(fNames, lNames, fNames.length));
