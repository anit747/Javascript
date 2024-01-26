
 console.log("HelloWorld")

 //these are comments 
 /*
dds

dd

 */

// var , (let , const)ES6  
let a =  10
console.log(a)
console.log(typeof(a))

var b = 11.333;
console.log(typeof(b))
 var c  = "Anit"
 console.log(typeof(c))

 let required = true 
 console.log(typeof(required))

 //we cannot redeclare variable with let but possible with var 
// let c =  a+b (it didn't worked)
 var c  =  a+b 
//reassigning is allowed in let 
 console.log(c)
console.log(!required)

const d = "Anit";

d = "Chanages";

console.log(d)