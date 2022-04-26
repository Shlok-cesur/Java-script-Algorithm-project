const arr=[9,2,6,1,3];

// Steps
// 1. Consider 2nd element , arr[1] - Start yhi se hoga..
// 2. arr[j]>cur - Swapping perform hoga

 const sorted=(arr)=>{
     for(let i=1;i<arr.length;i++){
         let cur=arr[i]; // 2
         let j=1-1; // 0
         while(j>=0 && arr[j]>cur){
             arr[j+1]=arr[j]; // tmp [8,8,4,1,3]
             j--;
         }
         arr[j+1]=cur; // [2,8,4,1,3]
     }
     return arr;
 }
const res=sorted(arr)
console.log(res);

// 1st Iteration // [2,8,4,1,3]
// 2nd Iteration // [2,4,8,1,3]