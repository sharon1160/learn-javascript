// Exercise #1

let numero = 0;

if (numero == 1) {
  console.log("Es igual a 1");
} 
else if(numero == 2) {
  console.log("Es igual a 2");
} 
else if(numero == 3) {
  console.log("Es igual a 3");
} 
else {
  console.log("Es un número mayor a 3 o menor a 1");
}

// Exercise #2

let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 12) {
  estacion = "Invierno";
}
else if(mes == 3 || mes == 4 || mes == 5) {
  estacion = "Primavera";
}
else if(mes == 6 || mes == 7 || mes == 8) {
  estacion = "Verano";
}
else if(mes == 9 || mes == 10 || mes == 11) {
  estacion = "Otoño";
}
else {
  estacion = "None";
}

console.log("Estacion: " + estacion);

// Exercise #3

let hora = 0;
let saludo;

if(hora >= 6 && hora <= 11) {
  saludo = "Buenos dias";
}
else if(hora >= 12 && hora <= 18) {
  saludo = "Buenas tardes";
}
else if(hora >= 19 && hora <= 24) {
  saludo = "Buenas noches";
}
else if(hora >= 0 && hora <=5) {
  saludo = "Durmiendo";
}
else {
  saludo = "none";
}

console.log(saludo);