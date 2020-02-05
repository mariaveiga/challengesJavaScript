/* Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

Sample Test Cases:

Input:"hello*3"
Output:"Ifmmp*3"

Input:"fun times!"
Output:"gvO Ujnft!" */

function LetterChanges(str) { 

    let nextChar = [];
    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'];
    
    for (let i = 0; i < str.length; i ++){
        if (str[i].toLowerCase() == 'z') {
            nextChar.push('A');
        } 
        else if (alph.includes(str[i])) {
            nextChar.push(String.fromCharCode(str.charCodeAt(i)+1));
        }
        else {nextChar.push(String.fromCharCode(str.charCodeAt(i)));
        }
    }
    
    const result = nextChar.join('').replace(/[aeiou]/g, function (joined) {
        return joined.toUpperCase();
    });
    
    return result
    }
       
// keep this function call here 
console.log(LetterChanges(readline()));
