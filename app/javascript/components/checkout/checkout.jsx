import React from 'react';

class Checkout extends React.Component {

    constructor () {
        super();
        this.state = {
            subtotal: 0
        }
    }

    render() {
    // console.log("in checkout component", this.props.cart)
        return (
          <div>
          <h1> THIS IS THE  CHECKOUT PAGE </h1>
            <Checkout_render cart={this.props.cart} subtotal={this.state.subtotal}/>
            <Checkout_details />
            <Checkout_payments />
          </div>
        );
    }
}

class Checkout_render extends React.Component {

    render() {
        console.log("in child component", this.props.cart)

        var cartContents = this.props.cart.cart.map((item, index) => {
            return (
                <p>{index+1}) {item}</p>
            )
    })

        return (
            <div>
                <br/>
                <h1>Cart Contents</h1>
                <div>{cartContents}</div>

                <p><b>Subtotal: {this.props.subtotal}</b></p>
                <p><b>Shipping to:</b></p>
                <p><b>Select delivery:</b></p>
            </div>
        );
    }

}

class Checkout_details extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <h1>Delivery address</h1>
                <h3>All fields required</h3>
                <form>
                    <input />
                </form>
            </div>
        );
    }

}

class Checkout_payments extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <h1>Payments component</h1>
            </div>
        );
    }

}

export default Checkout;