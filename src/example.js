//////////////////////////
// string templates
let myName = 'dave'
//console.log(`hello my name is ${myName}`)
///////////////////////////


//////////////////////////
// default arg values
function add(x,y=5){
  return x + y
}
//console.log(add(1,2))
//console.log(add(1))
///////////////////////////


/////////////////////////
// rest demo
function rest(firstArg, secondArg, ...args){
  console.log(firstArg)
  console.log(secondArg)
  console.log(args)
  console.log(args[0])
}
//rest(1,2,3,4,5,6)
///////////////////////////


///////////////////////////
// spread demo
let myArgArray = [3,4,5,6]
//rest(1,2,...myArgArray)
///////////////////////////

///////////////////////////
// arrow functions 
let myFunction = (input) => console.log(`hello ${input}`)
//myFunction("dave")
///////////////////////////


///////////////////////////
// deconstructiong
function deconstruct(){
  let myNumbers = [5,8]
  let [number1,number2] = myNumbers
  console.log(number1)
  console.log(number2)
}
//deconstruct()
///////////////////////////

///////////////////////////
// Classes
class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }	

  getAge(){
    return this.age
  }
}

function classTest(){
  let dave = new Person("name",14)
  console.log(dave.getAge())
  console.log(dave.age)
}
//classTest()
///////////////////////////


///////////////////////////
// Promises
var fs = require('fs')
function promiseFs(file){
  return new Promise((resolve,reject) => {
    fs.readFile(file, (err,data) => {
      if(err){
        reject(err)
      }
      resolve(data)
    })
  
  })
}

//promiseFs('./test.js').then(data=> console.log(data.toString())).catch(err => console.log(err))

/*
let myPromise = new Promise((resolve,reject) => {
    fs.readFile('./test.js', (err,data) => {
      if(err){
        reject(err)
      }
      resolve(data)
    })
})

myPromise.then(data => console.log(data.toString())).catch(err => console.log(err))
*/
