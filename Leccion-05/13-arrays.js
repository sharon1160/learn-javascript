// let autos = new Array('BMW','Mercedes Benz','Volvo'); // old way

// ################################# STATEMENT #################################

const autos = ['BMW','Mercedes Benz','Volvo']; 
// We use 'const' because the memory reference of the new variable will not be changed.

console.log(autos);
console.log(autos[0]);

// ################################# PRINT #################################

for (let i = 0; i < autos.length; i++) {
  console.log(i + " : " + autos[i]);
}

// ############################# MODIFY ELEMENTS #############################

autos[1] = 'MercedesBenz';
console.log(autos);

// ############################# ADD ELEMENTS #############################

autos.push("Audi");
console.log(autos); // ["BMW", "MercedesBenz", "Volvo", "Audi"]
console.log(autos.length);

autos[autos.length] = 'Cadillac';
console.log(autos); // ["BMW", "MercedesBenz", "Volvo", "Audi", "Cadillac"]

autos[6] = 'Porche'; // Not recommended
console.log(autos); // ["BMW", "MercedesBenz", "Volvo", "Audi", "Cadillac", empty, "Porche"]

// ############################# is it an array? #############################

console.log(typeof autos) // object
console.log(Array.isArray(autos)); // true
console.log(autos instanceof Array); // true

// ############################# EXERCISES #############################

// Exercise #1 : Largest element
const lista = [3, 4, 7, 8, 1]
let mayor = lista[0];

for(let i = 1; i < lista.length; i++) {
  if(mayor < lista[i]) {
    mayor = lista[i];
  }
}
console.log(mayor);

// Exercise #2 : Reverses a list

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp;
for(let i = numbers.length - 1; i >= Math.floor(numbers.length/2); i--) {
  temp = numbers[i];
  numbers[i] = numbers[numbers.length - 1 - i];
  numbers[numbers.length - 1 - i] = temp;
}
console.log(numbers);

// Exercise #3 : Checks whether an element occurs in a list

let element = -3;
let v = [12, 3, 4, 56, 67];
let esta = false;

for (let i = 0; i < v.length; i++) {
  if(element === v[i]) {
    esta = true;
    break;
  }
}
console.log(esta);

// Exercise #4 : Returns the elements on odd positions in a list

for (let i = 0; i < v.length; i++) {
  if( i % 2 != 0 ) {
    console.log(i +' : ' + v[i]);
  }
}