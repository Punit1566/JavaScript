const score = 400
// console.log(400)
const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))//decimal ke baad kitne numbers chahiye


const otherNumber=23.8966
// console.log(otherNumber.toPrecision(3))//23.9

const num1=123.8966
// console.log(num1.toPrecision(3))//124

const hundreds=10000000
// console.log(hundreds.toLocaleString('en-IN'))


// ++++++++++++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-4))//4
// console.log(Math.round(4.3))//4

// console.log(Math.ceil(4.2))//5
// console.log(Math.floor(4.9))//4

// console.log(Math.min(4,3,6,8))

console.log(Math.random());//it gives a random value in between 0 and 1


console.log(Math.floor((Math.random()*10)+1))//Random number between 1 and 10

//Suppose If we want a random number in a range of (L,R)

const L=10
const R=20
console.log(Math.floor(Math.random()*(R-L+1))+L)//Prints a random number between [L,R]
