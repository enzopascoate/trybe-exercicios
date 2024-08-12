//Ex 1 - Funcao Celsius

const celsius = (array) => array.map((numero) => numero = (numero * 9 / 5) + 32);

const temperaturesCelsius = [23, 10, 32, 21, 47]
//console.log(celsius(temperaturesCelsius));

//Ex 2 - Funcao Raizes

const raizes = (array) => {
    return array.map((numero) => {
        if (numero < 0) {
            return NaN;
        }
        return numero = Math.sqrt(numero);
    })
};

const numbers = [4, 9, -1, 16, -5, 25];
//console.log(raizes(numbers));

//Ex 3 Base de Dados

const livros = {
    books: [
        {
            id: 1,
            name: 'As Crônicas de Gelo e Fogo',
            genre: 'Fantasia',
            author: {
                name: 'George R. R. Martin',
                birthYear: 1948,
            },
            releaseYear: 1991,
        },
        {
            id: 2,
            name: 'O Senhor dos Anéis',
            genre: 'Fantasia',
            author: {
                name: 'J. R. R. Tolkien',
                birthYear: 1892,
            },
            releaseYear: 1954,
        },
        {
            id: 3,
            name: 'Fundação',
            genre: 'Ficção Científica',
            author: {
                name: 'Isaac Asimov',
                birthYear: 1920,
            },
            releaseYear: 1951,
        },
        {
            id: 4,
            name: 'Duna',
            genre: 'Ficção Científica',
            author: {
                name: 'Frank Herbert',
                birthYear: 1920,
            },
            releaseYear: 1965,
        },
        {
            id: 5,
            name: 'A Coisa',
            genre: 'Terror',
            author: {
                name: 'Stephen King',
                birthYear: 1947,
            },
            releaseYear: 1986,
        },
    ],
};

//Ex 3 formatedBookNames

const formatedBookNames = (arrayLista) => arrayLista.books.map((livroDaVez) => `${livroDaVez.name} - ${livroDaVez.genre} - ${livroDaVez.author.name}`);

console.log(formatedBookNames(livros));


//Ex 4 nameAndAge

const nameAndAge = (arrayLista) => arrayLista.books.map((livroDaVez) => ({author:livroDaVez.author.name,age:livroDaVez.releaseYear-livroDaVez.author.birthYear}));

console.log(nameAndAge(livros));
