export const imgBack = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
export const imgAsCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
export const img2copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
export const img3copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
export const img4copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
export const img5copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
export const img6copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
export const img7copas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
export const imgSotacopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
export const imgCabcopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
export const imgReycopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

export const spanPuntos = document.getElementById("puntaje");
export const spanIntentos = document.getElementById("intentos");
export const imgCarta = document.getElementById("imgCarta");
export const divCartas = document.getElementById("misCartas");
export const btnDameCarta = document.getElementById("btnDameCarta");
export const btnMePlanto = document.getElementById("btnMePlanto");

export let puntaje = 0; //Una variable no se puede cambiar desde otro script, por eso creamos un método para cambiarla
export const setPuntaje = (punt) => (puntaje = punt); //Método necesario para cambiar la variable en otro script

export let intentos = 0;
export const setIntentos = (num) => (intentos = num);