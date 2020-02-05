 
/*Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.
Sample Test Cases
Input:"fun&!! time"
Output:"time"
Input:"I love dogs"
Output:"love"
*/

 
function LongestWord(sen) { 

    let longest_word = "";
    
    const words = sen.split(" "); 
    
    words.forEach(function(word) {
      
       word = word.replace(/[^A-Za-z]*/g, ''); 
        
      if (word.length > longest_word.length) {
         longest_word = word;
      }
     
    });
    
    console.log (longest_word); 
    
  }
  
  LongestWord("I love dogs");
