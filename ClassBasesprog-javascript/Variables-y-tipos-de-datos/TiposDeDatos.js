  
    let userName; //Dato de Texto
    let userAge; //Dato Numerico
    let aprendeAProgramar = "true"; //Dato Booleano
    let birthYear; 

userName = prompt("Ingresa tu nombre Aqui") 
userAge = prompt("Ingresar tu edad Aqui")
birthYear = 2023 - userAge; //Operacion de Resta de Ambas Variables
document.write(`Bienvenido!! ${userName}. Acabo de ver que tu tienes ${userAge} años de Edad y Naciste en el año ${birthYear}`)