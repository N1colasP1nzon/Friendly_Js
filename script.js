let repetir = true;
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
}

















































































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
/* /* function su *//* mar(numero1, numero2){
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


