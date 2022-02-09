// Exercise #5 (NaN = Not a Number)

let edad = "14";
console.log(typeof edad, edad); // string "14x"
edad = Number(edad);
console.log(typeof edad, edad); // number NaN

if (isNaN(edad)) {
  console.log("La edad es " + edad);
} else {
  if (edad > 18) {
    console.log("La edad es mayor a 18");
  } else {
    console.log("La edad NO es mayor a 18");
  }
}

// Exercise #6 (decrements and increments)

let a = 10;
let b = 5;
let z = ++a + b++;
console.log(z);

// Exercise #7 (precedence)

let respuesta = a + b * 10 + 12 - 8 / 2 + 1;
console.log(respuesta);



