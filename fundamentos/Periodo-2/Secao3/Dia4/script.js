const countries = [
    {
        name: 'Afghanistan',
        region: 'Asia',
        currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
        capital: 'Kabul',
        population: 40218234,
        area: 652230
    },
    {
        name: 'Aland Islands',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Mariehamn',
        population: 28875,
        area: 1580
    },
    {
        name: 'Albania',
        region: 'Europe',
        currencies: [{ code: 'ALL', name: 'Albanian lek' }],
        capital: 'Tirana',
        population: 2837743,
        area: 28748
    },
    {
        name: 'Algeria',
        region: 'Africa',
        currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
        capital: 'Algiers',
        population: 44700000,
        area: 2381741
    },
    {
        name: 'American Samoa',
        region: 'Oceania',
        currencies: [{ code: 'USD', name: 'United States Dollar' }],
        capital: 'Pago Pago',
        population: 55197,
        area: 199
    },
    {
        name: 'Andorra',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Andorra la Vella',
        population: 77265,
        area: 468
    },
    {
        name: 'Angola',
        region: 'Africa',
        currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
        capital: 'Luanda',
        population: 32866268,
        area: 1246700
    },
    {
        name: 'Anguilla',
        region: 'Americas',
        currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
        capital: 'The Valley',
        population: 13452,
        area: 91
    }
];


//Ex 1

const getPopulation = (array) => array.reduce((acumulador, elemento) => acumulador + elemento.population, 0)

//console.log(getPopulation(countries))


//Ex 2

const longestName = (array) => array.reduce((acumulador, pais) => acumulador.length < pais.name.length ? pais.name : acumulador, '')

//console.log(longestName(countries))


//Ex 3 

const totalAreaByRegion = (array, region = 'Europe') => array.reduce((acumulador, pais) => pais.region === region ? acumulador + pais.area : acumulador, 0);

//console.log(totalAreaByRegion(countries))


//Ex 4

/*const getLargestCountriesByRegion = (array) => {
    return array.reduce((acumulador, pais) => {
        switch (pais.region) {
            case 'Asia':
                if (!acumulador.Asia || acumulador.Asia.area < pais.area) acumulador.Asia = pais;
                break;
            case 'Americas':
                if (!acumulador.Americas || acumulador.Americas.area < pais.area) acumulador.Americas = pais;
                break;
            case 'Africa':
                if (!acumulador.Africa || acumulador.Africa.area < pais.area) acumulador.Africa = pais;
                break;
            case 'Europe':
                if (!acumulador.Europe || acumulador.Europe.area < pais.area) acumulador.Europe = pais;
                break;
            case 'Oceania':
                if (!acumulador.Oceania || acumulador.Oceania.area < pais.area) acumulador.Oceania = pais;
                break;
        }
        return acumulador;
    }, { Asia: null, Europe: null, Americas: null, Oceania: null, Africa: null });
}
*/

const getLargestCountriesByRegion = (array) => {
    return array.reduce((acumulador, pais) => {
        let regiao = pais.region
        if (!acumulador[regiao] || pais.area > acumulador[regiao].area) {
            acumulador[regiao] = pais;
        }
        return acumulador;
    }, {});

};

console.log(getLargestCountriesByRegion(countries))