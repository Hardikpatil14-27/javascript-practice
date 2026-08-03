const prompt = require("prompt-sync")();
let num= parseInt(prompt("enter the number ="))
let fact=1;
for(let i=1;i<=num;i++){
    fact = fact*i;
}
console.log("the factorial number is ="+fact)