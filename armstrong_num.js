const prompt = require("prompt-sync")();
let num= parseInt(prompt("Enter the number ="));
let sum=0;
let orignaal=num;
while(num>0){
    let digit= num%10;
    sum= sum+digit **3;
    num= Math.floor(num/10);
}
if(sum==orignaal){
    console.log("The number is armstrong");
}else{
    console.log("NOt an armstrong number")
}