const a=4;
switch (a) {
    case 1:
    console.log('El valor de a es 1');
    break;
    case 2:
    console.log('El valor de a es 2');
    break;
    case 3,4:
    console.log('El valor de a es 3 ó 4');
    break;
    default:
    console.log('El valor de a es desconocido');
    }

    for (let i = 0; i < 5; i++) {
        // 0, 1, 2, 3, 4 (en distintas líneas)
        console.log(i);
        }
        const array = ['En', 'un', 'lugar', 'de', 'la', 'mancha'];
        const len = array.length;
        // recorre un array mediante un for clásico
        for (let i = 0; i < len; i++) {
        // En, un, lugar, de, la, mancha (en distintas líneas)
        console.log(array[i]);
        }
        170
// Ejercicio 8
for(let i=1; i < 51; i++){
    console.log (i);
}
// Ejercicio 9
for (let f=0; f < 11; f++){
    document.write("<br>", "5x" + f + "=" + 5*f)
    
} 
document.write("<br>")
// Ejercicio 10 
var f = prompt("Escribe una palabra","Escribe aqui");
for (let i=0;i<10;i++){
    document.write(f +"<br>")  
}
//Ejercicio 11
var num = prompt("Pon un numero", "un numero")
for (let i=num ; num>-1 ; --num) {

document.write(num + ", ")}