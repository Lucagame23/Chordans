let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

function presionarNumero(num) {
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
}

function presionarOperacion(op) {
    if (operacionActual === '') return;
    if (operacionAnterior !== '') {
        calcularResultado();
    }
    operacion = op;
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function calcularResultado() {
    let resultado;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = anterior / actual;
            break;
        default:
            return;
    }
    operacionActual = resultado;
    operacion = undefined;
    operacionAnterior = '';
    actualizarDisplay();
}

function clearDisplay() {
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
    actualizarDisplay();
}

function actualizarDisplay() {
    document.getElementById('display').value = operacionActual;
}

document.addEventListener('DOMContentLoaded', function () {
    actualizarDisplay();
});
