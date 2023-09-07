let parametros = new URLSearchParams(window.location.search)
let id = parametros.get("id")

const contenedor = document.getElementById('contenedor')

let Evento = buscarEvento(id)
console.log(Evento);

pintarTarjeta(Evento, contenedor)

// Funciones

function buscarEvento(id){
    return data.events.find(Evento => Evento._id == id)
}

function crearTarjeta(elemento) {
    return `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${elemento.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${elemento.name}</h5>
                    <p class="card-text">${elemento.description}</p>
                    <p class="card-text"><small class="text-body-secondary">Categoria: ${elemento.category}</small></p>
                    <p class="card-text"><small class="text-body-secondary">Precio: $${elemento.price}</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>`
}

function pintarTarjeta(elemento, contenedor){
    contenedor.innerHTML = crearTarjeta(elemento)
}