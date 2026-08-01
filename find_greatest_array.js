let array =[10,20,30,40,50,60,70,80,90,100];
let big=0;
let second=0;
for(let i=0;i<array.length;i++){
    if(array[i]>big){
        big=array[i];
    }
}
for(let i=0;i<array.length;i++){
    if(array[i]<big && array[i]>second){
        second=array[i];
}
}
console.log("THE BIGGEST =" +big+ "THE SECOND BOGGEST =" +second);