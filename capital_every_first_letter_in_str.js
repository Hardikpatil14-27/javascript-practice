let str= "hello my name is hardik patil";
for(let i=0;i<str.length;i++){
    if(str[i]===" "){
        str = str[0].toUpperCase() + str.substring(1);
        str = str.substring(0,i+1)+str[i+1].toUpperCase()+str.substring(i+2,str.length)
    }
} console.log(str)