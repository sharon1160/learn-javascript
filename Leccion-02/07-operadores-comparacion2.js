let a = 3,
  b = 2,
  c = "3";

let z = a < b;
console.log(z); // false

z = a <= b;
console.log(z); // false

z = a >= b;
console.log(z); // true

// Exercise #1

let numero = 10;

if (numero % 2 == 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

// Exercise #2

let age = 20;
let adulto = 18;

if (age >= adulto) {
  console.log("Es adulto");
} else {
  console.log("Es menor de edad");
}
