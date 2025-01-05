//Menggabungkan Object
const obj1 ={
    firstName : 'Andika',
}
const obj2 ={
    lastName : 'Firansyah',
}

const fullName = {...obj1, ...obj2};

console.log(fullName)

//Menyalin Object
const newObj = {...fullName};
console.log(newObj)

//Menggabungkan Array
const arr = ['Apple', 'Mangga', 'Pisang']
const arr2 = ['Semangka', 'Pepaya', 'Durian']
const fruits = [...arr, ...arr2]
console.log(fruits)

//Menyalin Array
const newFruits = [...fruits]
console.log(newFruits)