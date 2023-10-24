// filter return the array unlike forEach

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

const arrForFilter = nums.filter( (item)=> {
        return item>4;
})

const arrForForEach =  nums.forEach( (val,index,nums)=>{
     val>4 ? console.log(val): ;
} )

console.log(arrForForEach);