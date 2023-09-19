let peca = "rEI";
let pecaLower=peca.toLowerCase();
let movimentos = '';

switch (pecaLower) {

    case 'peao': movimentos = 'Peão: Anda uma casa pra frente ou mata uma casa na diagonal. Não pode recuar.';
        break;
    case 'torre': movimentos = 'Torre: Anda quantas casas desejar, tanto na horizontal quanto na vertical. Pode recuar.';
        break;
    case 'bispo': movimentos = 'Bispo: Anda diagonalmente quantas casas desejar. Pode recuar.';
        break;
    case 'cavalo': movimentos = 'Cavalo: Anda em formato de L. Isto é, anda duas casas na vertical e uma à horizontal da segunda casa percorrida na vertical. Pode recuar.';
        break;
    case 'rainha': movimentos = 'Rainha: Anda quantas casas desejar e em qualquer direção. Pode recuar.';
        break;
    case 'rei': movimentos = 'Rei: Anda apenas uma casa, mas em qualquer direção. Pode recuar.';
        break;
    default: movimentos = 'Essa peça não existe.';
        break
}
console.log(movimentos);