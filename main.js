//declaracion de datos iniciales con los que voy a trabajar
const destinos = [
    "buenos aires","miami","rio de janeiro","montevideo","barcelona","paris","lisboa","londres","berlin","cancun",
    "bogota","lima","new york","cordoba","roma",
]
const meses = [
    "enero","febero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"
]
const iva = 21

let fecha
let salida

const reserva = []

const precio = {bajoCosto:50,medioCosto:120,altoCosto:250,gratis:0,costoFinal:0}

const destinosGrupoA = destinos.slice(0, 5)
const destinosGrupoB = destinos.slice(5, 10)
const destinosGrupoC = destinos.slice(10, 15)

const aleatorio = [];

for (let i = 0; i < 31; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 5)
    aleatorio.push(numeroAleatorio)
}


let vuelosDisponibles = [
    { origen: destinosGrupoA[aleatorio[8]], destino: destinosGrupoC[aleatorio[3]], precio: precio.altoCosto, mes: meses[2]},
    { origen: destinosGrupoB[aleatorio[18]], destino: destinosGrupoA[aleatorio[23]], precio: precio.bajoCosto, mes: meses[0]},
    { origen: destinosGrupoC[aleatorio[1]], destino: destinosGrupoC[aleatorio[16]], precio: precio.medioCosto, mes: meses[11]}, 
    { origen: destinosGrupoA[aleatorio[5]], destino: destinosGrupoB[aleatorio[7]], precio: precio.bajoCosto, mes: meses[6]},
    { origen: destinosGrupoB[aleatorio[17]], destino: destinosGrupoC[aleatorio[4]], precio: precio.gratis, mes: meses[3]},
    { origen: destinosGrupoC[aleatorio[28]], destino: destinosGrupoA[aleatorio[2]], precio: precio.bajoCosto, mes: meses[4]},
    { origen: destinosGrupoA[aleatorio[3]], destino: destinosGrupoA[aleatorio[15]], precio: precio.altoCosto, mes: meses[1]},
    { origen: destinosGrupoB[aleatorio[9]], destino: destinosGrupoB[aleatorio[24]], precio: precio.bajoCosto, mes: meses[5]},
    { origen: destinosGrupoA[aleatorio[10]], destino: destinosGrupoC[aleatorio[11]], precio: precio.medioCosto, mes: meses[7]},
    { origen: destinosGrupoC[aleatorio[21]], destino: destinosGrupoC[aleatorio[22]], precio: precio.bajoCosto, mes: meses[8]},
    { origen: destinosGrupoB[aleatorio[7]], destino: destinosGrupoC[aleatorio[6]], precio: precio.altoCosto, mes: meses[10]},
    { origen: destinosGrupoA[aleatorio[13]], destino: destinosGrupoB[aleatorio[27]], precio: precio.bajoCosto, mes: meses[9]},
    { origen: destinosGrupoA[aleatorio[16]], destino: destinosGrupoB[aleatorio[22]], precio: precio.altoCosto, mes: meses[4]},
    { origen: destinosGrupoB[aleatorio[4]], destino: destinosGrupoC[aleatorio[26]], precio: precio.bajoCosto, mes: meses[8]},
    { origen: destinosGrupoA[aleatorio[0]], destino: destinosGrupoB[aleatorio[29]], precio: precio.medioCosto, mes: meses[0]},
    { origen: destinosGrupoB[aleatorio[11]], destino: destinosGrupoB[aleatorio[8]], precio: precio.gratis , mes: meses[2]},
    { origen: destinosGrupoA[aleatorio[17]], destino: destinosGrupoC[aleatorio[4]], precio: precio.altoCosto, mes: meses[11]},
    { origen: destinosGrupoA[aleatorio[28]], destino: destinosGrupoB[aleatorio[2]], precio: precio.bajoCosto, mes: meses[3]},
    { origen: destinosGrupoA[aleatorio[8]], destino: destinosGrupoA[aleatorio[3]], precio: precio.altoCosto, mes: meses[4]},
    { origen: destinosGrupoC[aleatorio[18]], destino: destinosGrupoC[aleatorio[23]], precio: precio.bajoCosto, mes: meses[7]},
    { origen: destinosGrupoA[aleatorio[1]], destino: destinosGrupoC[aleatorio[16]], precio: precio.medioCosto, mes: meses[6]},
    { origen: destinosGrupoB[aleatorio[5]], destino: destinosGrupoC[aleatorio[7]], precio: precio.bajoCosto, mes: meses[9]},
    { origen: destinosGrupoC[aleatorio[17]], destino: destinosGrupoC[aleatorio[4]], precio: precio.altoCosto, mes: meses[10]},
    { origen: destinosGrupoC[aleatorio[28]], destino: destinosGrupoA[aleatorio[2]], precio: precio.bajoCosto, mes: meses[1]},
    { origen: destinosGrupoA[aleatorio[8]], destino: destinosGrupoB[aleatorio[3]], precio: precio.altoCosto, mes: meses[1]},
    { origen: destinosGrupoA[aleatorio[18]], destino: destinosGrupoB[aleatorio[23]], precio: precio.bajoCosto, mes: meses[5]},
    { origen: destinosGrupoB[aleatorio[1]], destino: destinosGrupoB[aleatorio[17]], precio: precio.medioCosto, mes: meses[11]},
    { origen: destinosGrupoB[aleatorio[5]], destino: destinosGrupoC[aleatorio[7]], precio: precio.bajoCosto, mes: meses[0]},
    { origen: destinosGrupoA[aleatorio[17]], destino: destinosGrupoC[aleatorio[4]], precio: precio.altoCosto, mes: meses[2]},
    { origen: destinosGrupoC[aleatorio[28]], destino: destinosGrupoC[aleatorio[2]], precio: precio.bajoCosto, mes: meses[1]},
    { origen: destinosGrupoB[aleatorio[15]], destino: destinosGrupoC[aleatorio[3]], precio: precio.altoCosto, mes: meses[3]},
    { origen: destinosGrupoA[aleatorio[1]], destino: destinosGrupoA[aleatorio[20]], precio: precio.bajoCosto, mes: meses[5]},
    { origen: destinosGrupoA[aleatorio[10]], destino: destinosGrupoB[aleatorio[18]], precio: precio.medioCosto, mes: meses[9]},
    { origen: destinosGrupoA[aleatorio[5]], destino: destinosGrupoC[aleatorio[7]], precio: precio.gratis, mes: meses[7]},
    { origen: destinosGrupoA[aleatorio[12]], destino: destinosGrupoB[aleatorio[4]], precio: precio.altoCosto, mes: meses[8]},
    { origen: destinosGrupoB[aleatorio[23]], destino: destinosGrupoC[aleatorio[20]], precio: precio.bajoCosto, mes: meses[3]},
    { origen: destinosGrupoB[aleatorio[8]], destino: destinosGrupoB[aleatorio[3]], precio: precio.altoCosto, mes: meses[10]},
    { origen: destinosGrupoA[aleatorio[18]], destino: destinosGrupoC[aleatorio[25]], precio: precio.bajoCosto, mes: meses[0]},
    { origen: destinosGrupoA[aleatorio[2]], destino: destinosGrupoB[aleatorio[16]], precio: precio.medioCosto, mes: meses[1]},
    { origen: destinosGrupoB[aleatorio[6]], destino: destinosGrupoB[aleatorio[9]], precio: precio.bajoCosto, mes: meses[11]},
    { origen: destinosGrupoA[aleatorio[17]], destino: destinosGrupoC[aleatorio[5]], precio: precio.altoCosto, mes: meses[4]},
    { origen: destinosGrupoB[aleatorio[28]], destino: destinosGrupoC[aleatorio[2]], precio: precio.gratis, mes: meses[2]},
    { origen: destinosGrupoB[aleatorio[2]], destino: destinosGrupoB[aleatorio[3]], precio: precio.altoCosto, mes: meses[2]},
    { origen: destinosGrupoA[aleatorio[1]], destino: destinosGrupoA[aleatorio[23]], precio: precio.bajoCosto, mes: meses[2]},
    { origen: destinosGrupoC[aleatorio[19]], destino: destinosGrupoC[aleatorio[16]], precio: precio.medioCosto, mes: meses[1]}, 
    { origen: destinosGrupoC[aleatorio[5]], destino: destinosGrupoA[aleatorio[7]], precio: precio.bajoCosto, mes: meses[7]},
    { origen: destinosGrupoA[aleatorio[7]], destino: destinosGrupoB[aleatorio[4]], precio: precio.gratis, mes: meses[4]},
    { origen: destinosGrupoC[aleatorio[24]], destino: destinosGrupoB[aleatorio[2]], precio: precio.bajoCosto, mes: meses[4]},
    { origen: destinosGrupoB[aleatorio[13]], destino: destinosGrupoB[aleatorio[15]], precio: precio.altoCosto, mes: meses[1]},
    { origen: destinosGrupoB[aleatorio[1]], destino: destinosGrupoC[aleatorio[24]], precio: precio.bajoCosto, mes: meses[3]},
    { origen: destinosGrupoA[aleatorio[10]], destino: destinosGrupoA[aleatorio[11]], precio: precio.medioCosto, mes: meses[7]},
    { origen: destinosGrupoC[aleatorio[21]], destino: destinosGrupoB[aleatorio[22]], precio: precio.bajoCosto, mes: meses[5]},
    { origen: destinosGrupoB[aleatorio[8]], destino: destinosGrupoA[aleatorio[6]], precio: precio.altoCosto, mes: meses[10]},
    { origen: destinosGrupoB[aleatorio[5]], destino: destinosGrupoC[aleatorio[27]], precio: precio.bajoCosto, mes: meses[9]},
    { origen: destinosGrupoA[aleatorio[6]], destino: destinosGrupoB[aleatorio[22]], precio: precio.altoCosto, mes: meses[3]},
    { origen: destinosGrupoC[aleatorio[14]], destino: destinosGrupoB[aleatorio[26]], precio: precio.bajoCosto, mes: meses[11]},
    { origen: destinosGrupoC[aleatorio[10]], destino: destinosGrupoA[aleatorio[29]], precio: precio.medioCosto, mes: meses[0]},
    { origen: destinosGrupoB[aleatorio[21]], destino: destinosGrupoA[aleatorio[8]], precio: precio.gratis , mes: meses[2]},
    { origen: destinosGrupoA[aleatorio[27]], destino: destinosGrupoB[aleatorio[4]], precio: precio.altoCosto, mes: meses[11]},
    { origen: destinosGrupoC[aleatorio[29]], destino: destinosGrupoB[aleatorio[2]], precio: precio.bajoCosto, mes: meses[3]},
    { origen: destinosGrupoB[aleatorio[9]], destino: destinosGrupoC[aleatorio[3]], precio: precio.altoCosto, mes: meses[5]},
    { origen: destinosGrupoC[aleatorio[19]], destino: destinosGrupoC[aleatorio[23]], precio: precio.bajoCosto, mes: meses[7]},
    { origen: destinosGrupoB[aleatorio[12]], destino: destinosGrupoA[aleatorio[16]], precio: precio.medioCosto, mes: meses[6]},
    { origen: destinosGrupoA[aleatorio[4]], destino: destinosGrupoC[aleatorio[7]], precio: precio.bajoCosto, mes: meses[9]},
    { origen: destinosGrupoB[aleatorio[2]], destino: destinosGrupoB[aleatorio[4]], precio: precio.altoCosto, mes: meses[10]},
    { origen: destinosGrupoC[aleatorio[3]], destino: destinosGrupoB[aleatorio[2]], precio: precio.bajoCosto, mes: meses[1]},
    { origen: destinosGrupoC[aleatorio[16]], destino: destinosGrupoA[aleatorio[3]], precio: precio.altoCosto, mes: meses[1]},
    { origen: destinosGrupoA[aleatorio[13]], destino: destinosGrupoB[aleatorio[23]], precio: precio.bajoCosto, mes: meses[6]},
    { origen: destinosGrupoB[aleatorio[14]], destino: destinosGrupoA[aleatorio[17]], precio: precio.medioCosto, mes: meses[11]},
    { origen: destinosGrupoC[aleatorio[15]], destino: destinosGrupoB[aleatorio[7]], precio: precio.bajoCosto, mes: meses[0]},
    { origen: destinosGrupoB[aleatorio[17]], destino: destinosGrupoC[aleatorio[4]], precio: precio.altoCosto, mes: meses[2]},
    { origen: destinosGrupoC[aleatorio[0]], destino: destinosGrupoC[aleatorio[2]], precio: precio.bajoCosto, mes: meses[11]},
    { origen: destinosGrupoC[aleatorio[15]], destino: destinosGrupoB[aleatorio[3]], precio: precio.altoCosto, mes: meses[3]},
    { origen: destinosGrupoB[aleatorio[0]], destino: destinosGrupoB[aleatorio[20]], precio: precio.bajoCosto, mes: meses[8]},
    { origen: destinosGrupoC[aleatorio[10]], destino: destinosGrupoB[aleatorio[18]], precio: precio.medioCosto, mes: meses[9]},
    { origen: destinosGrupoA[aleatorio[5]], destino: destinosGrupoA[aleatorio[7]], precio: precio.gratis, mes: meses[7]},
    { origen: destinosGrupoC[aleatorio[12]], destino: destinosGrupoB[aleatorio[4]], precio: precio.altoCosto, mes: meses[11]},
    { origen: destinosGrupoA[aleatorio[23]], destino: destinosGrupoC[aleatorio[20]], precio: precio.bajoCosto, mes: meses[3]},
    { origen: destinosGrupoA[aleatorio[8]], destino: destinosGrupoC[aleatorio[3]], precio: precio.altoCosto, mes: meses[1]},
    { origen: destinosGrupoC[aleatorio[15]], destino: destinosGrupoC[aleatorio[25]], precio: precio.bajoCosto, mes: meses[0]},
    { origen: destinosGrupoB[aleatorio[23]], destino: destinosGrupoA[aleatorio[16]], precio: precio.medioCosto, mes: meses[1]},
    { origen: destinosGrupoB[aleatorio[6]], destino: destinosGrupoB[aleatorio[9]], precio: precio.bajoCosto, mes: meses[11]},
    { origen: destinosGrupoC[aleatorio[27]], destino: destinosGrupoA[aleatorio[5]], precio: precio.altoCosto, mes: meses[0]},
    { origen: destinosGrupoB[aleatorio[28]], destino: destinosGrupoA[aleatorio[2]], precio: precio.gratis, mes: meses[2]},
]

