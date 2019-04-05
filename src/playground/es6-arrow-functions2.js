//arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// }

// console.log(add(7, 3, 1, 8, 9));


//this keyword - no longer bound


//? 
// const user = {
//   name: 'Devon',
//   cities: ['Athens', 'New York', 'Commerce'],
//   printPlacesLived() {
//     return this.cities.map((city) => this.name + ' has lived in ' + city);
//   }
// }

// console.log(user.printPlacesLived());

// Challenge Area


const multiplier = {
  // numbers - array of numbers
  numbers: [1, 98, 34, 76, 83],
  // single number - multipleBy
  multiplyBy: 9,
  // multiply - return a new array where the number have been multiplied.
  multiply(){
    return this.numbers.map((num) => num + ' multipled by ' + this.multiplyBy + ' is ' + num * this.multiplyBy)
  }
}

console.log(multiplier.multiply([1,2,3]));