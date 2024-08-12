const order = 
    {
    name: 'Luiz Silva',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
    
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 50,
    },
};

const customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    let entrega = `Ola, ${fullOrder.order.delivery.deliveryPerson}, entrega para ${fullOrder.name}, Telefone:${fullOrder.phoneNumber}, ${fullOrder.address.street}, ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`
    return entrega;
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    let pizzas=Object.keys(fullOrder.order.pizza).join(`, `);
    let entrega = `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total}.`
    return entrega;
}

console.log(orderModifier(order));