console.log(vuelosDisponibles);

//bienvenida
const inicio = alert("Bienvenido a volarplus el sitio web para comprar vuelos")

//pedir datos a mi cliente para la formacion del algoritmo
let origen = prompt("Ingresar ciudad de origen:" + "\n" + "posibles origenes: " + "\n" + destinos.join(", ")).toLowerCase()
let destino = prompt("Ingresar ciudad de destino:" + "\n" + "posibles destinos: " + "\n" + destinos.join(", ") ).toLowerCase()

//validar origen y destino
if ( (!destinos.includes(origen)) || (!destinos.includes(destino))) {
    alert("Error, las ciudades que indicaste no son existentes")
    origen = prompt("Ingresar ciudad de origen:" + "\n" + "posibles origenes: " + "\n" + destinos.join(", ")).toLowerCase()
    destino = prompt("Ingresar ciudad de destino:" + "\n" + "posibles destinos: " + "\n" + destinos.join(", ") ).toLowerCase()
}

reserva.unshift(origen)
reserva.push(destino)

console.log(reserva);

let mes = prompt("En qué mes deseas viajar?\n" + meses.join(", ")).toLowerCase()

function validarMes(mes){
    while (!meses.includes(mes)){
    alert("Error, por favor elige un mes valido")
    mes = prompt("En qué mes deseas viajar?\n" + meses.join(", ")).toLowerCase()
    }
    return mes
}

