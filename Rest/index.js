function myFunc(number, ...manyMoreArgs) {
    console.log('number', number);
    console.log('manyMoreArgs', manyMoreArgs);
    console.log(manyMoreArgs.length);
  }
  
  myFunc('one', 'two', 'three');

  const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */