//Ejercicio 1: escribe un programa que liste el nombre de las propiedades del siguiente objeto utilizando las dos formas comentadas con anterioridad: { name : "David Rayy", sclass : "VI", rollno : 12 }
const objeto1 = {
    nombre: 'David Rayy',
    sclass : "VI",
    rollno: 12,
    mostrarNombre() {
    console.log(this.nombre);
    }
    }
    objeto1.mostrarNombre();
    console.log(objeto1.mostrarNombre);

    const objeto2 = {
        nombre: 'Alejandro',
        mostrarNombre: function() {
        console.log(this.nombre);
        }
        }
    objeto2.mostrarNombre();