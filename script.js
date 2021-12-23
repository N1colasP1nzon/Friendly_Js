class Cliente {
    constructor(nombre, apellido, dni, email,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
    
    }

   /*  incrementarSueldo(dineroAIncrementar) {
        this.sueldo += dineroAIncrementar;
    }

    decrementarSueldo(dineroADecrementar) {
        this.sueldo -= dineroADecrementar;
    } */
}

let clientes;
let formCliente = document.getElementById('formCliente')
let divClientes = document.getElementById('divClientes')
let parrafoError = document.getElementById('parrafoError')


if(localStorage.getItem('clientes')) {
    clientes = JSON.parse(localStorage.getItem('clientes'))
} else {
    clientes = []
}

//Obtengo informacion del formulario 
formCliente.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombreCliente = document.getElementById("nombre").value
    let apellidoCliente = document.getElementById("apellido").value
    let dniCliente = document.getElementById("dni").value
    let emailCliente = document.getElementById("email").value
   /*  let sueldoCliente = document.getElementById("sueldo").value */

    let objetoCliente = new Cliente(nombreCliente, apellidoCliente, dniCliente, emailCliente, /* sueldoCliente */)
    
    clientes.push(objetoCliente)

    localStorage.setItem('clientes', JSON.stringify(clientes))

    formCliente.reset()
})

//Muestro informacion del storage a traves de un boton
document.getElementById('botonClientes').addEventListener('click', () => {
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'))

    if(divClientes.children.length == 0) {
        clientesStorage.forEach((clienteArray, indice) => {
            divClientes.innerHTML += `
                <div class="card" id="cliente${indice}" style="width: 18rem;margin: 6px">
                    <div class="card-body">
                        <h5 class="card-title">${clienteArray.nombre} ${clienteArray.apellido}</h5>
                        <p class="card-text">${clienteArray.dni}</p>
                        <p class="card-text">${clienteArray.email}</p>
                        
                        <button id="boton${indice}" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            
            `
        }) 

        //Añado el evento eliminar a las cards
        clientesStorage.forEach((clienteArray, indice) => {
            document.getElementById(`boton${indice}`).addEventListener('click', () => {
                document.getElementById(`cliente${indice}`).remove()
                clientes.splice(indice, 1)
                localStorage.setItem('clientes', JSON.stringify(clientes))
                console.log(`El cliente ${clienteArray.nombre} ha sido eliminado`)
            })
        })

    } else {
        parrafoError.innerText = "Por favor deje de dar click a el boton Suscribirse como cliente"
    }

})
































/* let boton = document.getElementById("boton1")
let botonInput = document.getElementById("botonInput")
let inputColor = document.getElementById("inputColor")
boton.addEventListener('click', () => {
    console.log("hola desde boton")
})
botonInput.addEventListener('click', ()=> {
    let inputText = document.getElementById("inputTexto").value
    console.log(inputText)
})
inputColor.addEventListener('change ', (e) => {
    console.log(e.target.value)
    document.body.style.backgroundColor = e.target.value
}) */
/* let inputTexto = document.getElementById("inputTexto")
inputTexto.addEventListener('input', (e) => {
    console.log(e)
}) */
/* class Producto {
    constructor(modelo, marca, precio) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;

    }
}

const auto1 = new Producto("Megan", "Renault", 120000)
const auto2 = new Producto("Logan", "Chevrolet", 20000)
const auto3 = new Producto("Hilux", "Toyota", 5000000)

let autos = [auto1, auto2, auto3]
let divAutos = document.getElementById("divAutos")
let botonProducotos = document.getElementById("botonProductos")

botonProducotos.addEventListener('click', () => {
    autos.forEach((autoEnArray, indice) => {
        divAutos.innerHTML += `
        <div class="card" id="Producto${indice}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${autoEnArray.modelo}<h5>
                <p class="card-text">${autoEnArray.marca}</p>
                <p class="card-text">${autoEnArray.precio}</p>
                <button class="btn btn-danger" id="boton${indice}">Comprar</button>
            </div>
        </div>
        
        ` */
        /*         console.log(autoEnArray)
                console.log(indice) */
/*     })
}) */

/* class Registro {
    constructor(correo, contraseña) {
        this.correo = correo;
        this.contraseña = contraseña;
    }
}
const registro1 = new Registro("nicolaspinzon3@gmail.com", "prueba1")
const registro2 = new Registro("michaeljacsok@gmail.com", "prueba2")
const registro3 = new Registro("usaintbold@gmail.com", "prueba3")

let registrosArray = [registro1, registro2, registro3]
let divregistros = document.getElementById("divregistros")
registrosArray.forEach(registroEnArray => {
    divregistros.innerHTML =
        `<div>
        <p> correo: ${registroEnArray.correo} </p>
        <p> contraseña: ${registroEnArray.contraseña} </p>
    </div> `
}) */

