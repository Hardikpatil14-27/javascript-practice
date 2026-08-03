let str= "HELLO I AM HARDIK PATIL I LIVE IN GUJARAT"
let temp="";
let long="";
for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        temp += str[i]
    }else{
        if(temp.length>long.length){
            long=temp;
        } temp="";
    }
    if(temp.length>long.length){
        long=temp;
    }
}
console.log("THE LONGEST WORD IS = "+long)