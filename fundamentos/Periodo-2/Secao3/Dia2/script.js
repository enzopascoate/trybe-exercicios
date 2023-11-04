const pokemons = [
    { name: 'Pikachu', type: 'Elétrico', level: 25 },
    { name: 'Charizard', type: 'Fogo', level: 50 },
    { name: 'Bulbasaur', type: 'Planta', level: 10 },
    { name: 'Gyarados', type: 'Água', level: 40 },
    { name: 'Alakazam', type: 'Psíquico', level: 35 },
    { name: 'Snorlax', type: 'Normal', level: 50 },
    { name: 'Mewtwo', type: 'Psíquico', level: 70 },
    { name: 'Dragonite', type: 'Dragão', level: 55 },
    { name: 'Mew', type: 'Psíquico', level: 30 },
    { name: 'Articuno', type: 'Gelo', level: 60 },
    { name: 'Zapdos', type: 'Elétrico', level: 60 },
    { name: 'Moltres', type: 'Fogo', level: 60 },
    { name: 'Gengar', type: 'Fantasma', level: 45 },
    { name: 'Machamp', type: 'Lutador', level: 50 },
    { name: 'Lapras', type: 'Água', level: 35 },
    { name: 'Venusaur', type: 'Planta', level: 45 },
    { name: 'Blastoise', type: 'Água', level: 55 },
    { name: 'Golem', type: 'Pedra', level: 40 },
    { name: 'Arcanine', type: 'Fogo', level: 55 },
    { name: 'Jolteon', type: 'Elétrico', level: 40 },
];



//Ex 1
const filterStrongPokemons = (array) => array.filter(({ level }) => level > 35);



//console.log(filterStrongPokemons(pokemons))


//Ex 2

const getStrongPokemons = (array) => array.filter(({ level }) => level > 50).map(({ name }) => name);

//console.log(getStrongPokemons(pokemons));


//Ex 3

const sortPokemonsByLevel = (array) => array.sort((a, b) => a.level - b.level);


//console.log(sortPokemonsByLevel(pokemons))


//Ex 4

const sortPokemonos = (array) => array.sort((a,b) => {if(a.level===b.level) {return a.name.localeCompare(b.name)} return a.level - b.level;});

//console.log(sortPokemonos(pokemons))