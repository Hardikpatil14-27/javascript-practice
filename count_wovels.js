const prompt = require('prompt-sync')();
let str = prompt("ENTER THE STRING = ");
let count =0;
for(let i=0;i<str.length;i++){
    let ch = str[i].toLowerCase();
    if(ch=='a' || ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'){
        count++;
    }
}
console.log("NUMBER OF VOWELS IN THE STRING = "+count);