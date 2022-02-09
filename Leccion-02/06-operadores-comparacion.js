let a = 3,
  b = 2,
  c = "3";

// EQUAL

// Equal -> only check values
let z = a == b;
console.log(z); // false

// Strict equal -> check values and types
z = a === c;
console.log(z); // false

z = a == c;
console.log(z); // true

// DIFFERENT

// Different -> only check values
z = a != c;
console.log(z); // false

// Strict different -> check values and types
z = a !== c;
console.log(z); // true
