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
                {
                    id: 1,
                    brand: "Krakakoa",
                    name: "Arenga 100% Dark",
                    img_url:
                        "https://www.krakakoa.com/wp-content/uploads/2018/04/100-dark-chocolate.jpg",
                    origin: "Sumatra, Indonesia",
                    ingredients: "Cocoa beans",
                    desc:
                        "This is 100% Sumatran cocoa at its purest. A complex bar with robust natural acidity of fermented cocoa and complex earthy aromas.",
                    price: 3.6,
                    weight: 50,
                    quantity: 2
                },
                {
                    id: 2,
                    brand: "Krakakoa",
                    name: "Arenga 85% Dark",
                    img_url:
                        "https://www.krakakoa.com/wp-content/uploads/2018/04/85-dark-chocolate.jpg",
                    origin: "Sulawesi, Indonesia",
                    ingredients: "Cocoa beans, Palm sugar, Sunflower lecithin",
                    desc:
                        "We blend Arenga palm sugar, harvested from the rainforests of Sulawesi, with sustainably grown cocoa, creating delicious chocolate with caramel notes that is also a force for wildlife conservation.",
                    price: 4,
                    weight: 50,
                    quantity: 3
                }
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
            <div>
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
                                            backgroundColor: "rgb(63, 62, 58)",
                                            color: "white"
                                        }}
                                    >
                                        <h1 className="d-inline">
                                            Choco on Rails
                                        </h1>
                                        <button
                                            className="btn btn-primary"
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
