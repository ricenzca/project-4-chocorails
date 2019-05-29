import React from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./product/product";
import Checkout from "./checkout/checkout";
import Admin from "./admin/admin";
import EmailSub from "./emailsub/emailsub";
import Promo from "./promo/promo";
import Cart from "./cart/cart";
import Footer from "./footer/footer";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cart: [
            ],
            subtotalBeforePromo: 0,
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
        newSubtotal = Math.round(newSubtotal * 100) / 100;
        this.setState({ subtotalAfterPromo: newSubtotal });
    };

    render() {
        const buttonStyle = {
            float: "right"
        };
        return (
            <div className="bg-main">
                <Switch>
                    <Route
                        exact
                        path="/checkout"
                        render={props => (
                            <Checkout
                                {...props}
                                cart={this.state.cart}
                                subtotal={this.state.subtotalBeforePromo}
                                adjustSubtotal={this.adjustSubtotal}
                                subtotalAfterPromo={
                                    this.state.subtotalAfterPromo
                                }
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <div>
                                <div className="sticky-top">
                                    <EmailSub />
                                    <nav
                                        style={{
                                            backgroundColor: "#822E81",
                                            color: "white"
                                        }}
                                    >
                                        <h1 className="d-inline">
                                            Choco on Rails
                                        </h1>
                                        <button
                                            className="btn cart-btn"
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                            style={buttonStyle}
                                        >
                                            Cart ({this.state.cart.length})
                                        </button>
                                    </nav>
                                </div>
                                <Product
                                    {...props}
                                    updateCart={this.updateCart}
                                    cart={this.state.cart}
                                />
                                <Cart
                                    {...props}
                                    updateCart={this.updateCart}
                                    cart={this.state.cart}
                                    subtotal={this.state.subtotalBeforePromo}
                                />
                            </div>
                        )}
                    />
                    <Route exact path="/admin" component={Admin} />
                    )} />
                </Switch>
                <br /> <br /> <br />
                <Footer />
            </div>
        );
    }
}