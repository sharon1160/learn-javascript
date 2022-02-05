/* 
  TIPOS DE DATOS
*/

// Tipo de dato string
var nombre = "Sharon";
console.log(nombre);

// Tipo de dato numerico
var numero = 1000;
console.log(numero);

// Tipo de dato objeto
var objeto = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: "555165",
};
console.log(objeto);

// Asignando otro valor a la variable nombre
nombre = 10;
console.log(nombre);
console.log(typeof nombre);

// Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera); // false

// Tipo de dato function
function miFuncion() {}
console.log(typeof miFuncion); // function

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo); // Symbol

// Tipo clase es una function
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(typeof Persona); // function

// Tipo undefined
var x;
console.log(typeof x); // undefined

x = undefined; // se puede asignar undefined
console.log(typeof x); // undefined

// Tipo null = ausencia de valor
var y = null;
console.log(typeof y); // object
