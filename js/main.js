const ciudades = [
    "buenos aires","miami","rio de janeiro","montevideo","barcelona","paris","lisboa","londres","berlin","cancun",
    "bogota","lima","new york","cordoba","roma",
];
const meses = [
    "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"
];
const iva = 21;
const bajoCosto = 50;
const medioCosto = 120;
const altoCosto = 250;
const gratis = 0;
const costoFinal = 0;
const precios = [bajoCosto, medioCosto, altoCosto, gratis, costoFinal];
const ciudadesGrupoA = ciudades.slice(0, 5);
const ciudadesGrupoB = ciudades.slice(5, 10);
const ciudadesGrupoC = ciudades.slice(10, 15);
const aleatorio = [];
for (let i = 0; i < 31; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 5);
    aleatorio.push(numeroAleatorio);
}
const datosBusqueda = {
    origen: "",
    destino: "",
    fechaIda: "",
    fechaVuelta: ""
};

//DOM
const origenInput = document.getElementById('origen');
const destinoInput = document.getElementById('destino');
const fechaIda = document.getElementById("fechaIda");
const fechaVuelta = document.getElementById("fechaVuelta");
const opcionesOrigen = document.getElementById("opcionesOrigen");
const opcionesDestino = document.getElementById('opcionesDestino');
const errorOrigen = document.getElementById("errorOrigen");
const errorDestino = document.getElementById("errorDestino");
const errorFecha1 = document.getElementById("errorFecha1")
const errorFecha2 = document.getElementById("errorFecha2")
const botonBuscar = document.getElementById("botonBuscar")
const errorFormulario = document.getElementById("errorFormulario")



const cargarOpciones1 = () => {
    if (origenInput.value === "" && opcionesOrigen.childElementCount === 0) {
        ciudades.forEach((ciudad) => {
            const li = document.createElement("li");
            li.textContent = ciudad.toUpperCase();
            li.addEventListener("click", () => {
                origenInput.value = ciudad.toUpperCase(); 
                opcionesOrigen.innerHTML = ""; 
            })
            opcionesOrigen.appendChild(li);
        });
    }

}
const cargarOpciones2 = () => {
    if (destinoInput.value === "" && opcionesDestino.childElementCount === 0) {
        ciudades.forEach((ciudad) => {
            const li = document.createElement("li");
            li.textContent = ciudad.toUpperCase();
            li.addEventListener("click", () => {
                destinoInput.value = ciudad.toUpperCase();  
                opcionesDestino.innerHTML = ""; 
            });
            opcionesDestino.appendChild(li)
        });
    }
}

const filtrarOpciones1 = () => {
    const valorBuscado1 = origenInput.value.toLowerCase();
    opcionesOrigen.innerHTML = "";
    ciudades.forEach((ciudad) => {
        if (ciudad.toLowerCase().startsWith(valorBuscado1)) {
            const li = document.createElement("li");
            li.textContent = ciudad.toUpperCase();
            li.addEventListener("click", () => {
                origenInput.value = ciudad.toUpperCase();
                opcionesOrigen.innerHTML = "";
            });
            opcionesOrigen.appendChild(li);
        }
    });
    if (opcionesOrigen.childElementCount === 0 && valorBuscado1 !== "") {
        errorOrigen.innerHTML = "<p class='text-danger text-center py-1 fw-semibold'>Ciudad no válida</p>";
        return false;
    } else {
        errorOrigen.innerHTML = "";
        return true;
    }
};

const filtrarOpciones2 = () => {
    const valorBuscado2 = destinoInput.value.toLowerCase();
    opcionesDestino.innerHTML = "";
    ciudades.forEach((ciudad) => {
        if (ciudad.toLowerCase().startsWith(valorBuscado2)) {
            const li = document.createElement("li");
            li.textContent = ciudad.toUpperCase();
            li.addEventListener("click", () => {
                destinoInput.value = ciudad.toUpperCase();
                opcionesDestino.innerHTML = "";
            });
            opcionesDestino.appendChild(li);
        }
    });
    if (opcionesDestino.childElementCount === 0 && valorBuscado2 !== "") {
        errorDestino.innerHTML = "<p class='text-danger text-center py-1 fw-semibold'>Ciudad no válida</p>";
        return false;
    } else {
        errorDestino.innerHTML = "";
        return true;
    }
}

