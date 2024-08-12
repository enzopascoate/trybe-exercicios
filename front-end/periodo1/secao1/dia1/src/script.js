import './style.css';
import validator from 'validator';


const inputText = document.querySelector('#insertValue');
const typeDocument = document.querySelector('#selectDocument');
const button = document.querySelector('button');
const showText = document.querySelector('h3');


const validate = () => {
    switch (typeDocument.value) {
        case 'CPF':
            showText.innerText = `A validacao retornou ${validator.isTaxID(inputText.value,'pt-BR')}`
            break;
        case 'EMAIL':
            showText.innerText = `A validacao retornou ${validator.isEmail(inputText.value)}`
            break;
    }
}

button.addEventListener('click', validate);

