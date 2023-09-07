

const contenedor = document.getElementById('contenido')

const contenedorEventos = document.getElementById('cbEventos')

const buscador = document.getElementById('buscador')


pintarTarjetas(data.events, contenedor)

let eventos = extraerEventos(data.events)

pintarSwitches(eventos, contenedorEventos, "eventos")

contenedorEventos.addEventListener("change",filtroDuplo)

buscador.addEventListener("input",filtroDuplo)
 

//FUNCIONES

function pintarTarjetas(arreglo, contenedor){
    if(arreglo.length == 0){
        contenedor.innerHTML = `<h2>NO HAY NADA CAMPEON</>`
        return
    }
    let html = ""
    arreglo.forEach(element => {
        html += crearTarjeta(element)
    });
    contenedor.innerHTML = html
}


function crearTarjeta(elemento) {
    return `  <div class="card" style="width: 18rem;">
                <img src="${elemento.image}" class="card-img-top" alt="...">
                <h5 class="card-title">${elemento.name}</h5>
                <p class="card-text">${elemento.description}</p>
                <a href="./details.html?id=${elemento._id}" class="btn btn-primary">Details</a>
                <p>$ ${elemento.price}</p>
            </div> `

}

function extraerEventos(arreglo){
    return arreglo.map(elemento => elemento.category).filter((color,indice, colores) => colores.indexOf(color) === indice)
}

function pintarSwitches(arregloDeDatos, contenedor, tipo){
    let html = ''
    arregloDeDatos.forEach(elemento => {
        html += crearSwitch(elemento, tipo)
    })
    contenedor.innerHTML = html
}

function crearSwitch(dato,tipo){
    return `<div class="form-check form-switch col">
                <input class="form-check-input ${tipo}" type="checkbox" role="switch" id="${dato}" value="${dato}">
                <label class="form-check-label" for="${dato}">${dato}</label>
            </div>`
}

function filtrarPorTexto(arreglo, texto){
    let arregloFiltrado = arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()) || elemento.description.toLowerCase().includes(texto.trim().toLowerCase()))
    return arregloFiltrado
}

function filtrarPorEventos(arreglo){
    let checkboxes = Array.from(document.getElementsByClassName("form-check-input eventos"))
    let checkboxesAzules = checkboxes.filter(check => check.checked)
    if(checkboxesAzules.length == 0){
        return arreglo
    }
    let valores = checkboxesAzules.map(chAz => chAz.value)
    let arregloFiltrado = arreglo.filter(fruta => valores.includes(fruta.category))
    return arregloFiltrado
}


function filtroDuplo(){
    let filtro1 = filtrarPorEventos(data.events)
    let filtro2 = filtrarPorTexto(filtro1,buscador.value)
    pintarTarjetas(filtro2, contenedor)
}