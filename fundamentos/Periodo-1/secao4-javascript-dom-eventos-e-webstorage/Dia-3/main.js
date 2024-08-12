const firstLi = document.getElementById('first-li').classList.add(`caixas`);
const secondLi = document.getElementById('second-li').classList.add(`caixas`);
const thirdLi = document.getElementById('third-li').classList.add(`caixas`);
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

function addTech(event) {
    let classeTech = document.querySelector(`.tech`);
    if (classeTech) {
        classeTech.classList.remove(`tech`);
        event.target.className = `tech`;
    }
}
const caixas = document.querySelectorAll(`.caixas`);
for (const element of caixas) {
    element.addEventListener('click', addTech);
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

function changeText(event) {
    let classeTech = document.querySelector(`.tech`)
    classeTech.innerText = event.target.value;
}
input.addEventListener(`input`,changeText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

myWebpage.addEventListener(`dblclick`, () => {window.location=`https:\\www.google.com`;});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

myWebpage.addEventListener(`mouseover`, (event) => {
    event.target.style.color=`lime`})

myWebpage.addEventListener(`mouseout`, (event) => {
    event.target.style.color=`white`})
