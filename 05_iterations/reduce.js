const nums = [1,2,3,4,5,6,7,8,9,10]
const Obj = [{
    a:"apple",
    b:"ball"
},{
    c:"cat",
    d:"dog"
}]

// const arr = Object.entries(Obj).map(([key,value])=>{
//     return value
// })
// const tr = Object.assign({},...arr)

// console.log(arr);
// console.log(tr);

const Total = nums.reduce((acc,currVal)=>{
    return acc+currVal;
},0)

console.log(Total);