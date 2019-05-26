import React from 'react';

class Checkout extends React.Component {

  render() {
    return (
      <div>
        <Checkout_render />
        <Checkout_details />
        <Checkout_payments />
      </div>
    );
  }
}

class Checkout_render extends React.Component {

    render() {
        return (
            <div>
                <h3>basket component</h3>
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