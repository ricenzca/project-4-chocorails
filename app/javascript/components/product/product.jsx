import React from "react";
import { Link } from "react-router-dom";
// import style from "./style.scss";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3000/products/getall")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        products: result
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    toggleClass(e) {
        console.log(e.target);
    }

    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Link to="/checkout">Checkout LINK!</Link>
                    <div className="container-fluid">
                        <div
                            className="row"
                            onMouseOver={e => {
                                this.toggleClass(e);
                            }}
                        >
                            {products.map(product => (
                                <div className="card col-md-4">
                                    <img
                                        className="card-img-top"
                                        src={product.img_url}
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {product.name}
                                        </h4>
                                        <p className="card-text">
                                            ${product.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link to="/checkout">Checkout LINK!</Link>
                    <h1>Product!!!</h1>
                </div>
            );
        }
    }
}

export default Product;
