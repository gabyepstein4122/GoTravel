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


const sesion = () => {
    datosBusqueda.origen = origenInput.value;
    datosBusqueda.destino = destinoInput.value;
    datosBusqueda.fechaIda = fechaIda.value;
    datosBusqueda.fechaVuelta = fechaVuelta.value;
    sessionStorage.setItem("busqueda", JSON.stringify(datosBusqueda));
}

const buscador = () => {
    botonBuscar.addEventListener("click",sesion);
};

buscador();

const cargarOpciones1 = () => {
    if (origenInput.value === "") {
        ciudades.forEach((ciudad) => {
            const li = document.createElement("li");
            li.textContent = ciudad.toUpperCase();
            li.addEventListener("click", () => {
                origenInput.value = ciudad; 
                opcionesOrigen.innerHTML = ""; 
            })
            opcionesOrigen.appendChild(li)
        });
    }
}
const cargarOpciones2 = () => {
    if (destinoInput.value === "") {
        ciudades.forEach((ciudad) => {
            const li = document.createElement("li");
            li.textContent = ciudad.toUpperCase();
            li.addEventListener("click", () => {
                destinoInput.value = ciudad; 
                opcionesDestino.innerHTML = ""; 
            });
            opcionesDestino.appendChild(li)
        });
    }
}

const mostrarOpciones = () => {
    origenInput.addEventListener("input", cargarOpciones1);
    destinoInput.addEventListener("input", cargarOpciones2);
    origenInput.addEventListener("focus", cargarOpciones1);
    destinoInput.addEventListener("focus", cargarOpciones2);
}

mostrarOpciones();

const filtrar = () => {
    const origenValor = origenInput.value.toLowerCase();
    const destinoValor = destinoInput.value.toLowerCase();

    const ciudadesFiltradasOrigen = ciudades.filter(ciudad => {
        return ciudad.toLowerCase().includes(origenValor);
    });
    const ciudadesFiltradasDestino = ciudades.filter(ciudad => {
        return ciudad.toLowerCase().includes(destinoValor);
    });
}

origenInput.addEventListener("input", filtrar);
destinoInput.addEventListener("input", filtrar);


const validarInput = () => {
    const origen = origenInput.value.toLowerCase();
    const destino = destinoInput.value.toLowerCase();

    if (origen !== "" && !ciudades.includes(origen)) {
        errorOrigen.innerHTML = "<p class='text-danger'>Ciudad no válida.</p>";
    } 
    
    if (destino !== "" && !ciudades.includes(destino)) {
        errorDestino.innerHTML = "<p class='text-danger'>Ciudad no válida.</p>";
    } 
};

origenInput.addEventListener("input", validarInput);
destinoInput.addEventListener("input", validarInput);




