// let str = "HELLO MY NAME IS HARDIK PATIL";
const prompt = require("prompt-sync")();
let str = prompt("ENTER THE STRING = ")
let count =0;
for(let i =0;i<str.length;i++){
    if(str[i]== " "){
        count++;
    }
}
console.log("THE WORDS IN STR IS ="+(count))