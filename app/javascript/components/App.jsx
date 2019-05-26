import React from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./product/product";
import Checkout from "./checkout/checkout";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Product} />
                    <Route exact path="/checkout" component={Checkout} />
                </Switch>
            </div>
        );
    }
}
