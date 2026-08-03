let array =[10,11,16,15,17]


for(let i=0;i<array.length;i++){
    let currnt =array[i]
    let next = array[i+1]
    if(next - currnt!=1){
        console.log("Missing value =",currnt+1);
        break;
    }
}