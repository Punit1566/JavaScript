let score="33"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber=Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber) //NaN

// "33"=>33
//"33abc"=> NaN
//true => 1  false=>0


let isLoggedIn="Punit"

let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
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
// console.log(stringNumber)
// console.log(typeof stringNumber)


// ****************************** Operations ***********************************

let value=3
let negValue=-value
// console.log(negValue)
// console.log(2+2)//4
// console.log(2-2)//0
// console.log(2*2)//4
// console.log(2**2)//4
// console.log(2/3)//0.6666666666666666
// console.log(2%3)//2

let str1="hello"
let str2="Punit"
let str3=str1+str2
// console.log(str3)

// console.log(typeof("1"+2)) //string
// console.log(typeof(1+"2")) //string
// console.log("1"+2+2) //122
// console.log(1+2+"2")//32

// console.log(+true)//1
// console.log(+"")//0

let num1,num2,num3
num1=num2=num3=2+2
// console.table([num1,num2,num3])

// pre and post increment
let gameCounter=100
gameCounter++
console.log(gameCounter)
++gameCounter