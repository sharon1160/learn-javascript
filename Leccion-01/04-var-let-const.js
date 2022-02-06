// var is not recommended

// bad practice
nombre = "Juan";
console.log(nombre);

// good practice
let nombre2;
nombre2 = "Pedro";
console.log(nombre2);

// unmodifiable
const apellido = "Perez";
// apellido = "Suarez"; // Assignment to constant variable.

/* **************** */
/*  GOOD PRACTICES  */
/* **************** */

// Camel notation (ex.)
// - nombreVariable
// - segundoNombre
// - variableNumericaNueva
let nombreCompleto = "Juan Perez";
console.log(nombreCompleto);

let x, y;
x = 10;
y = 20;
let z = x + y;
console.log(z);

// case sensitivity
let nombreCompleto2 = "Juan Perez";
let nombrecompleto2 = "Sara Gomez";
console.log(nombreCompleto2); // Juan Perez
console.log(nombrecompleto2); // Sara Gomez

// as the first letter in a variable can be
let a1nombre;
let _nombre;
let $nombre;
