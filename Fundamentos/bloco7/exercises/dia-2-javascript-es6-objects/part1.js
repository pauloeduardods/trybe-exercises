const order = {
  name: 'Rafael Andrade',
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
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  //modifier
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  //string return
  let pizzas = Object.keys(order.order.pizza);
  pizzas = pizzas.join(', ');
  let drinks = Object.keys(order.order.drinks);
  let drinksName = [];
  for (let drink of drinks) {
    drinksName.push(order.order.drinks[drink].type);
  }
  drinksName = drinksName.join(', ');
  return `Olá ${order.name}, o total do seu pedido de ${pizzas} e ${drinksName} é R$ ${order.payment.total}.`;
}

console.log(orderModifier(order));