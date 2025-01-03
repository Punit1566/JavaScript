const name="punit"
const repoCount=50

// console.log(name+repoCount+"Value") // Outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//Prefer this it is easy and very clear to use

const gameName=new String('Punit-hc')// object ki tarah string aise create kr skte hai
// console.log(gameName)

// console.log(gameName[0])//P
// console.log(gameName.__proto__)//{}

// console.log(gameName.length)//7
// console.log(gameName.toUpperCase())//it will not change the original string

console.log(gameName.charAt(2))//n
console.log(gameName.indexOf('t'))//4

const newString=gameName.substring(0,4)//Puni
console.log(newString)

const anotherString=gameName.slice(-7,4)
console.log(anotherString)//uni
//if -8,4 then Puni

const newStringOne ="      Punit       "
console.log(newStringOne.trim());//Punit

const url = "https://punit.com/punit%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('punit'))

let arr=gameName.split('-');
console.log(arr)


//Practice Strings on mdn webdocs and chrome console

