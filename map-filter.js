const numbers = [3, 4, 5, 6, 7, 8];

// function square(element){
//     return element * element;
// }

// numbers.map(function(element,index,array){
//      console.log(element, index, array);
// })

// const square = element => element * element;
// or
// const square = x => x * x;

// const result = numbers.map(function(element){
//     return element * element;
// })

// shortly using arrow -->

// const result2 = numbers.map(x => x * x);

// const bigger  = numbers.filter(x => x >5)
// console.log(bigger);

const isThere = numbers.find(x => x > 5);
console.log(isThere);
