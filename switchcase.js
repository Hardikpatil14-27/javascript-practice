const prompt = require("prompt-sync")();
let name = prompt("ENTER THE NAME =");

switch(name){
    case "PATIL":
        console.log("SURNAME");
        break;
    case "Hardik":
        console.log("NAME");
        break ;
    case "MAHESHBHAI":
        console.log("FATHER NAME");
        break;
    default:
        console.log("NOT FOUND");
}