/*
    origenInput.addEventListener("input", function () {
        const textoIngresado = origenInput.value.toLowerCase();
        const opcionesFiltradas = ciudades.filter(ciudad => ciudad.toLowerCase().startsWith(textoIngresado));
        mostrarOpcionesFiltradas(opcionesFiltradas, origenInput, document.getElementById('opciones-origen'));
        error1.innerHTML = opcionesFiltradas.includes(textoIngresado) ? "" : "<p>El valor ingresado no es válido</p>";
        error1.classList.toggle("text-danger", !!error1.innerHTML);
        error1.classList.toggle("mt-1", !!error1.innerHTML);
    });

    destinoInput.addEventListener("input", function () {
        const textoIngresado = destinoInput.value.toLowerCase();
        const opcionesFiltradas = ciudades.filter(ciudad => ciudad.toLowerCase().startsWith(textoIngresado));
        mostrarOpcionesFiltradas(opcionesFiltradas, destinoInput, document.getElementById('opciones-destino'));
        error2.innerHTML = opcionesFiltradas.includes(textoIngresado) ? "" : "<p>El valor ingresado no es válido</p>";
        error2.classList.toggle("text-danger", !!error2.innerHTML);
        error2.classList.toggle("mt-1", !!error2.innerHTML);
    });
}  



function resetear() {
    formulario.reset();
    sessionStorage.clear();
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarOpcionesFiltradas(ciudades, origenInput, document.getElementById('opciones-origen'));
    mostrarOpcionesFiltradas(ciudades, destinoInput, document.getElementById('opciones-destino'));
    asignarEvento();
    enviar();
    resetear();
});

const obtenerVueloAleatorio = () => {
    const origen = ciudades[Math.floor(Math.random() * ciudades.length)];
    const destino = ciudades[Math.floor(Math.random() * ciudades.length)];
    const precio = precios[Math.floor(Math.random() * precios.length)];
    const mes = meses[Math.floor(Math.random() * meses.length)];

    return { origen, destino, precio, mes };
};

const generarVuelosDisponibles = () => {
    const vuelosDisponibles = [];
    for (let i = 0; i < 1000; i++) {
        vuelosDisponibles.push(obtenerVueloAleatorio());
    }
    return vuelosDisponibles;
};

const vuelosDisponibles = generarVuelosDisponibles();
localStorage.setItem('vuelosDisponibles', JSON.stringify(vuelosDisponibles))

// //const contenidoHTML = `
// <section>
//     <div class="container">
//         <h2 class="text-center">Vuelos Encontrados</h2>
//         <div>
//             <div id="encontradosIda" class="container row">
//                 <div class="d-flex align-items-center text-center">
//                     <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
//                         <path d="M20.012 18v2h-20v-2h20zm3.973-13.118c.154 1.349-.884 2.615-1.927 3.491-.877.735-9.051 6.099-9.44 6.307-1.756.936-3.332 1.306-4.646 1.32-1.36.014-2.439-.354-3.144-.872l-4.784-3.977 3.742-2.373 4.203 1.445.984-.578-4.973-3.645 3.678-2.124 7.992 1.545c.744-.445 1.482-.9 2.225-1.348 1.049-.623 2.056-1.055 3.387-1.055 1.321 0 2.552.52 2.703 1.864zm-4.341.512c-.419.192-3.179 1.882-3.615 2.144l-8.01-1.55-.418.241 5.288 3.307-4.683 2.876-4.214-1.448-.69.395c.917.729 1.787 1.522 2.751 2.186 1.472.962 4.344.22 5.685-.663.9-.592 7.551-4.961 8.436-5.582.605-.431 1.797-1.414 1.824-2.152l.001-.004c-.644-.287-1.716-.041-2.355.25z"/>
//                     </svg>
//                     <h4 class="mx-3">IDA</h4>
//                     <h4 class="mx-3">{$datosBusqueda.fechaIda}</h4>
//                 </div>
//                 <div class="d-flex my-4">
//                 <div></div>
//                 <div></div>
//                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="idaOpcion1">
//             </div>
//         <div class="d-flex my-4">
//           <div></div>
//           <div></div>
//           <input class="form-check-input" type="radio" name="flexRadioDefault" id="idaOpcion2">
//         </div>
//         <div class="d-flex my-4">
//           <div></div>
//           <div></div>
//           <input class="form-check-input" type="radio" name="flexRadioDefault" id="idaOpcion3">
//         </div>
//       </div>
//       <div id="encontradosVuelta" class="d-flex container row">
//         <div class="d-flex align-items-center text-center">
//           <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
//             <path d="M24.012 20h-20v-2h20v2zm-2.347-5.217c-.819 1.083-2.444 1.284-3.803 1.2-1.142-.072-10.761-1.822-11.186-1.939-1.917-.533-3.314-1.351-4.276-2.248-.994-.927-1.557-1.902-1.676-2.798l-.724-4.998 3.952.782 2.048 2.763 1.886.386-1.344-4.931 4.667 1.095 4.44 5.393 2.162.51c1.189.272 2.216.653 3.181 1.571.957.911 1.49 2.136.673 3.214zm-3.498-2.622c-.436-.15-3.221-.781-3.717-.892l-4.45-5.409-.682-.164 1.481 4.856-5.756-1.193-2.054-2.773-.772-.19.486 2.299c.403 1.712 2.995 3.155 4.575 3.439 1.06.192 8.89 1.612 9.959 1.773.735.105 2.277.214 2.805-.302l.003-.002c-.268-.652-1.214-1.213-1.878-1.442z"/>
//           </svg>
//           <h4 class="mx-3">VUELTA</h4>
//           <h4 class="mx-3">fecha 00/00/0000</h4>
//         </div>
//         <div class="d-flex my-4">
//           <div></div>
//           <div></div>
//           <input class="form-check-input" type="radio" name="flexRadioDefault" id="vueltaOpcion1">
//         </div>
//         <div class="d-flex my-4">
//           <div></div>
//           <div></div>
//           <input class="form-check-input" type="radio" name="flexRadioDefault" id="vueltaOpcion2">
//         </div>
//         <div class="d-flex my-4">
//           <div></div>
//           <div></div>
//           <input class="form-check-input" type="radio" name="flexRadioDefault" id="vueltaOpcion3">
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// // solicitarIva = prompt("deseas saber el precio final con iva: (+21%) (si o no)")

// // if ((solicitarIva==="si") && (solicitarIva==="no" )) {
// //     precio.costoFinal = (vuelo.precio * iva) / 100
// //     salidaIva = alert("su precio final con iva incluido en su pasaje aereo es de: " + precio.costoFinal)
// // } else{
// //     alert("gracias por usar el simulador")
// /*/