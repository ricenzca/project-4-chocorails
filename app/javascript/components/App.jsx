import React from "react";
import { Route, Switch } from "react-router-dom";

import Product from './product/product'
import Checkout from './checkout/checkout'
import Admin from './admin/admin'
import EmailSub from './emailsub/emailsub'
import Promo from './promo/promo'

export default class App extends React.Component {

    constructor () {
        super();
        this.state = {
            cart: [
                "AN: need the add to cart functionality",
                "CH: need to render nicely",
                "LL: need to grab price of all items in basket and set subtotal in state via method"
            ],
            subtotalBeforePromo: 100,
            subtotalAfterPromo: null,
        }
    }

    adjustSubtotal = (newSubtotal) => {
      console.log("adjustSubtotal!");
      this.setState({subtotalAfterPromo: newSubtotal})
    }

	render() {
        // console.log("in app component", this.state)
		return (
			<div>
        <EmailSub />
				<Switch>
					<Route exact path= "/checkout"
           render= {(props) => <Checkout {...props} cart={this.state.cart} />}
          />
          <Route exact path="/" component={Product} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/promo" 
          render= {(props) => <Promo {...props} subtotal={this.state.subtotalBeforePromo} adjustSubtotal={this.adjustSubtotal} subtotalAfterPromo={this.state.subtotalAfterPromo} />}
          />
				</Switch>
			</div>
		);
	}
}
