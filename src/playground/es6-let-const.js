var nameVar = 'Devon ';
var nameVar = 'Courtney';
console.log('nameVar', nameVar);

let nameLet = 'Rylee';
nameLet = 'AJ'
console.log('nameLet', nameLet);

const nameConst = 'DevonCourt';
// const nameConst = 'doobie'
console.log('nameConst', nameConst);

// Block Scoping
var fullName = 'Courtney Anderson';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
