function apply(operation, ...args) {
    // kita bisa menambahkan kode lain sebelum operation dijalankan.
    
    return operation(...args)
  }
  
  function sum(a, b, c, d) {
    return a + b + c + d;
  }
  
  function discount(disc, value) {
    return value - ((disc / 100) * value);
  }
  
  const productPrice = apply(sum, 100, 100, 200, 200);
  const withDiscount = apply(discount, 25, productPrice);
  
  console.log('Product price:', productPrice); // Output: Product price: 400
  console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300

//TEKNIK CURRYING
function adjectivfy(adjective) {
    return function (noun) {
      return `${noun} ${adjective}.`;
    }
  }
  
  function multipleBy(x) {
    return function(y) {
      return x * y;
    }
  }
  
  const coolifier = adjectivfy('keren');
  const funnifier = adjectivfy('seru');
  
  const multipleByFive = multipleBy(5);
  
  console.log(coolifier('Dicoding')); // Output: Dicoding keren.
  console.log(funnifier('JavaScript')); // Output: JavaScript seru.
  console.log(multipleByFive(7)); // Output: 35
  console.log(multipleByFive(10)); // Output: 50