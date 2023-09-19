let maior;
let num1 = 9;
let num2 = 8;
let num3 = 11;

if (num1 > num2) {
    maior = num1;
    if (num3 > num1) {
        maior = num3;
    }
}
else {
    maior = num2;
    if (num3 > num2) {
        maior = num3;
    }
}
console.log(maior);
