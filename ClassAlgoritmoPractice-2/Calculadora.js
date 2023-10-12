
// 1. Funciones para operaciones aritméticas

// Función de suma
function suma(a, b) {
    return a + b;
}

// Función de resta
function resta(a, b) {
    return a - b;
}

// Función de multiplicación
function multiplicacion(a, b) {
    return a * b;
}

// Función de división
function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero.";
    }
}

// 3. Llamando a las funciones y mostrando los resultados

const calcularBtn = document.getElementById("calcular");
calcularBtn.addEventListener("click", function () {
    const operando1 = parseFloat(document.getElementById("operando1").value);
    const operando2 = parseFloat(document.getElementById("operando2").value);
    const operador = document.getElementById("operador").value;

    let resultado;

    if (isNaN(operando1) || isNaN(operando2)) {
        resultado = "Por favor, ingresa operandos válidos.";
    } else {
        switch (operador) {
            case "+":
                resultado = suma(operando1, operando2);
                break;
            case "-":
                resultado = resta(operando1, operando2);
                break;
            case "*":
                resultado = multiplicacion(operando1, operando2);
                break;
            case "/":
                resultado = division(operando1, operando2);
                break;
            default:
                resultado = "Operador no válido. Usa +, -, *, o /.";
        }
    }

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `Resultado: ${resultado}`;
    console.log("Resultado:", resultado);
});

// 4. Función para la suma de un array de números

function sumaArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// 5. Ejemplo de uso de sumaArray

const numeros = [1, 2, 3, 4, 5];
const sumaTotal = sumaArray(numeros);
console.log("Suma del array de números:", sumaTotal);
