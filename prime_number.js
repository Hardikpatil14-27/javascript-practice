function prime(num){
    if(num<=1){
        console.log("NOT A NUMBER");}
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    } return true;

}
console.log(prime(2));
console.log(prime(10));