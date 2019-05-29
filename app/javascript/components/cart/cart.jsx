import React from "react";
import { Link } from "react-router-dom";
// import style from "./style.scss";

class CartElement extends React.Component {
    // save all 'styling(s)' as var

    render() {
        var cartElements = this.props.cart.map((element, index) => {
            return (
                <div>
                    <div key={index} className="row">
                        <div className="col-md-2">
                            <img
                                src={element.img_url}
                                style={{ width: 110, height: 110 }}
                            />
                        </div>

                        <div className="col-md-6">
                            <h6>{element.name}</h6>
                            <small>{element.weight}g</small>
                        </div>

                        <div className="col-md-4">
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="number"
                                        min="1"
                                        max="100"
                                        value={this.props.cart[index].quantity}
                                        onChange={e =>
                                            this.props.changeQuantity(
                                                index,
                                                this.props.cart,
                                                this.props.updateCart,
                                                e
                                            )
                                        }
                                        required
                                    />
                                    <button
                                        className="btn btn-danger btn-sm"
                                        style={{
                                            border: "none",
                                            backgroundColor: "transparent"
                                        }}
                                        onClick={() =>
                                            this.props.removeChocolatesFromCart(
                                                index,
                                                this.props.cart,
                                                this.props.updateCart
                                            )
                                        }
                                    >
                                        ❌
                                    </button>
                                </div>

                                <div className="col">
                                    <h4>
                                        SGD{" "}
                                        {(
                                            element.price * element.quantity
                                        ).toFixed(2)}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            );
        });
        return cartElements;
    }
}

class Cart extends React.Component {
    removeChocolatesFromCart = (index, cart, updateCart) => {
        //cart is always 'updated'from <App />
        const updatedCart = cart;
        //index in this case is the index of the clicked element
        // console.log(index);
        //updatedCart is the cart with the clickedElement removed
        updatedCart.splice(index, 1);
        // updateCart(updatedCart);

        let subtotal = 0;
        for (var i = 0; i < updatedCart.length; i++) {
            subtotal =
                subtotal + updatedCart[i].price * updatedCart[i].quantity;
        }
        updateCart(updatedCart, subtotal);
    };

    changeQuantity = (index, cart, updateCart, e) => {
        console.log("quantity", e.target.value);
        const quantity = Math.floor(e.target.value);
        const updatedCart = cart;
        updatedCart[index].quantity = quantity;
        let subtotal = 0;
        for (var i = 0; i < updatedCart.length; i++) {
            subtotal =
                subtotal + updatedCart[i].price * updatedCart[i].quantity;
        }
        if ((quantity < 101 && quantity >= 1) || e.target.value === "")
            updateCart(updatedCart, subtotal);
        else console.log("false");
    };

    closeModal() {
        $("#exampleModal").modal("toggle");
    }

    render() {
        return (
            <div>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Shopping Cart
                                </h4>
                                <p
                                    style={{
                                        position: "absolute",
                                        top: 45,
                                        right: 315
                                    }}
                                >
                                    Quantity
                                </p>
                                <p
                                    style={{
                                        position: "absolute",
                                        top: 45,
                                        right: 150
                                    }}
                                >
                                    Price
                                </p>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {/*Contents come here*/}
                            <div className="modal-body">
                                {this.props.cart.length === 0 ? (
                                    <h4>Your Shopping Cart is empty.</h4>
                                ) : (
                                    <div>
                                        <CartElement
                                            cart={this.props.cart}
                                            //From <App />,we pass to <CartElement />..
                                            updateCart={this.props.updateCart}
                                            removeChocolatesFromCart={
                                                this.removeChocolatesFromCart
                                            }
                                            changeQuantity={this.changeQuantity}
                                            subtotal={this.props.subtotal}
                                        />
                                        <h4 className="text-right">
                                            Cart subtotal: SGD{" "}
                                            {this.props.subtotal.toFixed(2)}
                                        </h4>
                                    </div>
                                )}
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                {this.props.cart.length === 0 ? (
                                    <div />
                                ) : (
                                  <div>
                                    <Link className={"btn btn-primary"} onClick={this.closeModal} to="/checkout">Checkout</Link>
                                  </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
