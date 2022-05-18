
//     // kebap-case (no permitido en JavaScript)
//     // const last-name = 'Doe';
//     // snake_case (recomendado en otros lenguajes como  Python)
//     const last_name = 'last_name';
//     // PascalCase (recomendado en JavaScript para las   clases)
//     const LastName = 'LastName';
//     // camelCase (recomendado en JavaScript para las    variables y funciones)
//     const lastName = 'lastName';
//    //Se pueden aplicar varias separadas por comas
//     const person = 'John Doe', carName = 'Volvo', price = 200;
// document.write(person);

// let x; //crea la variable
// x = 5; //Asigna un valor de tipo numerico entero. valor numerico
// x = "Texto/String" // Asigna valor, de tipo string y valor texto
// // Infinity
// const variable1 = 1/0;
// // NaN (Not a Number)
// const variable2 = parseFloat('prueba');
// let variable4;
// // undefined
// console.log(variable4);
// // error
// // console.log(variable_nodeclarada);
// const variable3 = null;
// // true
// console.log(null == undefined);
// // false
// console.log(null === undefined);

// var alert1 = 5;
// // permitido
// var alert1 = '';
// let alert2 = 5;
// // no permitido porque ya se declaró antes
// let alert5 = 6;
// alert2 = 4 //Se permite asignar de nuevo pero no declarar
// // miercoles 18 (Metodo indexOf)
const str2 = 'hola';
// 3
console.log(str2.indexOf('a'));
// 1
console.log(str2.indexOf('ol'));
// -1
console.log(str2.indexOf('r'));
const str3 = 'hola';
// 'ol'
console.log(str3.substring(1, 3));
// 'ola'
console.log(str3.substring(1));

const str4 = 'hola';
// h
console.log(str4.charAt(0));
// a
console.log(str4.charAt(3));
//
console.log(str4.charAt(4));
// h
console.log(str4[0]);
// a
console.log(str4[3]);
// undefined
console.log(str4[4]);

const array1 = [];
const array2 = [20, 3, 8];
const array3 = ['Carmen', 'Juan'];
// otra forma de declarar arrays
const array4 = new Array(20, 3, 8);
const array5 = new Array(null, undefined, '', 8);
const array7 = new Array('Carmen', 'Juan');
// Carmen
console.log(array7[0]);
// undefined
console.log(array7[2]);
const array8 = new Array('Carmen', 'Juan');

const array9 = new Array('Carmen', 'Juan');
array9[12] = 'Alejandro';
// [ 'Carmen', 'Juan', <1 empty item>, 'Alejandro' ]
console.log(array9);

const array10 = new Array('Carmen', 'Juan');
array10.length = 2;
// [ 'Carmen' ]
console.log(array10);

const date1 = new Date();
// Sun Apr 22 2018 12:37:06 GMT+0200 (Hora de verano romance)
console.log(date1);
// milisegundos en formato Unix
const milisegundos = new Date().getTime();
// fecha creada a partir del número de milisegundos en formato Unix
const date2 = new Date(milisegundos);

const a = parseInt('2');
// 2
const b = +'2';
// NaN
const c = +'d';
// 2
const d = Number('2');