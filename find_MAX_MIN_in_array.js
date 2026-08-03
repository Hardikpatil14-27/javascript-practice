let arr=[10,20,30,40,50,90,50]
let max= arr[0];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log("THE MAX IS ="+ max+" THE MIN IS ="+min)
