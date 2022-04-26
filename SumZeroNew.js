
//[-5,-4,-3,-2,0,2,4,6,8] -> input
//[-4 4] -> output

function FindSumPair(array){
    let left=0
    let right=array.lenght-1;

    while(left < right){
        sum=array[left]+array[right];
        if(sum===0){
            return [array[left],array[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
        
        }//while(left < right){
    
        }//function getSumPair(array){

const result=FindSumPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);