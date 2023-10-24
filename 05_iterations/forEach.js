
// forEach is a higher order function which takes input as call back function 

// call back function does not have any name

// forEach is primarily designed for arrays

const coding = ["js","ruby","cpp","python","javascript","swift"]
// for arrays
// first parameter => item
// second parameter => index
// third parameter => arr


// for set and maps
// first parameter => value
// second parameter => key
// third parameter => set or map

// for Objects
// only one parameter => ([key,value])=>{} 

coding.forEach( (item,index,arr)=>{ 
    //console.log(item,index,arr);
} )

// this type of structure is very common
// [{},{},{},.....]

const arrOfObjects = [
                        {
                            lang:"javascript",
                            file:"js"
                        },
                        {
                            lang:"python",
                            file:"py"
                        },
                        {
                            lang:"java",
                            file:"java"
                        }
                    ]


arrOfObjects.forEach( (val,index,arr)=>{
           for(const value in val){
            console.log(`In object  ${index+1} ${value} :${val[value]}`);
           }
} )
