class Cliente {
    constructor(nombre, apellido, dni, email, sueldo, familia , alquiler) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.sueldo = sueldo;
        this.familia = familia;
        this.alquiler = alquiler
    }
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
    let sueldoCliente = document.getElementById("sueldo").value
    let familiaCliente = document.getElementById("familia").value
    let alquilerCliente = document.getElementById("alquiler").value

    let objetoCliente = new Cliente(nombreCliente, apellidoCliente, dniCliente, emailCliente, sueldoCliente, familiaCliente, alquilerCliente)
    
    clientes.push(objetoCliente)

    localStorage.setItem('clientes', JSON.stringify(clientes))

    formCliente.reset()
})

//Muestro informacion del storage a traves de un boton
document.getElementById('botonliquidacion').addEventListener('click', () => {
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'))

    if(divClientes.children.length == 0) {
        clientesStorage.forEach((clienteArray, indice) => {
            divClientes.innerHTML += `
                <div class="card" id="cliente${indice}" style="width: 18rem;margin: 6px">
                    <div class="card-body">
                        <h5 class="card-title">${clienteArray.nombre} ${clienteArray.apellido}</h5>
                        <p class="card-text">${clienteArray.dni}</p>
                        <p class="card-text">${clienteArray.email}</p>
                        <p class="card-text">Sueldo: $${clienteArray.sueldo}</p>
                        <p class="card-text">Familiares: ${clienteArray.familia}</p>
                        <p class="card-text">Alquiler: $${clienteArray.alquiler}</p>
                        <p class="card-text">Total Liquidación : $${clienteArray.sueldo}</p>
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
        parrafoError.innerText = ""
    }

})
let darkMode;
if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
} else {
    darkMode = "light"
}
localStorage.setItem('darkMode', darkMode)
$(() => {
    if(localStorage.getItem('darkMode') == "dark") {
        $('body').addClass('darkMode')
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()
    } else {
        $('#btnLightMode').hide()
    }
    $('#btnDarkMode').click(() => {
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()
        $('body').css({
            "background-color": "black",
            "color": "gray"
        })
        //$('body').addClass('darkMode')
        localStorage.setItem('darkMode', "dark")
    })
    $('#btnLightMode').click(() => {
        $('#btnDarkMode').show()
        $('#btnLightMode').hide()
        $('body').css({
            "background-color": "azure",
            "color": "black"
        })
        //$('body').removeClass('darkMode')
        localStorage.setItem('darkMode', "light")
    })
})