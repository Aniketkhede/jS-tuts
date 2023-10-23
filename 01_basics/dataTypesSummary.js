// There are two types of dataTypes in Js 
// 1. Primitive         => new copy means pass by value
// 2. Non-Primitive     => pass by reference means no new copy


// type of primitive dataTypes

// number, bigInt => let bigIntegerNumber = 39574394934921974132098298724n , string, boolean, undefined, null, symbol => unique always
let bigIntegerNumber = 999999395743949349219756787654674132098298724n
console.log(typeof bigIntegerNumber)
console.log(bigIntegerNumber);
const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId)

// Non-Primitive 

// Array, Object, function






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)=> string, boolean, number, bigInt, undefined, null, symbol | Heap (Non-Primitive) => array, object, function


let myYoutubename = "hi"