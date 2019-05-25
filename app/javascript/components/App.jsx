import React from "react";
import Product from "./product/product";

export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Product />
            </div>
        );
    }
}
