// Checking square in another array
// array1=[1,2,3,4],array2=[1,9,4,16]
// if(array1[i] * array[j] === array2[j])
// let isSquare=true

function isSquareCheck(array1,array2)
    {
    for (let i=0;i<array1.length;i++){
        let isSquare=false;
        for(let j=0;j<array2.length;j++){
            if(array1[i] * array1[j] === array2[j]){
        isSquare=true;
        }
            if(j === array2.length-1){
                if(!isSquare){
                    return false;
                }
            }// if(j === array2.length-1){
    }// for(let j=0;j<array2.length;j++){
}//for (let i=0;i<array1.length;i++){
return true;
    }// function=isSquareCheck(array1,array2);
const result=isSquareCheck([1,2,3,4],[1,9,4,25]);
console.log=(result);