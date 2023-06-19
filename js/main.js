import { buscar, envioFormulario, enviar, resetear, mostrarOpcionesFiltradas, filtrarOpciones, asignarEvento, validarInput} from './functions.js';

const ciudades = [
    "buenos aires","miami","rio de janeiro","montevideo","barcelona","paris","lisboa","londres","berlin","cancun",
    "bogota","lima","new york","cordoba","roma",
]
const meses = [
    "enero","febero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"
]
const iva = 21
const precio = {bajoCosto:50,medioCosto:120,altoCosto:250,gratis:0,costoFinal:0}
const ciudadesGrupoA = ciudades.slice(0, 5)
const ciudadesGrupoB = ciudades.slice(5, 10)
const ciudadesGrupoC = ciudades.slice(10, 15)
const aleatorio = []
for (let i = 0; i < 31; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 5)
    aleatorio.push(numeroAleatorio)
}

const datosBusqueda = {
    origen: "",
    destino: "",
    fechaIda: "",
    fechaVuelta: ""
};

const formulario = document.getElementById("formulario")
const elementoLista = document.createElement('li');
const origenInput = document.getElementById('origen');
const destinoInput = document.getElementById('destino');
origenInput.addEventListener('input', filtrarOpciones());
destinoInput.addEventListener('input', filtrarOpciones());

window.addEventListener("load", function() {
    enviar()
    resetear()
});

document.addEventListener('DOMContentLoaded',);



//let vuelosEncontradosHTML = 