/* let inputText = document.getElementById("inputText")
let parrafoInput1 = document.getElementById("p1")

inputText.addEventListener('input', (e) => {
    console.log(e.target.value)
    parrafoInput1.innerText = e.target.value
}) */
/* let inputColor = document.getElementById("inputColor")

inputColor.addEventListener ('input', (e) => {
    console.log(e.target.value)
    document.body.style.backgroundColor = e.target.value
})
 /* let dia = parseInt(prompt("Ingrese su dia de nacimiento: "))
let mes = parseInt(prompt("Ingrese su mes de nacimiento: "))

if (dia >= 22 && dia <= 31 && mes == 12 || dia >= 1 && dia <= 20 && mes == 1) {
    alert("Tu signo zodiacal es CAPRICORNIO");
} else 
    if (dia >= 21 && dia <= 31 && mes == 1 || dia >= 1 && dia <= 19 && mes == 2) {
    alert("Tu signo zodiacal es ACUARIO");
} else 
    if (dia >= 20 && dia <= 29 && mes == 2 || dia >= 1 && dia <= 20 && mes == 3) {
    alert("Tu signo zodiacal es PISCIS");
} else 
    if (dia >= 21 && dia <= 31 && mes == 3 || dia >= 1 && dia <= 19 && mes == 4) {
    alert("Tu signo zodiacal es ARIES");
} else 
    if (dia >= 20 && dia <= 30 && mes == 4 || dia >= 1 && dia <= 20 && mes == 5) {
    alert("Tu signo zodiacal es TAURO");
} else 
    if (dia >= 21 && dia <= 31 && mes == 5 || dia >= 1 && dia <= 21 && mes == 6) {
    alert("Tu signo zodiacal es GÉMINIS");
} else 
    if (dia >= 22 && dia <= 30 && mes == 6 || dia >= 1 && dia <= 21 && mes == 7) {
    alert("Tu signo zodiacal es CANCER");
} else 
    if (dia >= 22 && dia <= 31 && mes == 7 || dia >= 1 && dia <= 21 && mes == 8) {
    alert("Tu signo zodiacal es LEO");
} else 
    if (dia >= 22 && dia <= 31 && mes == 8 || dia >= 1 && dia <= 22 && mes == 9) {
    alert("Tu signo zodiacal es VIRGO");
} else 
    if (dia >= 23 && dia <= 30 && mes == 9 || dia >= 1 && dia <= 22 && mes == 10) {
    alert("Tu signo zodiacal es LIBRA");
} else 
    if (dia >= 23 && dia <= 31 && mes == 10 || dia >= 1 && dia <= 21 && mes == 11) {
    alert("Tu signo zodiacal es ESCORPIO");
} else 
    if (dia >= 22 && dia <= 30 && mes == 11 || dia >= 1 && dia <= 21 && mes == 12) {
    alert("Tu signo zodiacal es SAGITARIO");
} else {
    alert("has ingresado una fecha erronea");
} */































/* let arrayPrueba = [true, 50, "Hola", 5]
let arrayPrueba1 = ["Saldar", 10, "Prueba"]

arrayPrueba.push("Chao")
console.log(arrayPrueba.concat(arrayPrueba1))

for(let i =0; i < arrayPrueba.length; i++){
    console.log(arrayPrueba[i])
}
/* --------------------------------------------------------------------------------------------------------------------------------------- */
/* class persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

const persona1 = new persona("Nicolas", "Pinzon", 40)
const persona2 = new persona("Neyder", "Paez", 24)
const persona3 = new persona("Paez", "Pinzon", 25)

let personas = [persona1, persona2, persona3]

for(let personaIterador of personas){
    for(let atributo in personaIterador){

        console.log(personaIterador[atributo])
    }
}

console.log(personas.filter(personaABuscar => personaABuscar.edad >= 24))

console.log(personas.map(personasAModificar => personasAModificar.nombre)) */

/* -------------------------------------------------------------------------------------------------------------------------------------- */
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
alert("El precio del producto con IVA es " + calculariva(producto1))

let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))

function sumar(numero1, numero2) {
    console.log(numero1 + numero2)
}
sumar(numero1, numero2) */
/* class TiendaGolocinas {

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