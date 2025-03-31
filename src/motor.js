import {
    puntaje,
    setPuntaje,
    intentos,
    setIntentos,
    imgCarta,
    divCartas,
} from "./modelo.js"

export function mostrarCarta(img, num){
    imgCarta.src = img;
    setPuntaje(parseFloat(puntaje) + parseFloat(num));
    divCartas.innerHTML += `<img src="${img}" alt="Imagen No Encontrada">`;
}

export function mensajeMePlanto(){
    if (puntaje <= 4 || puntaje === 4.5){
        setIntentos(parseInt(intentos) + 1);
        return "Has sido muy conservador"
    } else if (puntaje === 5 || puntaje === 5.5){
        setIntentos(parseInt(intentos) + 1);
        return "Te ha entrado el canguelo eh"
    } else if (puntaje === 6 || puntaje === 6.5 || puntaje === 7){
        setIntentos(parseInt(intentos) + 1);
        return "Casi casi..."
    } else if (puntaje === 7.5){
        if (intentos === 0){setIntentos(parseInt(intentos) + 1);}
        if (intentos === 1){
            return `¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intento para ganar la partida.`
        } else {
            return `¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intentos para ganar la partida.`;
        }
    }
}