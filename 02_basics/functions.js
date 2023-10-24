// const user = {
//      username: "hitesh",
//      price:999,
//      welcomeMessage: function(){
//         console.log(this)
//         console.log(`${this.username}, welcome to website`);
//      }
// }

// console.log(user == this.user);

// user.welcomeMessage();
// console.log(" ")
// // console.log(this);


// function chai(){
//     console.log(this);
// }

// chai();

// const addNumbers = (num1,num2) => {
//     console.log(this);
//     return num2+num1
// }

// addNumbers();
// const addNumbers = function(num1,num2){
//     console.log(this);
//     return num2+num1
// }


// console.log(addNumbers(2,5))

// console.log(x);
// let x=10;

// myFuncExpr();  // Output: TypeError: myFuncExpr is not a function

// const myFuncExpr = function() {
//     console.log('Hello, world!');
// };

// myFuncExpr();  // Output: Hello, world!

// let thisExample ={
    
//     name: "Aniket",
//     dob: "15/01/2001",
//     thisOfFunc: console.log(this),
//     ArrowFunc: ()=>{
//         console.log(this)
//     }
// }

// function outer(){

//     console.log(this);
//     console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++")
//    let inner =  ()=>{
//         console.log(this);
//     }
//     inner();

    
// }

// outer();



// const addTwo = (num1,num2) => ({username:"Aniket"}) // => to return object it is necessary to wrap in parenthesis 

const addTwo = (num1,num2) => (num1 + num2) // this would work also num1 + num2 would work but in case of returning object it wont work