// ejercicio 2
let a = 2, b = 3, c = 7, d = 4

if (a + b > c + d) {
    document.write ("La suma de a+b es mayor que c+d")
}
else if (a+b < c+d) {
    document.write ("La suma de a+b es menor que c+d")
}
else {
    document.write ("Son iguales")
}
// ejercicio 3
let angulo1 = 45, angulo2 = 45, angulo3 = 90;
if (angulo1+angulo2+angulo3=== 180) {
    document.write ("<br> Es un triangulo")
}
else if (angulo1+angulo2+angulo3!==180){
    document.write ("<br> Esto no es un triangulo")
}
//ejercicio Marc
let hora = 10
if ((hora >=9)&&(hora<=14))
{
    document.write("<br> Sant Boi")
}
else if ((hora>=15)&&(hora<=20))
{
    document.write("<br> Castelldefels") 
}
else
{
    document.write("<br> No estoy en clase>")
}
//ejercicio 4
    let x = 2;
if (x %2 == 0) {
    document.write (" <br>Este numero es par")
}
else {
    document.write ("<br>Es impar")
}
//ejercicio 5
    let num1 = 9, num2 = 3, num3 = 5;
if ( num1 > num2 && num1 > num3) {
    console.log("el num1 es el mas grande")
}else if (num2 > num3){
    console.log("el num2 es el mas grande")
}else{
    console.log("el num3 es el mas grande")    
   }
// ejercicio 6
const i = 25;
if(i == 25) {
console.log("a");
}
else { 
    console.log("b");
}
//ejercicio 7
if(i == 25) {
console.log("a");
} //falta el else aqui para que este bien
if(i == 24) {
console.log("b");
}
else {
console.log("c");
}
