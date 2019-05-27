import React from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./product/product";
import Checkout from "./checkout/checkout";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cart: []
        };
    }

    //Takes in a new arr(with selected chocolates) and 'updates' this.state.cart
    updateCart = newCart => {
        this.setState({
            cart: newCart
        });
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/checkout"
                        render={props => (
                            <Checkout {...props} cart={this.state} />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <div>
                                <Product
                                    {...props}
                                    updateCart={this.updateCart}
                                    cart={this.state.cart}
                                />
                                <Cart {...props} cart={this.state.cart} />
                            </div>
                        )}
                    />
                </Switch>
            </div>
        );
    }
}
