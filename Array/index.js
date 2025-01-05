const arr = ['1','2','3','4','5'];

//Manipulate Index Value Array
arr['1'] = '10';
console.log(arr);

//add new value in array(first)
arr.unshift('0');
console.log(arr);

//Add new value in array(last)
arr.push('9');
console.log(arr);

//delete first value in array
arr.shift();
console.log(arr);

//delete last value in array
arr.pop();
console.log(arr);

//delete just value index(empty value)
delete arr[1];
console.log(arr);

//delete value and index
arr.splice(1,1); //delete one index from index-1
console.log(arr);

//Desctructring
const [first,second] = arr;
console.log(first);

//Reverse Array
arr.reverse();
console.log(arr);

//Sort Array
arr.sort();
console.log(arr);