// let vuelosDisponibles =[
//     { origen: ciudadesGrupoA[aleatorio[8]], destino: ciudadesGrupoC[aleatorio[3]], precio: precio.altoCosto, mes: meses[2]},
//     { origen: ciudadesGrupoB[aleatorio[18]], destino: ciudadesGrupoA[aleatorio[23]], precio: precio.bajoCosto, mes: meses[0]},
//     { origen: ciudadesGrupoC[aleatorio[1]], destino: ciudadesGrupoC[aleatorio[16]], precio: precio.medioCosto, mes: meses[11]}, 
//     { origen: ciudadesGrupoA[aleatorio[5]], destino: ciudadesGrupoB[aleatorio[7]], precio: precio.bajoCosto, mes: meses[6]},
//     { origen: ciudadesGrupoB[aleatorio[17]], destino: ciudadesGrupoC[aleatorio[4]], precio: precio.gratis, mes: meses[3]},
//     { origen: ciudadesGrupoC[aleatorio[28]], destino: ciudadesGrupoA[aleatorio[2]], precio: precio.bajoCosto, mes: meses[4]},
//     { origen: ciudadesGrupoA[aleatorio[3]], destino: ciudadesGrupoA[aleatorio[15]], precio: precio.altoCosto, mes: meses[1]},
//     { origen: ciudadesGrupoB[aleatorio[9]], destino: ciudadesGrupoB[aleatorio[24]], precio: precio.bajoCosto, mes: meses[5]},
//     { origen: ciudadesGrupoA[aleatorio[10]], destino: ciudadesGrupoC[aleatorio[11]], precio: precio.medioCosto, mes: meses[7]},
//     { origen: ciudadesGrupoC[aleatorio[21]], destino: ciudadesGrupoC[aleatorio[22]], precio: precio.bajoCosto, mes: meses[8]},
//     { origen: ciudadesGrupoB[aleatorio[7]], destino: ciudadesGrupoC[aleatorio[6]], precio: precio.altoCosto, mes: meses[10]},
//     { origen: ciudadesGrupoA[aleatorio[13]], destino: ciudadesGrupoB[aleatorio[27]], precio: precio.bajoCosto, mes: meses[9]},
//     { origen: ciudadesGrupoA[aleatorio[16]], destino: ciudadesGrupoB[aleatorio[22]], precio: precio.altoCosto, mes: meses[4]},
//     { origen: ciudadesGrupoB[aleatorio[4]], destino: ciudadesGrupoC[aleatorio[26]], precio: precio.bajoCosto, mes: meses[8]},
//     { origen: ciudadesGrupoA[aleatorio[0]], destino: ciudadesGrupoB[aleatorio[29]], precio: precio.medioCosto, mes: meses[0]},
//     { origen: ciudadesGrupoB[aleatorio[11]], destino: ciudadesGrupoB[aleatorio[8]], precio: precio.gratis , mes: meses[2]},
//     { origen: ciudadesGrupoA[aleatorio[17]], destino: ciudadesGrupoC[aleatorio[4]], precio: precio.altoCosto, mes: meses[11]},
//     { origen: ciudadesGrupoA[aleatorio[28]], destino: ciudadesGrupoB[aleatorio[2]], precio: precio.bajoCosto, mes: meses[3]},
//     { origen: ciudadesGrupoA[aleatorio[8]], destino: ciudadesGrupoA[aleatorio[3]], precio: precio.altoCosto, mes: meses[4]},
//     { origen: ciudadesGrupoC[aleatorio[18]], destino: ciudadesGrupoC[aleatorio[23]], precio: precio.bajoCosto, mes: meses[7]},
//     { origen: ciudadesGrupoA[aleatorio[1]], destino: ciudadesGrupoC[aleatorio[16]], precio: precio.medioCosto, mes: meses[6]},
//     { origen: ciudadesGrupoB[aleatorio[5]], destino: ciudadesGrupoC[aleatorio[7]], precio: precio.bajoCosto, mes: meses[9]},
//     { origen: ciudadesGrupoC[aleatorio[17]], destino: ciudadesGrupoC[aleatorio[4]], precio: precio.altoCosto, mes: meses[10]},
//     { origen: ciudadesGrupoC[aleatorio[28]], destino: ciudadesGrupoA[aleatorio[2]], precio: precio.bajoCosto, mes: meses[1]},
//     { origen: ciudadesGrupoA[aleatorio[8]], destino: ciudadesGrupoB[aleatorio[3]], precio: precio.altoCosto, mes: meses[1]},
//     { origen: ciudadesGrupoA[aleatorio[18]], destino: ciudadesGrupoB[aleatorio[23]], precio: precio.bajoCosto, mes: meses[5]},
//     { origen: ciudadesGrupoB[aleatorio[1]], destino: ciudadesGrupoB[aleatorio[17]], precio: precio.medioCosto, mes: meses[11]},
//     { origen: ciudadesGrupoB[aleatorio[5]], destino: ciudadesGrupoC[aleatorio[7]], precio: precio.bajoCosto, mes: meses[0]},
//     { origen: ciudadesGrupoA[aleatorio[17]], destino: ciudadesGrupoC[aleatorio[4]], precio: precio.altoCosto, mes: meses[2]},
//     { origen: ciudadesGrupoC[aleatorio[28]], destino: ciudadesGrupoC[aleatorio[2]], precio: precio.bajoCosto, mes: meses[1]},
//     { origen: ciudadesGrupoB[aleatorio[15]], destino: ciudadesGrupoC[aleatorio[3]], precio: precio.altoCosto, mes: meses[3]},
//     { origen: ciudadesGrupoA[aleatorio[1]], destino: ciudadesGrupoA[aleatorio[20]], precio: precio.bajoCosto, mes: meses[5]},
//     { origen: ciudadesGrupoA[aleatorio[10]], destino: ciudadesGrupoB[aleatorio[18]], precio: precio.medioCosto, mes: meses[9]},
//     { origen: ciudadesGrupoA[aleatorio[5]], destino: ciudadesGrupoC[aleatorio[7]], precio: precio.gratis, mes: meses[7]},
//     { origen: ciudadesGrupoA[aleatorio[12]], destino: ciudadesGrupoB[aleatorio[4]], precio: precio.altoCosto, mes: meses[8]},
//     { origen: ciudadesGrupoB[aleatorio[23]], destino: ciudadesGrupoC[aleatorio[20]], precio: precio.bajoCosto, mes: meses[3]},
//     { origen: ciudadesGrupoB[aleatorio[8]], destino: ciudadesGrupoB[aleatorio[3]], precio: precio.altoCosto, mes: meses[10]},
//     { origen: ciudadesGrupoA[aleatorio[18]], destino: ciudadesGrupoC[aleatorio[25]], precio: precio.bajoCosto, mes: meses[0]},
//     { origen: ciudadesGrupoA[aleatorio[2]], destino: ciudadesGrupoB[aleatorio[16]], precio: precio.medioCosto, mes: meses[1]},
//     { origen: ciudadesGrupoB[aleatorio[6]], destino: ciudadesGrupoB[aleatorio[9]], precio: precio.bajoCosto, mes: meses[11]},
//     { origen: ciudadesGrupoA[aleatorio[17]], destino: ciudadesGrupoC[aleatorio[5]], precio: precio.altoCosto, mes: meses[4]},
//     { origen: ciudadesGrupoB[aleatorio[28]], destino: ciudadesGrupoC[aleatorio[2]], precio: precio.gratis, mes: meses[2]},
//     { origen: ciudadesGrupoB[aleatorio[2]], destino: ciudadesGrupoB[aleatorio[3]], precio: precio.altoCosto, mes: meses[2]},
//     { origen: ciudadesGrupoA[aleatorio[1]], destino: ciudadesGrupoA[aleatorio[23]], precio: precio.bajoCosto, mes: meses[2]},
//     { origen: ciudadesGrupoC[aleatorio[19]], destino: ciudadesGrupoC[aleatorio[16]], precio: precio.medioCosto, mes: meses[1]}, 
//     { origen: ciudadesGrupoC[aleatorio[5]], destino: ciudadesGrupoA[aleatorio[7]], precio: precio.bajoCosto, mes: meses[7]},
//     { origen: ciudadesGrupoA[aleatorio[7]], destino: ciudadesGrupoB[aleatorio[4]], precio: precio.gratis, mes: meses[4]},
//     { origen: ciudadesGrupoC[aleatorio[24]], destino: ciudadesGrupoB[aleatorio[2]], precio: precio.bajoCosto, mes: meses[4]},
//     { origen: ciudadesGrupoB[aleatorio[13]], destino: ciudadesGrupoB[aleatorio[15]], precio: precio.altoCosto, mes: meses[1]},
//     { origen: ciudadesGrupoB[aleatorio[1]], destino: ciudadesGrupoC[aleatorio[24]], precio: precio.bajoCosto, mes: meses[3]},
//     { origen: ciudadesGrupoA[aleatorio[10]], destino: ciudadesGrupoA[aleatorio[11]], precio: precio.medioCosto, mes: meses[7]},
//     { origen: ciudadesGrupoC[aleatorio[21]], destino: ciudadesGrupoB[aleatorio[22]], precio: precio.bajoCosto, mes: meses[5]},
//     { origen: ciudadesGrupoB[aleatorio[8]], destino: ciudadesGrupoA[aleatorio[6]], precio: precio.altoCosto, mes: meses[10]},
//     { origen: ciudadesGrupoB[aleatorio[5]], destino: ciudadesGrupoC[aleatorio[27]], precio: precio.bajoCosto, mes: meses[9]},
//     { origen: ciudadesGrupoA[aleatorio[6]], destino: ciudadesGrupoB[aleatorio[22]], precio: precio.altoCosto, mes: meses[3]},
//     { origen: ciudadesGrupoC[aleatorio[14]], destino: ciudadesGrupoB[aleatorio[26]], precio: precio.bajoCosto, mes: meses[11]},
//     { origen: ciudadesGrupoC[aleatorio[10]], destino: ciudadesGrupoA[aleatorio[29]], precio: precio.medioCosto, mes: meses[0]},
//     { origen: ciudadesGrupoB[aleatorio[21]], destino: ciudadesGrupoA[aleatorio[8]], precio: precio.gratis , mes: meses[2]},
//     { origen: ciudadesGrupoA[aleatorio[27]], destino: ciudadesGrupoB[aleatorio[4]], precio: precio.altoCosto, mes: meses[11]},
//     { origen: ciudadesGrupoC[aleatorio[29]], destino: ciudadesGrupoB[aleatorio[2]], precio: precio.bajoCosto, mes: meses[3]},
//     { origen: ciudadesGrupoB[aleatorio[9]], destino: ciudadesGrupoC[aleatorio[3]], precio: precio.altoCosto, mes: meses[5]},
//     { origen: ciudadesGrupoC[aleatorio[19]], destino: ciudadesGrupoC[aleatorio[23]], precio: precio.bajoCosto, mes: meses[7]},
//     { origen: ciudadesGrupoB[aleatorio[12]], destino: ciudadesGrupoA[aleatorio[16]], precio: precio.medioCosto, mes: meses[6]},
//     { origen: ciudadesGrupoA[aleatorio[4]], destino: ciudadesGrupoC[aleatorio[7]], precio: precio.bajoCosto, mes: meses[9]},
//     { origen: ciudadesGrupoB[aleatorio[2]], destino: ciudadesGrupoB[aleatorio[4]], precio: precio.altoCosto, mes: meses[10]},
//     { origen: ciudadesGrupoC[aleatorio[3]], destino: ciudadesGrupoB[aleatorio[2]], precio: precio.bajoCosto, mes: meses[1]},
//     { origen: ciudadesGrupoC[aleatorio[16]], destino: ciudadesGrupoA[aleatorio[3]], precio: precio.altoCosto, mes: meses[1]},
//     { origen: ciudadesGrupoA[aleatorio[13]], destino: ciudadesGrupoB[aleatorio[23]], precio: precio.bajoCosto, mes: meses[6]},
//     { origen: ciudadesGrupoB[aleatorio[14]], destino: ciudadesGrupoA[aleatorio[17]], precio: precio.medioCosto, mes: meses[11]},
//     { origen: ciudadesGrupoC[aleatorio[15]], destino: ciudadesGrupoB[aleatorio[7]], precio: precio.bajoCosto, mes: meses[0]},
//     { origen: ciudadesGrupoB[aleatorio[17]], destino: ciudadesGrupoC[aleatorio[4]], precio: precio.altoCosto, mes: meses[2]},
//     { origen: ciudadesGrupoC[aleatorio[0]], destino: ciudadesGrupoC[aleatorio[2]], precio: precio.bajoCosto, mes: meses[11]},
//     { origen: ciudadesGrupoC[aleatorio[15]], destino: ciudadesGrupoB[aleatorio[3]], precio: precio.altoCosto, mes: meses[3]},
//     { origen: ciudadesGrupoB[aleatorio[0]], destino: ciudadesGrupoB[aleatorio[20]], precio: precio.bajoCosto, mes: meses[8]},
//     { origen: ciudadesGrupoC[aleatorio[10]], destino: ciudadesGrupoB[aleatorio[18]], precio: precio.medioCosto, mes: meses[9]},
//     { origen: ciudadesGrupoA[aleatorio[5]], destino: ciudadesGrupoA[aleatorio[7]], precio: precio.gratis, mes: meses[7]},
//     { origen: ciudadesGrupoC[aleatorio[12]], destino: ciudadesGrupoB[aleatorio[4]], precio: precio.altoCosto, mes: meses[11]},
//     { origen: ciudadesGrupoA[aleatorio[23]], destino: ciudadesGrupoC[aleatorio[20]], precio: precio.bajoCosto, mes: meses[3]},
//     { origen: ciudadesGrupoA[aleatorio[8]], destino: ciudadesGrupoC[aleatorio[3]], precio: precio.altoCosto, mes: meses[1]},
//     { origen: ciudadesGrupoC[aleatorio[15]], destino: ciudadesGrupoC[aleatorio[25]], precio: precio.bajoCosto, mes: meses[0]},
//     { origen: ciudadesGrupoB[aleatorio[23]], destino: ciudadesGrupoA[aleatorio[16]], precio: precio.medioCosto, mes: meses[1]},
//     { origen: ciudadesGrupoB[aleatorio[6]], destino: ciudadesGrupoB[aleatorio[9]], precio: precio.bajoCosto, mes: meses[11]},
//     { origen: ciudadesGrupoC[aleatorio[27]], destino: ciudadesGrupoA[aleatorio[5]], precio: precio.altoCosto, mes: meses[0]},
//     { origen: ciudadesGrupoB[aleatorio[28]], destino: ciudadesGrupoA[aleatorio[2]], precio: precio.gratis, mes: meses[2]},
// ]



