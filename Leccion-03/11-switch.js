// Exercise #4

let numero = 4;
let numeroTexto = 'Valor desconocido';

switch (numero) {
  case 1:
    numeroTexto = 'Número uno';
    break;
  case 2: 
    numeroTexto = 'Numero dos';
    break;
  case 3: 
    numeroTexto = 'Numero tres';
    break;
  case 4: 
    numeroTexto = 'Numero cuatro';
    break;
  default:
    numeroTexto = 'None';
}

console.log(numeroTexto);

// Exercise #5

let mes = 4;
let estacion = 'Estacion desconocida';

switch (mes) {
  case 1: case 2: case 12:
    estacion = 'Invierno';
    break;
  case 3: case 4: case 5:
    estacion = 'Primavera';
    break;
  case 6: case 7: case 8:
    estacion = 'Verano';
    break;
  case 9: case 10: case 11:
    estacion = 'Otoño';
    break;
  default:
    estacion = 'Valor incorrecto';
}

console.log("Estacion : "+estacion);