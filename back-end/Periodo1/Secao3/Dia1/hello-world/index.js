const numPar = 3;

function funcNumPar(valPar) {
if (valPar % 2 !== 0) throw new Error('O numero inserido nao eh par!')
console.log(`O numero ${valPar} eh par!`);
}

try {
funcNumPar(numPar);
} catch(error) {
console.log(error.message);
}
