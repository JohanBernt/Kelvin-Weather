
const celsius = 34; //set celsius to kelvin minus 273 as a constant
let fahrenheit = celsius * (9 / 5) + 32; // set fahrenheit to an equation of celsius but allow it to be a variable type to be changed later
fahrenheit = Math.floor(fahrenheit); //converts fahrenheit from decimal to integer
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100); //convert celsius to newton
newton = Math.floor(newton); // converts decimal to integer
console.log(`The temperature is ${newton} degrees Newton`);