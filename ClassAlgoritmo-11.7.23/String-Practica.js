let miRefran;

miRefran = "Más vale tarde que nunca";

let longitudRefran = miRefran.split('');

  let miRefranArray = miRefran.split(" ")

  let miRefranSinEspacio = miRefranArray.join("") 

  let miRefranCantidadLetra = miRefranSinEspacio.length;

let novenaLetra = miRefranSinEspacio[8];

let ultimaLetra = miRefran[miRefran.length - 1];

let indicePalabra = miRefran.indexOf("que");

if (indicePalabra < 0) {
  indicePalabra = miRefran.indexOf("de");
}

miRefran = miRefran.replace(/que|de/, "dado");

miRefran = miRefran.toUpperCase();

console.log("miRefran:", miRefran);
console.log("longitudRefran:", miRefranSinEspacio);
console.log("novenaLetra:", novenaLetra);
console.log("ultimaLetra:", ultimaLetra);
console.log("índicePalabra:", indicePalabra);
