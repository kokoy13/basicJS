/* Map dapat menggunakan key dengan tipe data apa pun
tidak seperti object yang hanya menerima string*/

//Inizialite Map
const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);

//Add Propertie
productMap.set(1,150);
console.log(productMap);

//Call value
console.log(productMap.get(1))

//Delete Value
productMap.delete(1);
console.log(productMap)