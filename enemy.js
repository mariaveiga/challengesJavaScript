/*Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable 
sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with 
several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded 
by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

Sample Test Cases

Input:"+d+=3=+s+"
Output:"true"

Input:"f++d+"
Output:"false"*/


function ClosestEnemy(gameboard) {
    
    let soldiersPosition = []
    let enemiesPosition = []
    let result = 0

    for (let i = 0; i < gameboard.length; i++) {
        if (gameboard[i] == 1) {
            soldiersPosition.push(i)
        }
        else if (gameboard[i] == 2) {
            enemiesPosition.push(i)
        }
    }
    if (enemiesPosition.length > 0) {
        result = Math.abs(soldiersPosition[0] - enemiesPosition[0])
        for (let i = 0; i < enemiesPosition.length; i++) {
            if (Math.abs((soldiersPosition[0] - enemiesPosition[i])) < result) {
                result = Math.abs(soldiersPosition[0] - enemiesPosition[i])
            }
        }
    }
    return result;
}
   
// keep this function call here 
console.log(ClosestEnemy(readline()));
