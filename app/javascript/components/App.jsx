import React from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./product/product";
import Checkout from "./checkout/checkout";
import Admin from "./admin/admin";
import EmailSub from "./emailsub/emailsub";
import Promo from "./promo/promo";
import Cart from "./cart/cart";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            subtotalBeforePromo: 100,
            subtotalAfterPromo: null
        };
    }

    //Takes in a new arr(with selected chocolates) and 'updates' this.state.cart
    updateCart = newCart => {
        console.log(newCart);
        this.setState({
            cart: newCart
        });
    };

    adjustSubtotal = newSubtotal => {
        console.log("adjustSubtotal!");
        this.setState({ subtotalAfterPromo: newSubtotal });
    };

    render() {
        // console.log("in app component", this.state)

        return (
            <div>
                <EmailSub />
                <Switch>
                    <Route
                        exact
                        path="/checkout"
                        render={props => (
                            <Checkout {...props} cart={this.state.cart} />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Product
                                {...props}
                                updateCart={this.updateCart}
                                cart={this.state.cart}
                            />
                        )}
                    />
                    <Route exact path="/admin" component={Admin} />
                    <Route
                        exact
                        path="/promo"
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
