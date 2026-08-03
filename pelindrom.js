// Menual String...
// function peli(name){
//     let rev_name = name.split("").reverse().join("");
//     if (name == rev_name){
//         console.log("The String" +name+ "Is a Pelindrom String")
//     } else{
//         console.log("THE STRING IS NOT PELINDROM STRING...")
//     }
// }

// peli("maam")
// import readline from "readline";
// const prompt = require("prompt-sync")();
// let name = prompt("ENTER THA NAME =");

// function pelin(name){
//     let rev_name = name.split("").reverse().join("");
//     if(name == rev_name){
//         console.log("THE STRING IS PELINDROM..")
//     }else{
//         console.log("THE STRING IS NOT PELINDROM..")
//     }
// }

// pelin(name)


// function isPalindrome(str) {
//     str = str.toLowerCase();

//     let reverse = str.split("").reverse().join("");

//     return str === reverse;
// }

// let name = prompt("Enter a string:");

// if (isPalindrome(name)) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }



// const prompt = require("prompt-sync")();

// let name = prompt("Enter a string: ");

// function pelin(name){
//     let rev_name = name.split("").reverse().join("");

//     if(name === rev_name){
//         console.log("The String is Palindrome");
//     }else{
//         console.log("The String is Not Palindrome");
//     }
// }

// pelin(name);


const prompt =  require ("prompt-sync")();
let str = prompt("ENTER THE NAME = ")
let revStr= "";
for(let i= str.length-1;i>=0;i--){
    revStr += str[i];
}
if(str==revStr){
    console.log("STRING IS PELINDROM")
}
else{
    console.log("NOT PELINDROM STRING")
}


// let array = [1,2,3,2,1]
// let revarray=array.split("").reverse().join("");

// if(array==revarray){
//     console.log("pelindrom")
// } else{
//     console.log("not pelindrom")
// }
