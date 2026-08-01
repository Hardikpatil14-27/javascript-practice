let array=[1,2,2,3,3,4,4,5,5,6,6,9,8,7,100,100,500,700,988,988,500]
let seen=[];
let dupli=[];

for(let i=0;i<array.length;i++){
    let ch= array[i];
    if(!seen.includes(ch)){
        seen.push(ch);
    }
    else{
        if(!dupli.includes(ch)){
            dupli.push(ch);
        }
    }
}
console.log("Duplicate Value is ="+ dupli);