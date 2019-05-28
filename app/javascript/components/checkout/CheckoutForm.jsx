import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
      complete: false,
      cardholderName: ""
    };
  }

  handleChangeCardholderName = (e) => {
    this.setState({cardholderName: e.target.value});
  }

  submit = async (printState) => {
    let {token} = await this.props.stripe.createToken({name: this.state.cardholderName});
    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    let response = await fetch("/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrfToken,
        'Accept': 'application/json'
    },
      body: JSON.stringify([token.id,{name: this.state.cardholderName, address: "home"}]),
      credentials: 'same-origin'
    });

    if (response.ok) this.setState({complete: true});

    printState();
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <label>
        Card details</label>
        <div>
          <span>Cardholder's Name:</span>
          <input type="text" name="cardholderName" placeholder="Enter your name" value={this.state.cardholderName} onChange={(e)=>this.handleChangeCardholderName(e)}/>
        </div>
        <CardElement style={{base: {fontSize: '18px'}}}  />
        <button className="btn btn-sm btn-primary" onClick={()=>this.submit(this.props.printState)}>Confirm order</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
