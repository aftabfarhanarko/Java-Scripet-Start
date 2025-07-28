const price = 700;
const ago = 60;
const hight = 39;
if(ago >= 86 ){
  const discount = price * 20/100;
  const payBill = price - discount;
  console.log("You Pay This Muney : " + payBill );

}else if (ago >= 67 || hight ==30 ){
    const discounT = price * 47/100;
    const graindma = price - discounT;
    console.log("Grieand ma Pay This Bill : "+ graindma);
}else{
    console.log("No Discount !");
}