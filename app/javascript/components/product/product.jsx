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

    addChocolatesToCart = (index, cart, updateCart) => {
        const selectedChocolateObj = this.state.products[index];
        let currentCart;
        //if cart is not empty
        if (cart.length > 0) {
            //if choco added before
            if (cart.some(choco => choco.id === selectedChocolateObj.id)) {
                let selectedId = selectedChocolateObj.id;
                cart.forEach(chocoInCart => {
                    if (chocoInCart.id === selectedId) {
                        chocoInCart.quantity++;
                    }
                });
                currentCart = [...cart];
                // updateCart(currentCart);
            } //else choco not added before
            else {
                selectedChocolateObj.quantity = 1;
                currentCart = [...cart, selectedChocolateObj];
                // updateCart(currentCart);
            }
        } //else cart is empty
        else {
            selectedChocolateObj.quantity = 1;
            currentCart = [...cart, selectedChocolateObj];
            // updateCart(currentCart);
        }
        //currentCart gets updated [{}, {}]
        // console.log(`inside <Product /> `, currentCart);
        let subtotal = 0;
        for (var i = 0; i < currentCart.length; i++) {
            subtotal =
                subtotal + currentCart[i].price * currentCart[i].quantity;
        }
        updateCart(currentCart, subtotal);
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
                    <div className="container-fluid">
                        <div className="row" style={{backgroundColor:'#f6f6f6'}}>
                            {products.map((product, index) => (
                                <div
                                    className="card col-md-4 product-card"
                                    key={"choc_" + index}
                                    style={{backgroundColor:'#f6f0e9', padding: 10}}
                                    // data-toggle="collapse"
                                >
                                    <img
                                        className="card-img-top"
                                        src={product.img_url}
                                        href={"#choco" + (index + 1)}
                                        data-toggle="collapse"
                                        style={{borderRadius: 8}}
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:'#62aaa7'}}>
                                            {product.name} {product.weight}g
                                        </h5>
                                        <p className="card-text" style={{color:'#62aaa7'}}>
                                            ${product.price.toFixed(2)}
                                        </p>
                                        <div
                                            className="collapse"
                                            id={"choco" + (index + 1)}
                                        >
                                            <button
                                                className="btn-block product-btn"
                                                style={{backgroundColor: '#b82b21'}}
                                                onClick={() =>
                                                    //Pass in the following from <App />
                                                    this.addChocolatesToCart(
                                                        index,
                                                        this.props.cart,
                                                        this.props.updateCart
                                                    )
                                                }
                                            >
                                                {" "}
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Product;