/* BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
  
    BMI Calculate */

    const weidth = 117; //weidth Decleration
    const Hight = 187; //Hight CM declerations
    const hight = Hight / 100; //Hight Miter a convart on / 100 dea
    const BMI = weidth / (hight * hight); // Suthro On BMI Crite er ....... BMI = weight / (hight*hight)

    const number = parseFloat(BMI.toFixed(1));
    console.log("BMI Current Value is : " + number);

    if(number < 18.7){
        console.log("You are Underweight");

    }else if(number >= 18.8){


         if(number <= 24.8){
            console.log("You are a Normal");
         }else{
            console.log("You are Not Normal");
         }
    }else if(number >=24.9){

        if(number <= 30.6){
            console.log("You are a Overweidth");

        }else{
            console.log("You Very Very Overweight On");
        }
    }else{
        console.log("You are Obese");
    }
