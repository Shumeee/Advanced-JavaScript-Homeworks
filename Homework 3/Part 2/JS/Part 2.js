$(document).ready(function(){
    $.ajax({
        url: `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`,
        success: function(result){
            result = JSON.parse(result);

            let averageGradeAbove3 = result.filter(g => g.averageGrade > 3); 
            console.log(`Students with average grade above 3:`); 
            averageGradeAbove3.forEach(s => console.log(`${s.firstName} ${s.lastName} - ${s.averageGrade}`));

            let femaleGradeAbove5 = result.filter(f => f.gender == 'Female').filter(g => g.averageGrade == 5);
            console.log(`Female students with average grade of 5:`); 
            femaleGradeAbove5.forEach(s => console.log(`${s.firstName}`));

            let maleLiveInSkopjeOver18 = result.filter(m => m.gender == 'Male').filter(c => c.city == 'Skopje').filter(a => a.age > 18);
            console.log(`Male students who are over 18 and live in Skopje:`); 
            maleLiveInSkopjeOver18.forEach(s => console.log(`${s.firstName} ${s.lastName}`));

            let femaleOver24 = result.filter(f => f.gender == 'Female').filter(a => a.age > 24);
            console.log(`Average grades of all female students over the age of 24:`);
            femaleOver24.forEach(s => console.log(`${s.firstName} ${s.lastName} - ${s.averageGrade}`));

            let maleBGradeAbove2 = result.filter(g => g.averageGrade > 2).filter(n => n.firstName.charAt(0) == 'B');
            console.log(`Male students whose name starts with B with average grade above 2:`);
            maleBGradeAbove2.forEach(s => console.log(`${s.firstName} - ${s.averageGrade}`));
        },
        error: function(error){
            console.log(error);
        }
    })
})
