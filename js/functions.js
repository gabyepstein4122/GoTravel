export { buscar, envioFormulario, enviar, resetear, mostrarOpcionesFiltradas, filtrarOpciones, asignarEvento, validarInput}

const buscar = () => {
    datosBusqueda.origen = document.getElementById("origen").value
    datosBusqueda.destino = document.getElementById("destino").value
    datosBusqueda.fechaIda = document.getElementById("fechaIda").value
    datosBusqueda.fechaVuelta = document.getElementById("fechaVuelta").value
    sessionStorage.setItem("busqueda", JSON.stringify(datosBusqueda))
}

function envioFormulario(evento) {
    evento.preventDefault()
    buscar()
}

function enviar() {
    formulario.addEventListener("submit", envioFormulario)
}

function resetear() {
    formulario.reset()
    sessionStorage.clear()
}

const mostrarOpcionesFiltradas = (opciones, inputElement, opcionesElement) => {
    opciones.forEach(opcion => {
        const elementoLista = document.createElement('li')
        elementoLista.textContent = opcion
        elementoLista.addEventListener('click', function() {
            inputElement.value = opcion
            opcionesElement.innerHTML = ""
        })
        opcionesElement.appendChild(elementoLista)
    })
}

function filtrarOpciones() {
    const textoIngresado = this.value;
    const opcionesFiltradas = ciudades.filter(ciudad => ciudad.toLowerCase().startsWith(textoIngresado.toLowerCase()));
    const opcionesElement = this.id === 'origen' ? document.getElementById('opciones-origen') : document.getElementById('opciones-destino');
    mostrarOpcionesFiltradas(opcionesFiltradas, this, opcionesElement);
}

function asignarEvento() {
    origenInput.addEventListener('input', filtrarOpciones());
    destinoInput.addEventListener('input', filtrarOpciones());
}

function validarInput() {
    const error = document.querySelectorAll(".error");
    const misInputs = document.querySelectorAll(".form-control")
    const opcionesFiltradas = ciudades.filter(ciudad => ciudad.toLowerCase().startsWith(textoIngresado.toLowerCase()));
    misInputs.addEventListener("input", function () {
        if (misInputs.target.value !== opcionesFiltradas ) {
            error.innerHTML = "<p>El valor ingresado no es válido</p>"
            errorElement.classList.add("text-danger", "mt-1");
        } else {
            errorElement.classList.remove("text-danger", "mt-1");
        }
    })
}
