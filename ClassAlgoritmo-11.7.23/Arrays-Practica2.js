let myString = 'Javascript+es+super+cool';

let myArray = myString.split('+');

console.log("<1> myArray:", myArray);

let arrayLength = myArray.length;
console.log("<2> arrayLength:", arrayLength);

let lastItem = myArray[arrayLength - 1];
console.log("<3> lastItem:", lastItem);

let myInverseArray = myArray.slice().reverse();
console.log("<4> myInverseArray:", myInverseArray);

myInverseArray.push("Siempre");
console.log("<5> myInverseArray con elemento agregado:", myInverseArray);
