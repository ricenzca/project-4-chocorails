import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Product from './product/product'
import Checkout from './checkout/checkout'
import Admin from './admin/admin'
import EmailSub from './emailsub/emailsub'

export default class App extends React.Component {

	render() {
		return (
			<div>
                <EmailSub />
				<Switch>
					<Route exact path="/" component={Product} />
					<Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/admin" component={Admin} />
				</Switch>
			</div>
			);
	}
}