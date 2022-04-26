// Sorting using Recursion Function
// [2,3,1,4] -> By default case
// [2,1,3,4] -> case 1
// [1,2,3,4] -> final output

let myArray=[2,3,1,4,9,5,7]
let i=0;
let j=1;

function isSorted(array){
    for(let i=0;i<array.length;i++){
        if(array[i] > array[i+1]) {
            return false;
        }
    } // for(let i=0; i<array.length;i++){
    return true;
} // function id isSorted(array){

function sortCheck(array){
    if(isSorted(array)){
        myNewlist=array;
        return;
    } // (if isSorted(array)){
    else if(array[i] < array[j]){
        i++;
        j++;
        sortCheck(array)
    }else{
        [array[i],array[j]]=[array[j],array[i]]
        i=0;
        j=1;
        sortCheck(array);
    } // }else{
    
} // function sortCheck(array){

sortCheck(myArray);
console.log(myNewlist);