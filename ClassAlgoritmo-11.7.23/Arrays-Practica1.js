let myArray;

myArray = ["[R]Residente"], ["Carla Morrisong"], ["Adele"];

    myArray[0] = "Oreja de Vand God";
    myArray[1] = "Linkin Park";

    myArray.unshift("Pompownik");

let arrayString = myArray.join(" - ");

console.log("myArray:", myArray);
console.log("arrayString:", arrayString);


let mixedArray = [
    55,
    "Mi, Suerte, JS",
    true,
    null,
    undefined,         
    [1, 2, 3],        
    { nombre: "Lendert", edad: 21 }, 
    1234567890123456789012345678901234567890n 
  ];
  
  console.log(`Number: ${mixedArray[0]}`);
  console.log(`String: ${mixedArray[1]}`);
  console.log(`Boolean: ${mixedArray[2]}`);
  console.log(`Null: ${mixedArray[3]}`);
  console.log(`Undefined: ${mixedArray[4]}`);
  console.log(`Array: ${mixedArray[5]}`);
  console.log(`Object Name: ${mixedArray[6].nombre}`);
  console.log(`Object Age: ${mixedArray[6].edad}`);
  console.log(`BigInt: ${mixedArray[7]}`);