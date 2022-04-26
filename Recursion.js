// Recursive : When Function call itself
// otherwise it will get called for infinite time
// If a Function call itself then there must be a end point 

let counter=1;
function demo(number) { // function with defintion
   if(counter > number){
      return;
   }
   
    console.log("I Love You"+counter)
   counter++;
    demo(number)
} // Function demo() { // function with defination
demo(10); // calling