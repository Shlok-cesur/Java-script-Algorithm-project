//String Anagram
//'hello' -> 'ellho'
//'shlok' -> 'loksh'

//condition
//length check (for both Strings)
// string 'hello'
//{ h:0,e:0,l:0,o;0}

function isAnagram(string1,string2){
    if(string1.length!=string2.length){
        return false;
    }
    let counter={}
    for (let letter of string1){
        counter[letter]=(counter[letter] || 0) + 1;
        console.log(counter[letter])
    }//for(let letter of string1){

    for(let  item of string2){
        if(!counter[items]){
            return false;
    }
        counter[items]-=1.

    }// for (let  item of string2){
    return true;
}//function isAnagram(string1,string2){
const check=isAnagram('hello','ellho');
console.log(check)