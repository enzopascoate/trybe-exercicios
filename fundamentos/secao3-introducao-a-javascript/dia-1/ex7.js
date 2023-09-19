let bruto = 2500;
let inss;

if (bruto < 1556.95) {
    inss = bruto * 0.08;
}
else if (1556.95 <= bruto < 2594.93) {
    inss = bruto * 0.09;
}
else if (2594.93 <= bruto <= 5189, 82) {
    inss = bruto * 0.11;
}
else {
    inss = 570.88;
}

let salariobase = bruto - inss;

let ir;

if (salariobase<1903.99) {
    ir=0;
}
else if(1903.99<=salariobase<2826,66) {
    ir=(salariobase*0.075)-142.80;
}
else if(2826.66<=salariobase<3751.06) {
    ir=(salariobase*0.15)-354.80;
}
else if(3751.06<=salariobase<=4664.68) {
    ir=(salariobase*0.225)-636.13;
}
else {
    ir=(salariobase*0.275)-869.36;
}

let liquido = salariobase-ir;
console.log(`O salario final eh `+ liquido);



