import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Product from './product/product'
import Checkout from './checkout/checkout'

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Switch>

					<Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/" component={Product} />
				</Switch>
			</div>
			);
	}
}