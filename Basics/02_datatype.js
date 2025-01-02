"use strict"; //treat all JS codes as newer version

// alert(3+3) // abhi node mein use karne ka different tareeka
// we are using nodejs, not browser

console.log(3+3)

console.log("Punit")


let name = "Punit"//string
let age=18 //integer
let isLoggedIn=false //boolean

// number => 2^53
// bigint => jab number bara hai jaise trading website,stock website
// string => ""
// boolean => true/false
// null => ye datatype hai but ye ek standalone value bhi hai(ek representation hai empty value ka)
// undefined => value assign nhi hai
// symbol => jab hm bahut saare componenents bnate hai and hme ek individual component find krna hai then we use symbols
             //for uniqueness
// object => null ek object hai but undefined is a type


console.log(typeof "Punit")// string
console.log(typeof undefined)// undefined
console.log(typeof null==="object")// object
console.log(typeof age)// number

const x=BigInt(Number.MAX_SAFE_INTEGER)
console.log(x)