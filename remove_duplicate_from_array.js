

// let arr =[1,2,2,3,4,4,5,5];
// let new_arr =[];

// for(let i=0;i<arr.length;i++){
//     let ch= arr[i]
//     if(!new_arr.includes(ch)){
//         new_arr.push(ch)
//     }
// }
// console.log(new_arr)

const prompt = require("prompt-sync")();
let arr= prompt("add numbers =")
let new_arr =[];

for(let i=0;i<arr.length;i++){
    let ch= arr[i]
    if(!new_arr.includes(ch)){
        new_arr.push(ch)
    }
}
console.log(new_arr)
