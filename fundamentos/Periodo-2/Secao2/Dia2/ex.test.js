// removeItem.js

function removeItem(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

describe('teste', () => {
    it('retorna array', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('retorna array 2', () => {
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('retorna array 3', () => {
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

// myFizzBuzz.js

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

describe('teste2', () => {
    it('fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('fizz', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });
    it('buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    it('neither', () => {
        expect(myFizzBuzz(2)).toBe(2);
    });
    it('notNumber', () => {
        expect(myFizzBuzz('a')).toBe(false);
    });
});


// encodeDecode.js

const mapString = (objectMap, string) => {
    const splitString = string.split('');
    const mappedArray = [];
  
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const mappedValue = objectMap[character];
      
      if (mappedValue) {
        mappedArray.push(mappedValue);
      } else {
        mappedArray.push(character);
      }
    }
  
    return mappedArray.join('');
  }
  
  const encode = (string) => {
    const map = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return mapString(map, string);
  }
  
  const decode = (string) => {
    const map = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return mapString(map, string);
  }



  describe('encode e decode', () => {
    it('encode e decode sao funcoes', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('encode vogais', () => {
        expect(encode('aeiou')).toBe('12345');

    });
    it('decode numeros', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    it('nao converte', () => {
        expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
        expect(decode('06789')).toBe('06789');
    });
    it('mesmo numero caracteres', () => {
        expect(encode('aeiou').length).toBe(5);
        expect(decode('123451').length).toBe(6);
    });
  });


// techList.js

function techList(array,nome) {
    
    if(array.length===0) {
        return 'Vazio!';
    }

    let arrayLista = [];
    let arrayOrdenado =array.sort();
    
    for(let index=0;index<array.length;index+=1) {
        arrayLista.push({
            tech: `${arrayOrdenado[index]}`,
            name: nome,
          });
    }

    
    return arrayLista;
};

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// hydrate.js


function hydrate(string) {
    
    const stringCortada = string.split('');
    let coposAgua=0;

    for(let index=0;index<stringCortada.length;index+=1) {
        let viraNumero= parseInt(stringCortada[index]);

        if(viraNumero) {
            coposAgua+=viraNumero;
        }
    }


    if(coposAgua===1){
        return `${coposAgua} copo de água`
    }

    return `${coposAgua} copos de água`

}





describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});