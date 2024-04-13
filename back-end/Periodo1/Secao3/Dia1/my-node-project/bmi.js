const readline = require('readline-sync');
const readFileSync = require('fs').readFileSync;
const { writeFile } = require('fs').promises;

function CalcBMI() {
    const peso = readline.questionFloat('Digite seu peso: ');
    const altura = readline.questionFloat('Digite sua altura: ');
    const BMI = peso / (altura * altura);
    if (BMI < 18.5) {
        return console.log(`Seu IMC indica: Abaixo do peso - IMC: ${BMI.toFixed(2)}`);
    } else if (BMI >= 18.5 && BMI < 25) {
        return console.log(`Seu IMC indica: Peso normal - IMC: ${BMI.toFixed(2)}`);
    } else if (BMI >= 25 && BMI < 30) {
        return console.log(`Seu IMC indica: Sobrepeso - IMC: ${BMI.toFixed(2)}`);
    } else if (BMI >= 30 && BMI < 35) {
        return console.log(`Seu IMC indica: Obesidade grau 1 - IMC: ${BMI.toFixed(2)}`);
    } else if (BMI >= 35 && BMI < 40) {
        return console.log(`Seu IMC indica: Obesidade grau 2 - IMC: ${BMI.toFixed(2)} `);
    } else if (BMI >= 40) {
        return console.log(`Seu IMC indica: Obesidade grau 3 - IMC: ${BMI.toFixed(2)}`);
    } else {
        return console.log('Erro ao calcular IMC');
    }
}
// Ex 6

function readFile(filePath) {
    const promise = new Promise((resolve, reject) => {
        try {
            const file = readFileSync(filePath, 'utf8')
            const data = JSON.parse(file);
            resolve(data);
        } catch {
            reject(new Error(`não foi possível ler o arquivo localizado em: ${filePath}.`));
        }
    })
    return promise;
}

// A - COM ASYNC E AWAIT

async function PrintCharacters() {
    try {
        const data = await readFile('simpsons.json');
        console.log("\nMostrando todos os personagens:");
        const strings = data.map(({ id, name }) => `${id} - ${name}`);
        strings.forEach((string) => console.log(string));
        return strings;
    } catch (error) {
        console.error(error.message);
    }
}

/* A - COM THEN E CATCH

function PrintCharacters() {
    const promise = new Promise((resolve, reject) => {
        readFile('simpsons.json')
            .then((data) => {
                console.log("\nMostrando todos os personagens:")
                const strings = data.map(({ id, name }) => `${id} - ${name}`);
                strings.forEach((string) => console.log(string));
                resolve(strings);
            })
            .catch((error) => reject(error.message))
    });

    return promise;
}
*/

// B - COM ASYNC E AWAIT

async function searchCharacter(id) {
    try {
        const data = await readFile('simpsons.json');
        const character = data.find(character => character.id == id);

        if (character) {
            console.log("\nExibindo dados do personagem:");
            console.log(character);
            return character;
        } else {
            throw new Error('ID não encontrado');
        }
    } catch (error) {
        console.error(error.message);
    }
}

/* B - COM THEN E CATCH

function searchCharacter(id) {
    const promise = new Promise(async (resolve, reject) => {
        readFile('simpsons.json')
            .then((data) => {
                const character = data.find((character) => character.id == id);
                if (character) {
                    console.log(character);
                    resolve(character);
                } else {
                    reject(new Error('id não encontrado'));
                }
            })
            .catch((error) => reject(error.message));
    });

    return promise;
}
*/


// C

async function removeCharacters() {

    try {
        const data = await readFile('simpsons.json');
        const newData = data.filter(character => character.id != "10" && character.id != "6");

        await writeFile('simpsons.json', JSON.stringify(newData));

        console.log('\nPersonagens removidos com sucesso!');

        return PrintCharacters();
    } catch {
        return console.error('\nErro ao remover personagens.');
    }
}

// D

async function createNewFile() {
    try {
        const data = await readFile('simpsons.json');
        const newData = data.filter(character => character.id > 0 && character.id <= 4);
        await writeFile('simpsonsFamily.json', JSON.stringify(newData));
        return console.log('\nArquivo "simpsonsFamily.json" criado com sucesso!');
    } catch (error) {
        return console.error(error.message);
    }
}


// E 

async function AddNelson() {
    try {
        const allData = await readFile('simpsons.json');
        const familyData = await readFile('simpsonsFamily.json');

        const NelsonData = allData.find((character) => character.name === "Nelson Muntz");

        if (NelsonData) {
            const newData = [...familyData, NelsonData];
            await writeFile('simpsonsFamily.json', JSON.stringify(newData));
            return console.log('\nNelson Muntz adicionado com sucesso ao arquivo "simpsonsFamily.json".');
        } else {
            throw new Error('Personagem Nelson Muntz não encontrado.');
        }
    }
    catch (error) {
        return console.error(error.message);
    }
}


// F 

async function switchNelsonForMaggie() {
    try {
        const allData = await readFile('simpsons.json');
        const familyData = await readFile('simpsonsFamily.json');

        const familyWithoutNelsonData = await familyData.filter((character) => character.name !== "Nelson Muntz");
        const MaggieData = allData.find((character) => character.name === "Maggie Simpson");

        if (MaggieData) {
            writeFile('simpsonsFamily.json', JSON.stringify([...familyWithoutNelsonData, MaggieData]));
            return console.log('\nNelson Muntz substituido com sucesso por Maggie Simpson no arquivo "simpsonsFamily.json".');
        } else {
            throw new Error('\nPersonagem Maggie Simpson não encontrada.');
        }

    } catch (error) {
        return console.error(error.message);
    }
}

// MAIN
async function main() {
    PrintCharacters()
    .then(() => searchCharacter(1))
    .then(() => removeCharacters())
    .then(() => createNewFile())
    .then(() => AddNelson())
    .then(() => switchNelsonForMaggie())
    .catch((error) => console.error(error.message));
}
main();