import React from 'react';

class Checkout extends React.Component {

  render() {
    console.log("in checkout component", this.props.cart)
    return (
      <div>
        <Checkout_render cart={this.props.cart}/>
        <Checkout_details />
        <Checkout_payments />
      </div>
    );
  }
}

class Checkout_render extends React.Component {

    render() {
        console.log("in child component", this.props.cart)
        return (
            <div>
                <h3>basket component</h3>
                <p>{this.props.cart.cart}</p>
            </div>
        );
    }

}

class Checkout_details extends React.Component {

    render() {
        return (
            <div>
                <h3>detail components</h3>
            </div>
        );
    }

}

class Checkout_payments extends React.Component {

    render() {
        return (
            <div>
                <h3>payments component</h3>
            </div>
        );
    }

}

export default Checkout;