function eventosOrigen() {
    cargarOpciones1()
    filtrarOpciones1()
}

function eventosDestino() {
    cargarOpciones2()
    filtrarOpciones2()
}

const fechaActual = new Date().toLocaleDateString('es-ES');
fechaIda.setAttribute("min", fechaActual);
fechaIda.setAttribute("value", fechaActual);

const validarfechaVuelta = () => {
    const fechaidaValor = new Date(Date.parse(fechaIda.value));
    const fechavueltaValor = new Date(Date.parse(fechaVuelta.value));
    if (fechaVuelta.value=="") {
        errorFecha2.innerHTML = "<p class='text-danger text-center py-1 fw-semibold'>Debes indicar una fecha valida</p>";
        return false;
    }
    if (fechaidaValor > fechavueltaValor) {
        errorFecha2.innerHTML = "<p class='text-danger text-center py-1 fw-semibold'>La fecha de vuelta debe ser posterior a la fecha de ida</p>";
        return false;
    } else {
        errorFecha2.innerHTML = "";
        return true;
    }
}

const validarfechaIda = () => {
    const fechaidaValor = new Date(Date.parse(fechaIda.value));
    const fechaActual = new Date();
    if (fechaIda.value=="") {
        errorFecha1.innerHTML = "<p class='text-danger text-center py-1 fw-semibold'>Debes indicar una fecha valida</p>";
        return false;
    }
    if (fechaidaValor < fechaActual) {
        errorFecha1.innerHTML = "<p class='text-danger text-center py-1 fw-semibold'>La fecha de ida no puede ser menor a la fecha actual</p>";
        return false;
    } else {
        errorFecha1.innerHTML = "";
        return true;
    }
};

const eventos = () => {
    origenInput.addEventListener("keyup", eventosOrigen);
    destinoInput.addEventListener("keyup", eventosDestino);
    origenInput.addEventListener("focus", cargarOpciones1);
    destinoInput.addEventListener("focus", cargarOpciones2);
    fechaIda.addEventListener("input", validarfechaIda);
    fechaVuelta.addEventListener("input", validarfechaVuelta);
}

eventos();

const validarBusqueda = () => {
    if (validarfechaIda() && validarfechaVuelta() && filtrarOpciones1() && filtrarOpciones2()) {
        return true;
    } else {
        return false;
    }
};

let fechaIdaSesion
let fechaVueltaSesion 

const sesion = () => {
    if (validarBusqueda()) {
        if (origenInput.value !== "" && destinoInput.value !== "") {
            datosBusqueda.origen = origenInput.value;
            datosBusqueda.destino = destinoInput.value;
            datosBusqueda.fechaIda = fechaIda.value;
            datosBusqueda.fechaVuelta = fechaVuelta.value;
            sessionStorage.setItem("busquedaUsuario", JSON.stringify(datosBusqueda));
        }
        const datosBusquedaSesion = JSON.parse(sessionStorage.getItem("busquedaUsuario"));
        fechaIdaSesion = datosBusquedaSesion.fechaIda;
        fechaVueltaSesion = datosBusquedaSesion.fechaVuelta;
    }
};


const obtenerVueloAleatorio = () => {
    const origen = ciudades[Math.floor(Math.random() * ciudades.length)];
    const destino = ciudades[Math.floor(Math.random() * ciudades.length)];
    const precio = precios[Math.floor(Math.random() * precios.length)];
    const mesIdaIndex = Math.floor(Math.random() * meses.length);
    const mesVueltaIndex = Math.floor(Math.random() * meses.length);
    let mesIda = meses[mesIdaIndex];
    let mesVuelta = meses[mesVueltaIndex];
    if (mesIdaIndex > mesVueltaIndex) {
        mesIda = meses[mesVueltaIndex];
        mesVuelta = meses[mesIdaIndex];
    }
    return { origen, destino, precio, mesIda, mesVuelta };
};


const generarVuelosDisponibles = () => {
    const vuelosDisponibles = [];
    for (let i = 0; i < 50000; i++) {
        vuelosDisponibles.push(obtenerVueloAleatorio());
    }
    return vuelosDisponibles;
};

