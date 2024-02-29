// import print from "./lib/modules";

// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// console.log();

// print("Bienvenido");
// greet("Maddison", new Date());

////////////////////////////////////////////////////////////////////////////////////////
// Declarando una clase

// class Asociado { }

////////////////////////////////////////////////////////////////////////////////////////
// Agregando propiedades

class Asociado {
    private identificacion: number
    private nombre: string
    
    protected edad?: number
    

    constructor(nombre: string){
        this.nombre = nombre
        this.identificacion = 10
    }

    public get leerIdentificacionAsociado() : number {
        return this.identificacion
    }

    
    public set escribirIdentificacionAsociado(valor : number) {
        this.identificacion = valor;
    }

    public get leerNombreAsociado() : string {
        return this.nombre
    }

    
    public escribirNombreAsociado(nombre : string, edad: number) {
        this.edad = edad;
        this.nombre = nombre;
    }
    

}

const asociado = new Asociado("Carolina")
//console.log(asociado);

// asociado.escribirNombreAsociado = "Alexis"
asociado.escribirNombreAsociado("Alexis", 12)
console.log(asociado);

asociado.escribirIdentificacionAsociado = 24
console.log(asociado);

//console.log(asociado.leerIdentificacionAsociado);

