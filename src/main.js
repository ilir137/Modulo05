const imgBack = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
const imgAsCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
const img2copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
const img3copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
const img4copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
const img5copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
const img6copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
const img7copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
const imgSotacopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
const imgCabcopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
const imgReycopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

const spanPuntos = document.getElementById("puntaje");
const spanIntentos = document.getElementById("intentos");
const imgCarta = document.getElementById("imgCarta");
const divCartas = document.getElementById("misCartas");

var puntaje = 0;
var intentos = 0;

//console.log("Hello from main");

function inicializar(){
    puntaje = 0;
    muestraPunt(puntaje);
    divCartas.innerHTML = "";
    muestraIntentos(intentos);
}

function muestraPunt(punt){
    spanPuntos.innerText = punt;
}

function muestraIntentos(inten){
    spanIntentos.innerText = inten;
}

function dameCarta(){
    let numCarta = Math.floor(Math.random() * 10) + 1;
    //console.log(numCarta);
    switch(numCarta){
        case 1:
            imgCarta.src = imgAsCopas;
            puntaje = parseFloat(puntaje) + 1;
            divCartas.innerHTML += `<img src="${imgAsCopas}" alt="Imagen No Encontrada">`;
            break;
        case 2:
            imgCarta.src = img2copas;
            puntaje = parseFloat(puntaje) + 2;
            divCartas.innerHTML += `<img src="${img2copas}" alt="Imagen No Encontrada">`;
            break;
        case 3:
            imgCarta.src = img3copas;
            puntaje = parseFloat(puntaje) + 3;
            divCartas.innerHTML += `<img src="${img3copas}" alt="Imagen No Encontrada">`;
            break;
        case 4:
            imgCarta.src = img4copas;
            puntaje = parseFloat(puntaje) + 4;
            divCartas.innerHTML += `<img src="${img4copas}" alt="Imagen No Encontrada">`;
            break;
        case 5:
            imgCarta.src = img5copas;
            puntaje = parseFloat(puntaje) + 5;
            divCartas.innerHTML += `<img src="${img5copas}" alt="Imagen No Encontrada">`;
            break;
        case 6:
            imgCarta.src = img6copas;
            puntaje = parseFloat(puntaje) + 6;
            divCartas.innerHTML += `<img src="${img6copas}" alt="Imagen No Encontrada">`;
            break;
        case 7:
            imgCarta.src = img7copas;
            puntaje = parseFloat(puntaje) + 7;
            divCartas.innerHTML += `<img src="${img7copas}" alt="Imagen No Encontrada">`;
            break;
        case 8:
            imgCarta.src = imgSotacopas;
            puntaje = parseFloat(puntaje) + 0.5;
            divCartas.innerHTML += `<img src="${imgSotacopas}" alt="Imagen No Encontrada">`;
            break;
        case 9:
            imgCarta.src = imgCabcopas;
            puntaje = parseFloat(puntaje) + 0.5;
            divCartas.innerHTML += `<img src="${imgCabcopas}" alt="Imagen No Encontrada">`;
            break;
        case 10:
            imgCarta.src = imgReycopas;
            puntaje = parseFloat(puntaje) + 0.5;
            divCartas.innerHTML += `<img src="${imgReycopas}" alt="Imagen No Encontrada">`;
            break;
        /*default:
            console.log(imgCarta.src)*/
    }
    setTimeout(() => {
        imgCarta.src = imgBack;
    }, 700);  // 700 milisegundos = 0.7 segundos
    muestraPunt(puntaje);
    if (puntaje > 7.5){
        alert(`Game Over, tu puntaje es de ${puntaje}...`);
        intentos = parseInt(intentos) + 1;
        inicializar();
    }
    //console.log(puntaje);
}

function mePlanto(){
    //console.log(puntaje);
    if (puntaje <= 4 || puntaje === 4.5){
        intentos = parseInt(intentos) + 1;
        alert("Has sido muy conservador");
    } else if (puntaje === 5 || puntaje === 5.5){
        intentos = parseInt(intentos) + 1;
        alert("Te ha entrado el canguelo eh");
    } else if (puntaje === 6 || puntaje === 6.5 || puntaje === 7){
        intentos = parseInt(intentos) + 1;
        alert("Casi casi...");
    } else if (puntaje === 7.5){
        if (intentos === 0){intentos = parseInt(intentos) + 1;}
        if (intentos === 1){
            alert(`¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intento para ganar la partida.`);
        } else {
            alert(`¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intentos para ganar la partida.`);
        }
        intentos = 0;
    }
    inicializar();
}