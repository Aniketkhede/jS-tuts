// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values

// "0", "false", " ",[], {}, function(){}, 

// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log("object is empty");
// }

// Nullish coalescing Operator(??): null undefined

let val1 ; 
val1 = 5 ?? 10;
console.log(val1)
val1 = null ?? 10;
console.log(val1)
val1 = null ?? 10 ?? 20;
console.log(val1)


// Ternary Operator