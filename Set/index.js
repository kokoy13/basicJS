const mySet = new Set([1, 2, 3]);

console.log(mySet);

//Add value
mySet.add('Okee');
console.log(mySet)

//Call Value
for(const number of mySet){
    console.log(number)
}

mySet.forEach((value) =>{
    console.log(value)
})

//Delete Value
mySet.delete('Okee');
console.log(mySet)