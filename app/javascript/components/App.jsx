import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Product from './product/product'
import Checkout from './checkout/checkout'

export default class App extends React.Component {

    constructor () {
        super();
        this.state = {
            cart: "hello"
        }
    }

	render() {
        console.log("in app component", this.state)
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