
    // kebap-case (no permitido en JavaScript)
    // const last-name = 'Doe';
    // snake_case (recomendado en otros lenguajes como  Python)
    const last_name = 'last_name';
    // PascalCase (recomendado en JavaScript para las   clases)
    const LastName = 'LastName';
    // camelCase (recomendado en JavaScript para las    variables y funciones)
    const lastName = 'lastName';
   //Se pueden aplicar varias separadas por comas
    const person = 'John Doe', carName = 'Volvo', price = 200;
document.write(person);

let x; //crea la variable
x = 5; //Asigna un valor de tipo numerico entero. valor numerico
x = "Texto/String" // Asigna valor, de tipo string y valor texto
// Infinity
const variable1 = 1/0;
// NaN (Not a Number)
const variable2 = parseFloat('prueba');
let variable4;
// undefined
console.log(variable4);
// error
// console.log(variable_nodeclarada);
const variable3 = null;
// true
console.log(null == undefined);
// false
console.log(null === undefined);

var alert1 = 5;
// permitido
var alert1 = '';
let alert2 = 5;
// no permitido porque ya se declaró antes
let alert5 = 6;
alert2 = 4 //Se permite asignar de nuevo pero no declarar