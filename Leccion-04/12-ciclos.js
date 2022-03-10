// ###################### WHILE - DO WHILE ######################

// Exercise #1

let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
}
console.log("Fin ciclo while");

// Exercise #2

let contador2 = 0;

do {
  console.log(contador2);
  contador2++;
} while(contador2 < 3);

console.log("Fin ciclo do while");

// ###################### FOR ######################

// Exercise #3

// Mostrar numeros del 1 al 2
for(let i = 0; i < 3; i++) {
  console.log(i);
}

console.log("Fin ciclo for");

// Exercise #4

// Numeros pares
for(let j = 0; j < 11; j++) {
  if( j % 2 == 0 ) {
    console.log(j);
  }
}

// Exercise #5

// Factorial
let n = 4;
let result = 1;
for(let i = 1; i <= n; i++) {
  result *= i;
}
console.log("El factorial de " + n + " es " + result);

// Exercise #6

// Orden inverso
for(let j = 10; j > -1; j--) {
  console.log(j);
}

// Exercise #7

// Cuenta de 1 a 10, y a la vez, una cuenta inversa de 10 a 1.
for(let i = 0, j = 10; j > -1, i < 11; i++, j--) {
  console.log(i + " - " + j);
}

// Exercise #8

// Guess a four digit pin exactly 4 times
let pin = 7024;
for(let i = 0; i < 4; i++) {
  const input = prompt("Please make your guess:\n");
  if(input == pin) {
    alert("That was correct!");
    break;
  }
  else {
    alert("Sorry that was wrong.");
  }
}

// Exercise #9

// Check if two strings are palindromes
let str1 = "ama";
let str2 = "banana";

str1 = str1.toLowerCase()
str2 = str2.toLowerCase()

let mitad1 = Math.floor(str1.length/2)
let mitad2 = Math.floor(str2.length/2)
let flag1 = false;
let flag2 = false;

for (let i = 0; i < mitad1; i++) {
  if (str1[i] == str1[str1.length-1-i]) {
    flag1 = true;
  }
  else {
    flag1 = false;
    break;
  }
}

if (flag1 == false) {
  console.log("NO");
}
else {
  console.log("YES");
}

for (let i = 0; i < mitad2; i++) {
  if (str2[i] == str2[str2.length-1-i]) {
    flag2 = true;
  }
  else {
    flag2 = false;
    break;
  }
}

if (flag2 == false) {
  console.log("NO");
}
else {
  console.log("YES");
}

// ###################### LABELS ######################

// Note: Not recommended
inicio:
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0){
    console.log(i);
  }
  else {
    //continue; // continue to next iteration
    continue inicio; // continue after 'inicio' label
  }
  
}