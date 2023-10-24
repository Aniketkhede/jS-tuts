// forof iterates over values 
// forin iterates over keys
// we cannot iterate over map using forin keys instead we use forof [key,value]
// In object we use forin  to iterate over keys then we use keys to get corresponding values 


const arr = [1,2,3,4,5,"aniket"]

for (const value in arr) {
   // console.log(value)
}

const map = new Map();
map.set("a","apple");
map.set("b","ball");
map.set("c","cat");
map.set("d","dog");

for(const [key,val] of map){
    //console.log(key,val);
}


const myObj = {
    a:"America",
    b:"brazil",
    c:"china",
    d:"denmark"
}

for(const values in myObj){
    console.log(values,);
}