// let mes = prompt("En qué mes deseas viajar?\n" + meses.join(", ")).toLowerCase()

// function validarMes(mes){
//     while (!meses.includes(mes)){
//     alert("Error, por favor elige un mes valido")
//     mes = prompt("En qué mes deseas viajar?\n" + meses.join(", ")).toLowerCase()
//     }
//     return mes
// }

// validarMes(mes)


// const obtenerFecha= (mes) => {
//     switch (mes.toLowerCase()) {
//     case "enero":
//         fecha= prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "febrero":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 28) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "marzo":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "abril":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 30) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "mayo":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "junio":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 30) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "julio":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "agosto":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida");
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "septiembre":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 30) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "octubre":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "noviembre":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 30) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     case "diciembre":
//         fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
//             alert("Error. Por favor, ingresa una fecha válida")
//             fecha = prompt("En qué fecha de " + mes + " quieres viajar?")
//         }
//     break
//     default:
//         fecha = null
//     }
//     return fecha
// }

// obtenerFecha(mes)

// const vuelosFiltrados = []

// vuelosDisponibles.forEach(function(vuelo) {
// if (vuelo.origen === origen && vuelo.destino === destino && vuelo.mes === mes) {
//     vuelosFiltrados.push(vuelo)}
// })

// let solicitarIva
// let salidaIva

