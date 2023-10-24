// Immediately Invoked Function Expression(IIFE)

(function chai(name) {
    console.log(name);
    var localVar = "I'm local to this IIFE";
    console.log(localVar);  // Output: "I'm local to this IIFE"
})("aniker");

console.log(localVar);  // Output: ReferenceError: localVar is not defined


// function chai() {
//     var localVar = "I'm local to this IIFE";
//     console.log(localVar);  // Output: "I'm local to this IIFE"
// }

//  console.log(localVar);
// console.log(chai());