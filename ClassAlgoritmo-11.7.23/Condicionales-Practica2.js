let num1 = parseFloat(prompt("Ingresa el primer número:"));

let operacion = prompt("Ingresa la operación (+, -, *, /):");

let num2 = parseFloat(prompt("Ingresa el segundo número:"));

let resultado;

if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} else if (operacion === "*") {
  resultado = num1 * num2;
} else if (operacion === "/") {
  if (num2 !== 0) {
    resultado = num1 / num2;
  } else {
    alert("Error: No se puede dividir por cero.");
  }
} else {
  alert("Operación no válida.");
}

if (resultado !== undefined) {
  alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
}
document.write(`El Resultado del Calculo es = ${resultado}`) 