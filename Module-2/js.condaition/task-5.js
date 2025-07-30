/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const amount = 3000;
const ageo = 63;
const student = true;
let discount;
let sum;

if(ageo < 16){
    console.log("Free For Children");
}else if( student === true){
    discount = amount *50 / 100;
      sum =  amount- discount ;
    console.log("Student Discount Ammount : " + sum);
}else if(ageo >= 60){
    discount = amount *15 /100;
    sum =  amount- discount ;
    console.log("Discount Ammount : " + sum);
}else{
    console.log("Otherwise Regular ticket fare 800 tk");
}