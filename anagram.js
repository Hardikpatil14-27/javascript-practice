// anagram means the words which have same letters but in different order. For example: "listen" and "silent" are anagrams of each other.
const prompt = require("prompt-sync")();
let str1 = prompt("Enter the str 1=")
let str2= prompt("Enter the str 2=")
if(str1.length!=str2.length){
    console.log("NOT ANAGRAM")
}else{
    if(str1.split("").sort().join("") == str2.split("").sort().join("")){
        console.log("THE GIVEN 2 STRINGS ARE ANAGRAMS...")
    } else{
        console.log("NOT A ANAGRAM STRING")
    }
}
