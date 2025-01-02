
//we know about

//console.log(2>1) true
//console.log(2>=1) true
//console.log(2<1) false
//console.log(2==1)
//console.log(2!=1)

// console.log("2">1) //true
// console.log("02">1) //true

//typescript doesn't allow us to compare two different datatypes

// console.log(null>0) //false
// console.log(null==0)//false 
// console.log(null>=0)//true

/*
    The reason is that an equality check == and comparisons > < >= <= work differently.
    Comparisons convert null to a number, treating it as 0
    That's why null>=0 is true and null>0 is false
*/

// console.log(undefined==0)//false
// console.log(undefined>0)//false
// console.log(undefined>=0)//false
// console.log(undefined<=0)//false

// === (strict check)

console.log("2"===2)//false
console.log("2"==2)//true


 /* 
    try to avoid these
    try to write production ready code that 
    are readable
 */
