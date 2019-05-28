import React from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./product/product";
import Checkout from "./checkout/checkout";
import Admin from "./admin/admin";
import EmailSub from "./emailsub/emailsub";
import Promo from "./promo/promo";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [
        {brand: 'Krakakoa', name: 'Arenga 100% Dark', img_url: 'https://www.krakakoa.com/wp-content/uploads/2018/04/100-dark-chocolate.jpg', origin: 'Sumatra, Indonesia', ingredients: 'Cocoa beans', desc: 'This is 100% Sumatran cocoa at its purest. A complex bar with robust natural acidity of fermented cocoa and complex earthy aromas.', price: 3.6, weight: 50, quantity: 2
        },
        {brand: 'Krakakoa', name: 'Arenga 85% Dark', img_url: 'https://www.krakakoa.com/wp-content/uploads/2018/04/85-dark-chocolate.jpg', origin: 'Sulawesi, Indonesia', ingredients: 'Cocoa beans, Palm sugar, Sunflower lecithin', desc: 'We blend Arenga palm sugar, harvested from the rainforests of Sulawesi, with sustainably grown cocoa, creating delicious chocolate with caramel notes that is also a force for wildlife conservation.', price: 4, weight: 50, quantity: 3
        }
      ],
      subtotalBeforePromo: 99.918,
      subtotalAfterPromo: null
    };
  }

  //Takes in a new arr(with selected chocolates) and 'updates' this.state.cart
  updateCart = newCart => {
    this.setState({
      cart: newCart
    });
  };

  adjustSubtotal = newSubtotal => {
    console.log("adjustSubtotal!");
    newSubtotal = Math.round(newSubtotal*100)/100;
    this.setState({ subtotalAfterPromo: newSubtotal });
  };

  render() {
    // console.log("in app component", this.state)

    return (
      <div>
        <EmailSub />
        <Switch>
          <Route exact path="/checkout"
          render={props => (
            <Checkout {...props} cart={this.state.cart} subtotal={this.state.subtotalBeforePromo}
              adjustSubtotal={this.adjustSubtotal}
              subtotalAfterPromo={
                this.state.subtotalAfterPromo
              }
            />
            )}
          />
          <Route exact path="/"
          render={props => (
            <div>
            <Product
            {...props}
            updateCart={this.updateCart}
            cart={this.state.cart}
            />
            </div>
            )}
          />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/promo"
          render={props => (
            <Promo
              {...props}
              subtotal={this.state.subtotalBeforePromo}
              adjustSubtotal={this.adjustSubtotal}
              subtotalAfterPromo={
                this.state.subtotalAfterPromo
              }
            />
            )}
          />
        </Switch>
      </div>
    );
  }
}

