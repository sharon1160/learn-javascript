var nombre = "Ana";
var apellido = "Cespedes";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Lara";
console.log(nombreCompleto2);

// STRING CONTEXT
// left to right evaluation
var x = nombre + 219; // string + number = string
console.log(x); // Ana219

// parentheses take precedence
var y = nombre + (2 + 4);
console.log(y); // Ana6

// same as above
x = 2 + 4 + nombre; // number + number + string = string
console.log(x); // 6Ana

x = 0 + 8 + nombre;
console.log(x); // 8Ana

x = nombre + 4 * 8 + nombre;
console.log(x); // Ana32Ana

x = nombre + 4 + 8 + nombre;
console.log(x); // Ana48Ana

x = 4 + 8 + nombre;
console.log(x); // 12Ana
