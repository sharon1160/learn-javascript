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