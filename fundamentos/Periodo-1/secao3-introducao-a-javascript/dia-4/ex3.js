const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  const getsData=(object,array,position) => {
    let objeto=object[array][position-1];
    return objeto;
  }

  const studentSum=() => {
    let sumStudent=0;
    for(let index=0;index<school.lessons.length;index++) {
        sumStudent+=school.lessons[index].students;
    }
    return sumStudent;
  }

function checkKey(object,key) {
    let exists= false;
    for(let index=0;index<object[`lessons`].length;index++) {
//Referencia: https://dmitripavlutin.com/check-if-object-has-property-javascript/#:~:text=The%20first%20way%20is%20to,own%20properties%20of%20the%20object.
        if(object.lessons[index].hasOwnProperty(key)) {
            exists=true;
            return exists;
        }
    }
    return exists;
}





