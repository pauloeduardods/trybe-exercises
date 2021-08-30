import React from 'react';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        <Order order={({ user: headphone.user, product: headphone.product, price: headphone.price })} />
        <Order order={({ user: energyDrink.user, product: energyDrink.product, price: energyDrink.price})}/>
      </div>
    );
  }
}

export default App;