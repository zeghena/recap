
// 1- Scambia il contenuto di due variabili a e b, in modo che la prima contenga il valore contenuto nella seconda e viceversa:

// let a = "montagna";
// let b = "mare";

// console.log("variabile a" + a , "variabile b" + b)

// let aiuto = a;
// b = a;
// let aiutone = b;
// a = b;

// console.log(a + b)

// 2- Stampa questo bellissimo alberello in console:

// *
// **
// ***
// ****
// *****
// ******
// ||

let asterisco = ""
console.log(asterisco)



for(let i = 0; i < 6; i ++){
  // asterisco = asterisco + i;
  asterisco = asterisco + "*";
console.log(asterisco)
}

const tronco = "||";
console.log(tronco)

// 3- Dato questo array di numeri crea due array, uno con tutti i numeri pari e l'altro con tutti quelli dispari

const numeri = [4, 5, 3,1, 11, 21, 23, 0 , 2, 44, 19, 99, 100, 2, 3, 1]

const pari = [];
const dispari = [];

for(i = 0; i < numeri.length; i ++){
  if(numeri[i] % 2 == 0)
  pari.push(numeri[i]);
  else
  dispari.push(numeri[i]);
}

console.log(pari)
console.log(dispari)