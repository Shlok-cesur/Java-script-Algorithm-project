// Checking square in another array
// array1=[1,2,3,4],array2=[1,9,4,16] - case1
// array1=[1,2,4,2],array2=[1,4,4,16] - case2

// map1={1:1,2:2,4:1}
// map2={1:1,4:2,16:1}

function checkSquare(array1,array2){
    let map1={};
    let map2={};

    for (item of array1){
     map1[item]=(map1[item] || 0) + 1;
    }
    console.log("map1",map1);
    for (item1 of array2){
     map2[item1]=(map2[item1] || 0) + 1;
    }
    console.log("Map2",map2);

    for(let key in map1){
     console.log("key",key)
     if(!map2[key * key]){    // obj keys compare in term of square
      return false;
     }
     if(map1[key] !== map2[key * key]){ // value compare
      return false;
     }
    } // for(let key in map1){

 return true;
} // function checkSquare(array1,array2){

const res=checkSquare([1,2,4,2],[1,4,4,25]);
console.log(res)