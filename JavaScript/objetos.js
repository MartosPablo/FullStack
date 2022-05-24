const persona = {
    nombre: 'Alejandro',
    'lugar de residencia': 'Madrid'
    };
    // Alejandro
    console.log(persona.nombre);
    // Alejandro
    console.log(persona['nombre']);
    // error
    console.log(persona["lugar de residencia"]);
    // en este caso son obligatorios los corchetes
    persona['lugar de residencia'] = 'Sevilla';
    // Sevilla
    console.log(persona['lugar de residencia']);
    const propiedad = 'nombre';
    // undefined porque busca la variable propiedad dentro del objeto persona
    console.log(persona.propiedad);
// Alejandro
console.log(persona[propiedad]);

const persona1 = {
    nombre: 'Carmen',
    apellidos: 'González',
    datos: {
    dirección: 'Sevilla',
    edad: "215 años"
    }
    };
    // Sevilla
    console.log(persona1.datos);
    // undefined
    console.log(persona1.datos.otrodato);

    const coche1 = { marca: 'Ford', modelo: 'Focus' };
const coche2 = { marca: 'Ford', modelo: 'Focus' };
// devuelve false porque no comparten referencia
console.log(coche1 == coche2);
// devuelve false porque no comparten referencia
console.log(coche1 === coche2);
// devuelve true porque el valor es el mismo y son de tipo string
console.log(coche1.modelo === coche2.modelo);
const coche3 = coche1;
// devuelve true porque comparten referencia
console.log(coche1 === coche3);

//El borrado de propiedades en objetos
const x1 = {
    peras: 3,
    fresas: 20
};
delete x1.fresas;
console.log(x1)

//Comprobar existencias
const x = {
    peras: 3,
    fresas: 20,
    // no se debe utilizar aquí la sintaxis de la función de flecha porque this en ese caso apuntaría al objeto global
    contar: function () {
    console.log(this.peras + this.fresas);
                        }
    };
    // se guarda en un array el nombre de todas las propiedades del objeto x
    const nombresPropiedades = Object.keys(x);
    // ["peras", "fresas", "contar"]
    console.log(nombresPropiedades);
    // true
    console.log(nombresPropiedades.includes('fresas'));

    const y = {
        peras: 3,
        fresas: 20,
        contar: function() {
        // no se puede utilizar aquí función de flecha porque this apuntaría al objeto global
        console.log(this.peras + this.fresas);
        }
    };
    // true
console.log('fresas' in y);

// creación de un objeto vacío
const pablo = {};
// agregando un método nuevo
pablo.saludar = () => {
    console.log('Hola');
};

const g = {
    manzanas: 3,
    aguacates: 20
    };
    for (let key in g) {
    // manzanas y aguacates (en distintas líneas)
    console.log(key);
    // string y string (en distintas líneas)
    console.log(typeof(key));
    // 3 y 20 (en distintas líneas)
    console.log(g[key]);
    // undefined y undefined porque busca la propiedad g.key (2 veces) y no egiste
    console.log(g.key);
    }

    const x9 = {
        peras: 3,
        fresas: 20
    };
    // claves es un array
    const claves = Object.keys(x9);
    // ["peras", "fresas"]
    console.log(claves);
    // bucle for...of para recorrer un array
    for (let key of claves) {
    // peras y fresas (en distintas líneas)
    console.log(key);
    // 3 y 20 (en distintas líneas)
    console.log(x9[key]);
    }
    // bucle for...in para recorrer un array
    for (let i in claves) {
    // 0 y 1 (en distintas líneas)
    console.log(i);
    // peras y fresas (en distintas líneas)
    console.log(claves[i])
    // 3 y 20 (en distintas líneas)
    console.log(x9[claves[i]]);
    }
   
   
    // obligatorio utilizar function para posteriomente crear objetos con new
const person = function(name) {
    // atributo público porque está declarado con this
    this.name = name || '';
    // atributo privado porque está declarado con const
    const lastname = 'Martines';
    // atributo privado porque está declarado con const
    const myName = this.name;
    // método privado porque está declarado con const
    const fullName = () => {
        return myName + ' ' + lastname;
        };
        // método público porque está declarado con this
        this.introduce = () => {
        return 'Hola, mi nombre es ' + fullName();
        };
        };
        const oscar = new person('Chango');
        // Óscar
        console.log(oscar.name);
        // Hola, mi nombre es Óscar González
        console.log(oscar.introduce());
        // undefined porque el atributo es privado
        console.log(oscar.lastname);
        // error porque el método no privado y no se puede acceder a él (es undefined) e invocar a undefined genera un error
        console.log(oscar.fullName());