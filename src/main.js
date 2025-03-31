import {
    btnDameCarta,
    btnMePlanto
} from "./modelo.js"

import { inicializar, dameCarta, mePlanto } from "./ui.js";

document.addEventListener('DOMContentLoaded', inicializar);

btnDameCarta.addEventListener('click', dameCarta);
btnMePlanto.addEventListener('click', mePlanto);