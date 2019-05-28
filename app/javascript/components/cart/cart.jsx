import React from "react";
// import style from "./style.scss";

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
      subtotal = subtotal + updatedCart[i].price * updatedCart[i].quantity;
    }
    updateCart(updatedCart, subtotal);
  };

  changeQuantity = (index, cart, updateCart, e) => {
    console.log("quantity", e.target.value);
    const quantity = e.target.value;
    const updatedCart = cart;
    updatedCart[index].quantity = quantity;
    let subtotal = 0;
    for (var i = 0; i < updatedCart.length; i++) {
      subtotal = subtotal + updatedCart[i].price * updatedCart[i].quantity;
    }
    updateCart(updatedCart, subtotal);
  };

  render() {
    // console.log(this.props.cart); //[{}, {}]
    const cartArr = this.props.cart;
    // console.log(cartArr);
    if (cartArr.length === 0) {
      return <h1>Add a Chocolate in your Cart!</h1>;
    } else {
      return (
        <div>
          <h1>Cart Component</h1>
          {cartArr.map((choco, index) => (
            <div>
              <h4>
                {choco.name} {choco.weight}g
              </h4>
              <button
                onClick={() =>
                  this.removeChocolatesFromCart(
                    index,
                    this.props.cart,
                    this.props.updateCart
                    // this.props.updateTotal
                  )
                }
              >
                Remove
              </button>
              <input
                type="number"
                min="0"
                value={this.props.cart[index].quantity}
                onChange={e =>
                  this.changeQuantity(
                    index,
                    this.props.cart,
                    this.props.updateCart,
                    e
                  )
                }
                required
              />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Cart;
