import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Product from './product/product'
import Checkout from './checkout/checkout'

export default class App extends React.Component {

    constructor () {
        super();
        this.state = {
            cart: [
                "AN: need the add to cart functionality",
                "CH: need to render nicely",
                "LL: need to grab price of all items in basket and set subtotal in state via method"
            ]
        }
    }

	render() {
        // console.log("in app component", this.state)
		return (
			<div>
				<Switch>
					<Route
                        exact path= "/checkout"
                        render= {(props) => <Checkout {...props} cart={this.state} />}
                    />
                    <Route exact path="/" component={Product} />
				</Switch>
			</div>
			);
	}
}