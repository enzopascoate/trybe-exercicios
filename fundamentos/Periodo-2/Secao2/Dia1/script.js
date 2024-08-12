const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];


function findPersonByName(name) {
  try {
    for (let index = 0; index < clients.length; index += 1) {
      if (name === clients[index].name) {
        let cliente = clients[index];
        return `Destinatário: ${cliente.name}. Endereço: ${cliente.address.street}, ${cliente.address.number}, ${cliente.address.neighborhood}, ${cliente.address.city} - ${cliente.address.state}. CEP: ${cliente.address.cep}`;
      }
    }
    throw new Error('Pessoa não encontrada, tente novamente');
  } catch (error) {
    return error.message;
  }
}
function findPersonByPosition(position) {
  try {
    if (position >= 0 && position <= clients.length) {
      let cliente = clients[position - 1];
      return `Cliente: ${cliente.name}. email: ${cliente.email}`;
    }
    throw new Error(`Posição inválida, tente novamente`);
  } catch (error) {
    return error.message;
  }
};
const findPeopleByState = (state) => {
  // seu código aqui
  let array = [];
  try {
    for (let index = 0; index < clients.length; index += 1) {
      let estado = clients[index].address.state;

      if (state === estado) {
        array.push(clients[index].name);
      }
    }
    if (array.length < 1) throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro');
    return array;
  } catch (error) {
    return error.message;
  }
};

const studentRegister = (name, age) => {
  // seu código aqui

  try {
    if (name === undefined || age === undefined) throw new Error('Todas as informações são necessárias');
    if (typeof age !== 'number') throw new Error('Insira um numero.');
    if (age < 18) throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message;
  }

}
