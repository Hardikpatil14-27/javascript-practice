let arr=[1,2,0,3,4,0]
let index=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        arr[index]=arr[i]
        index++;
        }
}
 for(let j=index;j<arr.length;j++){
            if(arr[j]==0){
                arr[index]=0;
                index++;
            }
        }
    console.log(arr)