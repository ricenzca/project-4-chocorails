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

  submit = async (submitUserInfo) => {
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

    submitUserInfo();
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <label className="font-weight-bold">Card details</label>
        <div>
          <p className="formlabel">Cardholder's Name:</p>
          <input className="form-control noMarginBottom" type="text" name="cardholderName" placeholder="Enter your name" value={this.state.cardholderName} onChange={(e)=>this.handleChangeCardholderName(e)}/>
        </div>
        <br/>
        <CardElement style={{base: {fontSize: '16px'}}}  />
        <br/>
        <button className="btn btn-sm btn-primary" onClick={()=>this.submit(this.props.submitUserInfo)}>Confirm payment</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
