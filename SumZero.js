//checking sum zero - problem
//[-5,-4,-3,-2,0,2,4,6,8] -> input
//[-4 4] -> output

function getSumPairzero(array){
    for(let number of array) {
        console.log("outer loop")
        for (let j=1;j<array.length;j++){
            console.log("Inner loop")
            if(number + array[j] === 0){
                return [number,array[j]];
            }
        }//for(let j=1;j<array.length;j++){
    }// for(let number of array){
}//function getSumPairZero(array){
const result=getSumPairzero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);