import React from "react";
// import style from "./style.scss";

class Cart extends React.Component {
    render() {
        console.log(this.props.cart); //[{}, {}]
        const cartArr = this.props.cart;

        if (cartArr.length === 0) {
            return <h1>Add a Chocolate in your Cart!</h1>;
        } else {
            return (
                <div>
                    <h1>Cart Component</h1>
                    {cartArr.map(choco => (
                        <div>
                            <h4>
                                {choco.name} {choco.weight}g
                            </h4>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default Cart;
