// linear search algorithm
const users=[{username:"shlokmishra",email:"shlokmishra@gmail.com"},
            {username:"alaukikmishra",email:"alaukikkmishra@gmail.com"},
             {username:"ommishra",email:"ommishra@gmail.com"},
            {username:"jaimishra",email:"jaimishra@gmail.com"},
            ] // linear search algorithm - const user=[{username:"shlokmishra",email:"shlokmishra@gmail.com"}]

function isuserExit(array,val){

    for(let item of array){
        if(item['username']=== val){
            return true;
        }
    } // for(let item of array){
    return false;
    
} // function isuserExit(array,val){
const res=isuserExit(users,"shlokmishra")
console.log(res)