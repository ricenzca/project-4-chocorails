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
        // this.toggleClass = this.toggleClass.bind(this);
        // this.addChocolatesToCart = this.addChocolatesToCart.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3000/products/getall")
            .then(res => res.json())
            .then(
                result => {
                    // result here is an arr of objs[{}, {},...]
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

    toggleClass = e => {
        // console.log(e.target);
    };

    addChocolatesToCart = (index, cart, updateCart) => {
        const selectedChocolateObj = this.state.products[index];
        // console.log(selectedChocolateObj);
        // console.log(cart);
        //newCart is the cart(<App />) 'plus' selectedChocolateObj
        const newCart = [...cart, selectedChocolateObj];
        //We call the method from <App /> to set the state of cart in <App />..
        updateCart(newCart);
        // console.log(`updatedCart: `, newCart);
    };

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
                            {products.map((product, index) => (
                                <div
                                    className="card col-md-4"
                                    key={"choc_" + index}
                                >
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
                                        <button
                                            className="btn btn-light"
                                            onClick={() =>
                                                //Pass in the following from <App />
                                                this.addChocolatesToCart(
                                                    index,
                                                    this.props.cart,
                                                    this.props.updateCart
                                                )
                                            }
                                        >
                                            Add to Cart
                                        </button>
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
