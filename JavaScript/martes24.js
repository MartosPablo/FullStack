// Ejercicio 1
let num = [0, 1, 2, 3, 4, 5];
// for clásico
for (let i = 0; i<num.length; i++) {
console.log(num,[i])
}
// for of
for (let nums of num) {
    console.log(num)
}

//Ejercicio 2
let colores = ["blanco", "verde", "amarillo"]
for (let color of colores) {
    console.log(color)
}
//Ejercicio 3
let colores2 = [];
for (let color of colores){
    colores2.push (color);
    console.log(colores2)
}
//Ejercicio 4
// let elementos1 = ["mar", "cielo", "rio", "lluvia","sol"]
// let elementos2 = ["oceano","mar","montaña","lluvia","sol"]
// let contador=0;
// for (const element of elementos1) {
// }
//     for (const element2 of elementos2) {
//     if (element==element2) {contador++}     
//     }
// console.log(contador)

//Ejercico 5
let ej5 = ["1","2","3","4","5"]
let ej2 = ej5.slice(1,4); {
console.log(ej2) }
