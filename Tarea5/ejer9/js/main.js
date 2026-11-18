let numeroAnterior = "";
let operacionActual = null;
let reinicializarPantalla = false;

const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".botones button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (!isNaN(valor)) {
            agregar(valor);
        } else if (valor === "C") {
            limpiar();
        } else if (valor === "=") {
            calcular();
        } else {
            operar(valor);
        }
    });
});

function agregar(valor) {
    if (pantalla.value === "0" || reinicializarPantalla) {
        pantalla.value = valor;
        reinicializarPantalla = false;
    } else {
        pantalla.value += valor;
    }
}

function operar(op) {
    if (operacionActual !== null) calcular();
    numeroAnterior = pantalla.value;
    operacionActual = op;
    reinicializarPantalla = true;
}

function calcular() {
    if (operacionActual === null || reinicializarPantalla) return;

    let resultado;
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(pantalla.value);

    switch (operacionActual) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num2 === 0 ? "Error" : num1 / num2;
            break;
        default:
            return;
    }

    pantalla.value = resultado;
    operacionActual = null;
    reinicializarPantalla = true;
}

function limpiar() {
    pantalla.value = "0";
    numeroAnterior = "";
    operacionActual = null;
    reinicializarPantalla = false;
}