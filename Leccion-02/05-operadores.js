let a = 3;
let b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

// ARITHMETIC

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicacion: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;
console.log("Resultado del residuo de la división: " + z);

z = a ** b;
console.log("Resultado del exponente: " + z);

// Pre-increment
z = ++a;
console.log(a); // 4
console.log(z); // 4

// Post-increment
z = b++;
console.log(b); // 3
console.log(z); // 2

// Pre-decrement
z = --a;
console.log(a); // 3
console.log(z); // 3

// Post-decrement
z = b--;
console.log(b); // 2
console.log(z); // 3

// ASSIGNMENT

let numero = 1;
numero += 3;
console.log("Numero: " + numero);

numero -= 2;
console.log("Numero: " + numero);

numero *= 8;
console.log("Numero: " + numero);

numero %= 2;
console.log("Numero: " + numero);

numero /= 2;
console.log("Numero: " + numero);

// OPERATORS PRECEDENCE

let x = 3,
  y = 2,
  w = 1;

w = x * y;
console.log(w); // 6

w = a + x * y;
console.log(w); // 9

let v = 4;
w = a + (x * y) / v;
console.log(w); // 4.5
