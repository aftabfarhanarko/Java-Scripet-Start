/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// Grid Calculations

const mark = 39;

if(mark >= 90){
    console.log("A+");
}else if(mark >= 80){
    console.log("A-");
}else if (mark >= 70){
    console.log("B");
}else if(mark >= 60){
    console.log("C");
}else if(mark >= 50){
    console.log("D");
}else if(mark >= 40){
    console.log("E");
}else{
    console.log("Fail All Subjict.........");
}