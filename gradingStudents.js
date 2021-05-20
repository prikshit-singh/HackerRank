var grades=[73,67,38,33]
function gradingStudents(grades) {
    
    // Write your code here
    
    for(let i in grades){
        if(grades[i]<=40 && 40-grades[i]<3){
            grades[i]=40;
        }
        if(grades[i]<=45 && 45-grades[i]<3){
            grades[i]=45;
        }
        if(grades[i]<=50 && 50-grades[i]<3){
            grades[i]=50;
        }
        if(grades[i]<=55 && 55-grades[i]<3){
            grades[i]=55;
        }
        if(grades[i]<=60 && 60-grades[i]<3){
            grades[i]=60;
        }
        if(grades[i]<=65 && 65-grades[i]<3){
            grades[i]=65;
        }
        if(grades[i]<=70 && 70-grades[i]<3){
            grades[i]=70;
        }
        if(grades[i]<=75 && 75-grades[i]<3){
            grades[i]=75;
        }
        if(grades[i]<=80 && 80-grades[i]<3){
            grades[i]=80;
        }
        if(grades[i]<=85 && 85-grades[i]<3){
            grades[i]=85;
        }
        if(grades[i]<=90 && 90-grades[i]<3){
            grades[i]=90;
        }
        if(grades[i]<=95 && 95-grades[i]<3){
            grades[i]=95;
        }
        if(grades[i]<=100 && 100-grades[i]<3){
            grades[i]=100;
        }
    }
return grades;
}
console.log(gradingStudents(grades));