validarMes(mes)


const obtenerFecha= (mes) => {
    switch (mes.toLowerCase()) {
    case "enero":
        fecha= prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break;
    case "febrero":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 28) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break
    case "marzo":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break;
    case "abril":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 30) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break
    case "mayo":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break;
    case "junio":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 30) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break
    case "julio":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break;
    case "agosto":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break
    case "septiembre":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 30) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break;
    case "octubre":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break
    case "noviembre":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 30) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break;
    case "diciembre":
        fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        while ((fecha < 1 || fecha > 31) || isNaN(fecha)) {
            alert("Error. Por favor, ingresa una fecha válida");
            fecha = prompt("En qué fecha de " + mes + " quieres viajar?");
        }
    break
    default:
        fecha = null
    }
    return fecha
}

obtenerFecha(mes)

const vuelosFiltrados = []

vuelosDisponibles.forEach(function(vuelo) {
if (vuelo.origen === origen && vuelo.destino === destino && vuelo.mes === mes) {
    vuelosFiltrados.push(vuelo)}
});

let solicitarIva
let salidaIva

if (vuelosFiltrados.length > 0) {
    let resultados = "Opciones disponibles para tu fecha:\n"

    for (let i = 0; i < vuelosFiltrados.length; i++) {
        const vuelo = vuelosFiltrados[i]
        resultados += (i + 1) + ". "
        resultados += "Origen: " + vuelo.origen + ", "
        resultados += "Destino: " + vuelo.destino + ", "
        resultados += "Precio: " + vuelo.precio + "\n"
    }
    alert(resultados)
    let confirmar = alert("desea confirmar?")
        if (confirmar === "si") {
            salida = alert("Tu reserva de vuelo de partida en " + origen + "con destino a " + destino + " con fecha para el " + fecha + " de " + mes + " tendra un costo de: $" + vuelo.precio + " sin impuestos (iva)")
        } else if (confirmar === "no") {
            alert("programa finalizado")
        } else{
            alert("error, ingrese un dato valido")
        }     
}else{
    alert("No se encontraron opciones disponibles")
}


solicitarIva = prompt("deseas saber el precio final con iva: (+21%) (si o no)")

if ((solicitarIva==="si") && (solicitarIva==="no" )) {
  precio.costoFinal = (vuelo.precio * iva) / 100
    salidaIva = alert("su precio final con iva incluido en su pasaje aereo es de: " + precio.costoFinal)
} else{
    alert("gracias por usar el simulador")
}