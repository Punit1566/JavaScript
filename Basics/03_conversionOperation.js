let score="33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN

// "33"=>33
//"33abc"=> NaN
//true => 1  false=>0


let isLoggedIn="Punit"

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/*
1 => true
0 => false
"" => false
"Punit" => true
5 => true
-5 => true
*/

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)