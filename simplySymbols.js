/*Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable 
sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with 
several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded 
by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.


Sample Test Cases

Input:"+d+=3=+s+"
Output:"true"

Input:"f++d+"
Output:"false"*/


function SimpleSymbols(str) { 

  const strAsArray = str.toLowerCase().split("");
  for (let i = 0; i < strAsArray.length; i++) {
    if (strAsArray[i] >= "a" && strAsArray[i] <= "z") {
      if (i === 0 || i === strAsArray.length) {
        return false;
      }
      
      if (strAsArray[i-1] !== "+" || strAsArray[i+1] !== "+") {
        return false;
      }
    }
  }
  
  return true; 
         
}
   
// keep this function call here 
SimpleSymbols(readline());
