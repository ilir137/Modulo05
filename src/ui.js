import {
    imgBack, 
    imgAsCopas, 
    img2copas, 
    img3copas, 
    img4copas, 
    img5copas, 
    img6copas, 
    img7copas, 
    imgSotacopas, 
    imgCabcopas, 
    imgReycopas,
    puntaje,
    setPuntaje,
    intentos,
    setIntentos,
    spanPuntos,
    spanIntentos,
    imgCarta,
    divCartas,
} from "./modelo.js"

import { mostrarCarta, mensajeMePlanto } from "./motor.js";

export function inicializar(){
    setPuntaje(0);
    muestraPunt(puntaje);
    divCartas.innerHTML = "";
    muestraIntentos(intentos);
}

function muestraPunt(punt){
    setPuntaje(punt);
    spanPuntos.innerText = punt;
}

function muestraIntentos(inten){
    setIntentos(inten);
    spanIntentos.innerText = inten;
}

export function dameCarta(){
    let numCarta = Math.floor(Math.random() * 10) + 1;
    //console.log(numCarta);
    switch(numCarta){
        case 1:
            mostrarCarta(imgAsCopas, 1);
            break;
        case 2:
            mostrarCarta(img2copas, 2);
            break;
        case 3:
            mostrarCarta(img3copas, 3);
            break;
        case 4:
            mostrarCarta(img4copas, 4);
            break;
        case 5:
            mostrarCarta(img5copas, 5);
            break;
        case 6:
            mostrarCarta(img6copas, 6);
            break;
        case 7:
            mostrarCarta(img7copas, 7);
            break;
        case 8:
            mostrarCarta(imgSotacopas, 0.5);
            break;
        case 9:
            mostrarCarta(imgCabcopas, 0.5);
            break;
        case 10:
            mostrarCarta(imgReycopas, 0.5);
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
        setIntentos(parseInt(intentos) + 1);
        inicializar();
    }
    //console.log(puntaje);
}

export function mePlanto(){
    //console.log(puntaje);
    alert(mensajeMePlanto());
    if (puntaje === 7.5){setIntentos(0);}
    inicializar();
}