const vuelosDisponibles = generarVuelosDisponibles();
localStorage.setItem('vuelosDisponibles', JSON.stringify(vuelosDisponibles))

const opcionesVuelos = () => {
    const datosBusqueda = JSON.parse(sessionStorage.getItem("busquedaUsuario"));
    const vuelosFiltrados = vuelosDisponibles.filter((vuelo) => {
        const origenCoincide = vuelo.origen.toLowerCase() === datosBusqueda.origen.toLowerCase();
        const destinoCoincide = vuelo.destino.toLowerCase() === datosBusqueda.destino.toLowerCase();
        const mesIdaCoincide = meses.indexOf(vuelo.mesIda) === new Date(datosBusqueda.fechaIda).getMonth();
        const mesVueltaCoincide = meses.indexOf(vuelo.mesVuelta) === new Date(datosBusqueda.fechaVuelta).getMonth();
        return origenCoincide && destinoCoincide && mesIdaCoincide && mesVueltaCoincide;
    });
    const vuelosEncontradosSection = document.getElementById("vuelosEncontrados");
    vuelosEncontradosSection.innerHTML = "";
    if (vuelosFiltrados.length > 0) {
        const contenedor = document.createElement("div");
        vuelosEncontradosSection.appendChild(contenedor);            
        contenedor.innerHTML = '<h2 class="text-center">Vuelos Encontrados</h2>'
        const div = document.createElement("div")
        contenedor.appendChild(div)
        vuelosFiltrados.forEach((vuelo) => {
            div.innerHTML = `<div class="container">
            <div class="border p-2">
                <div class="d-flex justify-content-start">
                    <p class="p-2"><b>IDA</b></p>
                    <p class="p-2">${fechaIda}</p>
                </div>
                <div class="d-flex justify-content-evenly align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="radio">
                    </div>
                    <div class="d-flex">
                        <h4 class="p-2">Desde: ${vuelo.origen}</h4>
                        <h4 class="p-2">Hacia: ${vuelo.destino}</h4>
                    </div>
                    <div>
                        <p><b>Precio: $${vuelo.precio}</b></p>
                    </div>         
                </div>
            </div>
            <div class="border p-2">
                <div class="d-flex justify-content-start">
                    <p class="p-2"><b>VUELTA</b></p>
                    <p class="p-2">${fechaVuelta}</p>
                </div>
                <div class="d-flex justify-content-evenly align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="radio">
                    </div> 
                    <div class="d-flex">
                        <h4 class="p-2">Desde: ${vuelo.destino}</h4>
                        <h4 class="p-2">Hacia: ${vuelo.origen}</h4>
                    </div>
                    <div>
                        <p><b>Precio: $${vuelo.precio}</b></p>   
                    </div>
                </div>
            </div>
        </div>
        <div class="border pt-5 text-center">
            <div>
                <p><b>Precio total: $${vuelo.precio * 2}</b></p>
            </div>
            <div>
                <button id="comprar" type="button" class="btn btn-success">COMPRAR<button>
            </div>
        </div>`;
            const comprarBoton = document.getElementById("comprar");
            comprarBoton.addEventListener("click", () => {
                console.log("Vuelo seleccionado:", vuelo);
            });
        });
    } else {
        const mensajeError = document.createElement("p");
        mensajeError.textContent = "No se encontraron vuelos disponibles para los criterios de búsqueda seleccionados.";
        vuelosEncontradosSection.appendChild(mensajeError);
    }
};

const datosInvalidos = () => {
    Swal.fire(
        'Error',
        'Campos de datos no validos',
        'error'
    )
}

const datosValidos = () => {
    Swal.fire(
        '',
        'Campos de datos validos',
        'success'
    )
}

const buscar = () => {
    if (validarBusqueda()) {
        sesion();
        opcionesVuelos();
        datosValidos();
    } else {
        datosInvalidos();
    }
}

botonBuscar.addEventListener("click", buscar)

const resetear = () => {sessionStorage.clear();}
window.addEventListener("beforeunload", resetear);

// me falta desarrollar el diseno de la seccion habilitada atravez de innerhtml
// me falta que al seleccionar el vuelo preferido confirma la compra y le sume el costo total +iva