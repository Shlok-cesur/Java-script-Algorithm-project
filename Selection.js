// Selection sort
// [0,2,34,22,10,19]

function selectionSort(array){


    for(let i=0;i<array.length;i++){
        let min=i;
        for(let j=i+1;j<array.length;j++){
            if(array[j] < array[min]){
                min=j;
            }
        }
        if(i!==min){
            temp=array[i];
            array[i]=array[min];
            array[min]=temp;
        }
    }
    return array;
    
}
const res=selectionSort([0,2,34,22,10,19]);
console.log(res);

//             p
// case 1 : [0,2,34,22,10,19] : No change
//             p
// case 2 : [0,2,34,22,10,19] : No change
//               p     min
// case 3 : [0,2,34,22,10,19] : No change , [0,2,10,22,34,19]

// case 4 : [0,2,10,22,34,19] : No change , [0,2,10,19,34,22]

// case 5 : [0,2,10,19,34,22] : No change , [0,2,10,19,22,34]