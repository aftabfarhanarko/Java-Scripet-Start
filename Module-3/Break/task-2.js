/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let i = 1;
while(i <= 200){
  console.log('valu : ', i);
  sum = sum+i;
  if(sum >= 100){
    break;
  }
  i++;
}

console.log('Total sum :', sum);