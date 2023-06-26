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

//dom
const formulario = document.getElementById("formulario");
const origenInput = document.getElementById('origen');
const destinoInput = document.getElementById('destino');
const origenOpciones = document.getElementById('origenOpciones')
const destinoOpciones = document.getElementById('destinoOpciones')