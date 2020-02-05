/*Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should 
return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.*/

function SimpleAdding(num) { 

    let numArray =  [];
    let i=1;
      
    while (numArray.length < num)  {
      numArray.push(i); 
      i = i+1;
    }
    return numArray.reduce(function(a, b){ return a + b; });   
  }
     
  // keep this function call here 
  console.log(SimpleAdding(readline()));
