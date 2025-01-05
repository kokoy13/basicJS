const profile = {
    'firstName' : 'Andika',
    'lastName' : 'Firansyah',
    'age' : 20,
}

/*Destructuring
    default value graduate is true
*/
const {firstName, lastName, graduate = true} = profile;

//Call Object
console.log(firstName +" "+ lastName);

//Manipulate Value
profile.age = 21;
console.log("Age : ", profile.age);

//Delete Properties
delete profile.age;
console.log(profile);