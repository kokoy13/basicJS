//For In biasanya digunakan untuk looping pada object
const person = { 
    name: 'Fulan', 
    origin: 'Bandung', 
    birthYear: 2024 
};

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}