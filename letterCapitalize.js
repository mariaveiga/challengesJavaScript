/*Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter 
of each word. Words will be separated by only one space.

Sample Test Cases:

Input:"hello world"
Output:"Hello World"

Input:"i ran there"
Output:"I Ran There"*/

function LetterCapitalize(str) { 
    
    const strAsArray = str.split(" ")
    let result = []
    let capitalized =""

    for (let word in strAsArray){

       capitalized = strAsArray[word].toLowerCase()
       capitalized = capitalized.charAt(0).toUpperCase() + capitalized.substring(1)
       result.push(capitalized)
    }
    return result.join(" ")           
 }
  
// keep this function call here 
console.log(LetterCapitalize(readline()));
