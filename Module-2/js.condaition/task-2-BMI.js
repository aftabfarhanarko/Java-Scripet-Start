/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.*/
// BMI Calculate

 
const weidth = 59; // Weight Declear
const Hight = 145; //Hight CM a Decler Kore
const hight = Hight / 100; //Hight ke Miter a Convar
const BMI = weidth / (hight * hight); // BMI = weight (kg) / (height (m))^2 ...Sutro
const number = parseFloat(BMI.toFixed(1)); //Valu Ta Ke Float a Kore Nilam parseFloat dea
console.log("BMI Valu : " + number);

if(number <= 19.3){
    console.log("You Are Underweight");

}else if(number >= 19.3 && number <=25.2){
      console.log("You Are a Normale");
    
}else if(number >= 25.4 && number <= 29.5 ){
       console.log("You are Overweight");
}else{
    console.log("You Are Obese");
}