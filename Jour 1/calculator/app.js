/* recuperation  des methodes mise a dispo dans operations/*.js*/
const sum = require('./operations/sum.js');
const substraction = require('./operations/substraction.js');
const multiplication = require('./operations/multiplication.js');
const division = require('./operations/division.js');
const modulo = require('./operations/modulo.js');

/* recuperation  des methodes mise a dispo dans operations.js */
const operations = require('./operations.js');

/* 
    transformation des argv recupéré en string
    dans un format utilisable par les methodes
    de operations.js
 */
const x = Math.round(process.argv[2]);
const y = Math.round(process.argv[3]);

console.log(`The sum of ${x} and ${y} is: ${sum(x,y)}`);
console.log(`The substraction of ${y} from ${x} is: ${substraction(x,y)}`);
console.log(`The multiplication of ${x} by ${y} is: ${multiplication(x,y)}`);
console.log(`The division of ${x} by ${y} is: ${division(x,y)}`);
console.log(`The modulo of ${x} divided by ${y} is: ${modulo(x,y)}`);

/* 
    transformation des argv recupéré en string
    dans un format utilisable par les methodes
    de operations.js
 */
const z = parseFloat(process.argv[2]);
const a = parseFloat(process.argv[3]);

console.log(`The sum of ${z} and ${a} is: ${operations.sum(z,a)}`);
console.log(`The substraction of ${a} from ${z} is: ${operations.substraction(z,a)}`);
console.log(`The multiplication of ${z} by ${a} is: ${operations.multiplication(z,a)}`);
console.log(`The division of ${z} by ${a} is: ${operations.division(z,a)}`);
console.log(`The modulo of ${z} divided by ${a} is: ${operations.modulo(z,a)}`);