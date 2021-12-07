class TiendaGolocinas {

    constructor(nombre, apellido, edad, peso, altura, marca, precio, color, stock){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.peso = peso
    this.altura = altura
    this.marca = marca
    this.precio = precio
    this.color = color
    this.stock = stock
    this.saludar = () => console.log (`¿Que se dice parce, como vamos? Soy ${this.nombre}`)
    this.dulces =() => console.log (`me gustan el ${this.marca}`)
    }
}
const persona1 = new TiendaGolocinas("Nicolas", "Pinzon", 25, 84, 1.85)
const persona2 = new TiendaGolocinas("Alejandro", "Naranjo", 27, 80, 1.75)
const persona3 = new TiendaGolocinas(prompt("Ingrese un Nombre"), prompt("Ingrese un apellido"), parseInt(prompt("Ingrese su Edad")), parseFloat(prompt("Ingrese su peso")), parseFloat(prompt("Ingrese su altura")))

persona1.saludar()
persona2.saludar()
persona3.saludar()

const producto1 = new TiendaGolocinas("Chocolate", 120, "Roja", 100)

producto1.dulces()
/* console.log(producto1.stock)
producto1.aumentarStock(50)
console.log(producto1.stock)
producto1.disminuirStock(30)
console.log(producto1.stock)  */






























/* let producto1 = parseFloat(prompt("Ingrese un numero"))
const IVA = 1.21

function multiplicarporIVA(producto1, IVA) {
    return producto1 * IVA
}

function calculariva(producto1) {
    console.log(IVA)
    let productoconIVA = multiplicarporIVA(producto1, IVA)
    return productoconIVA
}
console.log(IVA)
console.log(producto1)
console.log(producto1 * (IVA))
alert((producto1 * (IVA)))

let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))

function sumar(numero1, numero2) {
    console.log(numero1 + numero2)
}
sumar(numero1, numero2) */


/* class Banco {
    constructor(credito, banco, cuota, ) {
        this.credito = credito;
        this.banco = banco;
        this.cuota = cuota;
    }

    calcularCuotas() {
        let cuotas = this.calcularPrestamo(this.banco, this.credito) / this.cuota
        return cuotas
    };

    calcularPrestamo(banco, credito) {
        let interes;
        switch (banco) {
            case "santander":
                interes = 1.20;
                break;
            case "macro":
                interes = 1.30;
                break;
            case "provincia":
                interes = 1.70;
                break;
            case "nacion":
                interes = 1.50;
                break;
            case "galicia":
                interes = 2.20;
                break;
            default:
                console.log("banco no esta");
        }
        return credito * interes;
    }
}
function capturar() {
let creditoCapturar = parseInt(prompt('ingrese monto de credito'));
let bancoCapturar = prompt('ingrese su banco').toLowerCase();
let cuotaCapturar = parseInt(prompt('ingrese la cantidad de cuotas'));

const nuevoCredito = new Banco(creditoCapturar, bancoCapturar, cuotaCapturar);
const cliente2 = new Banco(35000, "macro", 12)

    agregar(nuevoCredito, cliente2);
}


function agregar(cliente, usuario) {

    console.log('sus cuotas seran de : $' + cliente.calcularCuotas())

    console.log('sus cuotas seran de : $' + usuario.calcularCuotas())

}; 
capturar()  */




























/* let repetir = true;
let acumulador = 0;
let cantidadNotas =0;

while(repetir){
    let nota = parseInt(prompt("Ingrese una nota "))
    if(nota >=1 && nota <=10) {
        acumulador +=  nota
        cantidadNotas++;

    } else{
        alert("Nota no valida")
    }
    let continuar = prompt("desea ingresar otra nota?").toLowerCase()
    
    if(continuar == "no"){
        repetir=false;
    }
}
alert(`El promedio es ${acumulador / cantidadNotas}`)

let ingreso =prompt("Ingrese un nombre")
while(ingreso != "ESC"){
    switch(ingreso){
        case "Martin":
            alert("Hola Martin");
            break;
        
        case "Alejandro":
            alert("Hola Martin");
            break;

        case "Julian":
            alert("Hola Julian");
            break;

        default:
            alert("Quien eres");
            break;

    }
    ingreso = prompt("Ingresar un nombre");
} */
/* let nombre = prompt("Ingrese su nombre:")
while(nombre = "Nicolas")
{
switch(nombre)

{
    case "Julian":
        alert("Hola Julian")
        break

    case "Alejandro":
        alert("Hola  Alejandro")
        break

    case "Nicolas":
        alert("Hola Nicolas")
        break

}
}
/* /* function su */
/* mar(numero1, numero2){
    console.log(numero1 + numero2)
}
sumar(1,4)
sumar(5,7)
sumar(10.5,21) */
/* let numero = parseInt (prompt("Igrese un numero: "))

if(numero === 1000){
    alert("El numero ingresado es 1000")
}else{
    alert("El numero ingresado no es 1000")
}

let nombre = prompt("Ingrese su Nombre:")
let apellido = prompt("Ingrese su apellido:")
let codigo = parseInt (prompt("Ingrese su Codigo:"))

if(nombre == "Nicolas" && apellido == "Pinzon" && codigo == "123212"){
    alert("Bienvenido Señor")
}else{
    alert("No detectamos sus datos en la base, por favor reintente")
} 

let numero1 = parseInt (prompt("ingrese un numero"))

if(numero1 >= 50 && numero1<=100) {
    alert("Excelente ingreso")
}
else{
    alert("el numero ingresado no es correcto")
} */

/* Variables */

/* let numero1 = parseFloat( prompt("Igrese un numero: "))
let numero2 = parseFloat( prompt("Ingrese un segundo numero: "))
alert(numero1+numero2)

let nombre = prompt("Ingrese su nombre: ")
let apellido = prompt("Ingrese su apellido")
alert(`${nombre} ${apellido}`)

let nombre1 = "Hola Nicolas Pinzon"
console.log(nombre1)

let numero3 = parseInt( prompt("Igrese un numero: "))
let numero4 = parseInt( prompt("Ingrese un segundo numero: "))
console.log(numero3*numero4) */

/* Consucionales */

/* let numero = 4

if (numero == 5) {
    console.log("Numero es igual a 5")
} else{
    console.log("Numero no es igual a 5")
}

if (numero % 2 == 0){
    console.log("Numero es par")
} else{
    console.log("El numero no es par")
} */

/* let producto = 1000 */

/* if(producto > 500){
    console.log("Product mayor a 500")
} else if(producto < 200){
    console.log("Producto menor a 200")
} else{
    console.log("Producto es mayor o igual a 200 o menor o igual a 500")
} */
/* 
Variables booleanas */

/* let producto = 600
let esMayorA500 = (producto > 500)
let esMenorA200 = (producto < 200) */

/* estricamente igual:

if (1 === "1")

estrictamente distinto de: 

if (1 !== "1") */