// if (vuelosFiltrados.length > 0) {
//     let resultados = "Opciones disponibles para tu fecha:\n"

//     for (let i = 0; i < vuelosFiltrados.length; i++) {
//         const vuelo = vuelosFiltrados[i]
//         resultados += (i + 1) + ". "
//         resultados += "Origen: " + vuelo.origen + ", "
//         resultados += "Destino: " + vuelo.destino + ", "
//         resultados += "Precio: " + vuelo.precio + "\n"
//     }
//     alert(resultados)
//     let confirmar = alert("desea confirmar?")
//         if (confirmar === "si") {
//             salida = alert("Tu reserva de vuelo de partida en " + origen + "con destino a " + destino + " con fecha para el " + fecha + " de " + mes + " tendra un costo de: $" + vuelo.precio + " sin impuestos (iva)")
//         } else if (confirmar === "no") {
//             alert("programa finalizado")
//         } else{
//             alert("error, ingrese un dato valido")
//         }     
// }else{
//     alert("No se encontraron opciones disponibles")
// }


// solicitarIva = prompt("deseas saber el precio final con iva: (+21%) (si o no)")

// if ((solicitarIva==="si") && (solicitarIva==="no" )) {
//     precio.costoFinal = (vuelo.precio * iva) / 100
//     salidaIva = alert("su precio final con iva incluido en su pasaje aereo es de: " + precio.costoFinal)
// } else{
//     alert("gracias por usar el simulador")
// }