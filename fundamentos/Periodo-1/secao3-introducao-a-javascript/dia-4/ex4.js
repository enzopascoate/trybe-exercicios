
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  function countFruits(array) {
    let fruits= [];
    for(let index=0;index<array.length;index++) {
        if(fruits.includes(array[index])) {

        }
        else {
            fruits.push(array[index]);
        }
    }
    const fruitQuantities= {

    }
    //Referencia: https://dmitripavlutin.com/check-if-object-has-property-javascript/#:~:text=The%20first%20way%20is%20to,own%20properties%20of%20the%20object.
    for(let index=0;index<fruits.length;index++) {
        if(fruitQuantities.hasOwnProperty(fruits[index])) {

        }
        else{
            fruitQuantities[fruits[index]] = 1;
        }
    }
    for(let index=0;index<array.length;index++) {
        if(fruitQuantities.hasOwnProperty(array[index])) {
            fruitQuantities[array[index]] += 1;
        }
    
    }
    let arrayFrutas=Object.entries(fruitQuantities).join(`, `);
    return `Sua cesta possui ${arrayFrutas}`
  }
  console.log(countFruits(basket));