/*
    Mainly two types of datatypes
    1)Primitive
    2)Non Primitive

    1)PRIMITIVE
    Total 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

    2)Non Primitive (Reference Type)
    Array, Objects, Functions


    Imp JS mein kbhi type define nhi krte
    JS => dynamically typed Language
    TypeScript => Statically typed Language 
*/

// Symbol kaise use krte hai
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId) //false

const bigNumber = 345654334785553487375903748758747475465n//add n at the last then the
                         // number will be a bigInt

const heros=["shaktiman","naagraj","doga"]

//we create objects in curly braces
let myObj={
    name:"hitesh",
    age: 22,
}

//how can we declare a function in JS

const myFunction=function(){
    console.log("Hello world!")
}

//kaise easily datatype pta kr skte hai
console.log(typeof heros)




