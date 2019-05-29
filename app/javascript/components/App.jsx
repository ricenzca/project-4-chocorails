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

    updateCart = (newCart, updatedAmount) => {
        console.log(`What is inside cart now, price `, newCart, updatedAmount);
        this.setState({
            cart: newCart,
            subtotalBeforePromo: updatedAmount
        });
    };

    adjustSubtotal = newSubtotal => {
        console.log("adjustSubtotal!");
        this.setState({ subtotalAfterPromo: newSubtotal });
    };

    render() {
        const buttonStyle = {
            position: "absolute",
            right: "0",
            top: "160px"
        };

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
                            <div>
                                <header>
                                    <h1 className="d-inline">Choco on Rails</h1>
                                    <button
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        style={buttonStyle}
                                    >
                                        Cart ({this.state.cart.length})
                                    </button>
                                </header>
                                <Product
                                    {...props}
                                    updateCart={this.updateCart}
                                    // updateTotal={this.updateTotal}
                                    cart={this.state.cart}
                                />
                                <Cart
                                    {...props}
                                    updateCart={this.updateCart}
                                    // updateTotal={this.updateTotal}
                                    cart={this.state.cart}
                                    subtotal={this.state.subtotalBeforePromo}
                                />
                            </div>
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
