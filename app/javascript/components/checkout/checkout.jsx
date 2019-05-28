import React from 'react';
import Promo from "../promo/promo";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Checkout extends React.Component {

  constructor () {
    super();
    this.state = {
      del_FirstName: "delfirst",
      del_LastName: "dellast",
      del_Email: "delmail",
      del_Telephone: "delphone",
      del_DeliveryAdd1: "deladd1",
      del_DeliveryAdd2: "deladd2",
      del_City: "delcity",
      del_State: "delstate",
      del_Postcode: 123123,
      del_Country: "delcountry",
      bill_FirstName: "billfirst",
      bill_LastName: "billlast",
      bill_Email: "billemail",
      bill_Telephone: "billphone",
      bill_DeliveryAdd1: "billadd1",
      bill_DeliveryAdd2: "billadd2",
      bill_City: "billcity",
      bill_State: "billstate",
      bill_Postcode: "billpostcode",
      bill_Country: "billcountry",
      gst: 0,
      grandTotal: 0,
    }
  }

  formInputHandler = (e1, e2) => {
      console.log("this", e1, e2);
      console.log("e1 split", "bill_"+e1.split("_")[1])
      this.setState({["bill_"+e1.split("_")[1]]: e2});
  }

  adjustGstAndGrandTotal = (newGST, newGrandTotal) => {
    console.log("adjustGstAndGrandTotal", newGST, newGrandTotal)
    this.setState({
      gst: newGST,
      grandTotal: newGrandTotal,
    })
  }

  printState = async () => {
    console.log("del_FirstName", this.state["del_FirstName"]);
    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    let response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrfToken,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        customer: {
          firstname: this.state["del_FirstName"],
          lastname: this.state["del_LastName"],
          email: this.state["del_Email"],
          address1: this.state["del_DeliveryAdd1"],
          address2: this.state["del_DeliveryAdd2"],
          state: this.state["del_State"],
          "postal_code": this.state["del_Postcode"],
          country: this.state["del_Country"],
          city: this.state["del_City"],
          contact: this.state["del_Telephone"],
        },
        order: {

        },
        transaction: {

        },
      }),
      credentials: 'same-origin'
    });

    if (response.ok) console.log("submission ok!")
  }

  render() {
    // console.log("in checkout component", this.props.cart)
    console.log("checkout state", this.state)
    return (
      <div>
        <div className="container">
          <div className="row">
            <Checkout_render 
              cart={this.props.cart} 
              subtotal={this.props.subtotal}
              adjustSubtotal={this.props.adjustSubtotal} 
              subtotalAfterPromo={this.props.subtotalAfterPromo}
              gst={this.state.gst}
              grandTotal={this.state.grandTotal}
              adjustGstAndGrandTotal={this.adjustGstAndGrandTotal}
            />
            <Checkout_details formInputHandler={this.formInputHandler}
              bill_FirstName={this.state.bill_FirstName}
            />
            <Checkout_payments printState={this.printState}/>
          </div>
        </div>
      </div>
      );
  }
}

class Checkout_render extends React.Component {
    render() {
    // console.log("in child component", this.props.cart)
    var cartContents = this.props.cart.map((item, index) => {
      console.log("item",item);
      return (
        <div key={"item"+index}>
        <p>{index+1}. {item.name} {item.quantity} ${item.price.toFixed(2)}</p>
        </div>

      )
    })



    return (
      <div className="col-md-4" style={styles}>
        <br/>
        <h3>Cart Contents</h3>
        <div>{cartContents}</div>
        <Promo
          subtotal={this.props.subtotal}
          adjustSubtotal={this.props.adjustSubtotal}
          subtotalAfterPromo={
            this.props.subtotalAfterPromo
          }
          adjustGstAndGrandTotal={this.props.adjustGstAndGrandTotal}
        />
        <p>GST: ${this.props.gst.toFixed(2)}</p>
        <p>Shipping fee: $5.00</p>
        <p>Grand Total: ${this.props.grandTotal.toFixed(2)}</p>
      </div>
    );
  }

}

class Checkout_details extends React.Component {

  constructor () {
    super();
    this.state = {
      checked: true
    }
  }

  handleCheckChange() {
    {// console.log("checked", this.state.checked)
      this.setState({ checked: !this.state.checked });
      //add logic for set billing and delivery details
    }
    }

  render() {
    // console.log("deets", this.props)
    return (
      <div className="col-md-4" style={styles}>
      <br/>
      <h3>Delivery address</h3>
      <p className="font-weight-bold">* fields are mandatory</p>
      <form >
        <label htmlFor="FirstName">First Name*</label>
        <input type="text" className="form-control" name="del_FirstName" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

        <label htmlFor="LastName">Last Name*</label>
        <input type="text" className="form-control" name="del_LastName" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

        <label htmlFor="Email">Email Address*</label>
        <input type="text" className="form-control" name="del_Email" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

        <label htmlFor="Phone">Telephone*</label>
        <input type="text" className="form-control" name="del_Telephone" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

        <label htmlFor="DeliveryAddress">Delivery Address*</label>
        <input type="text" className="form-control" name="del_DeliveryAdd1" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
        <input type="text" className="form-control" name="del_DeliveryAdd2" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

        <label htmlFor="Town">City/Town*</label>
        <input type="text" className="form-control" name="del_City" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

        <label htmlFor="State">State/Territory</label>
        <input type="text" className="form-control" name="del_State" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

        <label htmlFor="Postal">Postal Code*</label>
        <input type="text" className="form-control" name="del_Postcode" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

        <label htmlFor="Country">Country*</label>
        <input type="text" className="form-control" name="del_Country" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
        <input type="checkbox" onClick={(e)=>{this.handleCheckChange();}} defaultChecked/> <b>Same Billing Address</b>

        { !this.state.checked && 
          <div>
            First name* <input type="text" className="form-control" name="bill_FirstName" value={this.props.bill_FirstName} onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
            Last name* <input type="text" className="form-control" name="bill_LastName" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
            Email address* <input type="text" className="form-control" name="bill_Email" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
            Telephone* <input type="text" className="form-control" name="bill_Telephone" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
            Delivery address* <input type="text" className="form-control" name="bill_DeliveryAdd1" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
            <input type="text" className="form-control" name="bill_DeliveryAdd2" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
            City/Town* <input type="text" className="form-control" name="bill_City" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
            State/Territory <input type="text" className="form-control" name="bill_State" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
            Postcode* <input type="text" className="form-control" name="bill_Postcode" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

            Country* <input type="text" className="form-control" name="bill_Country" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
          </div> 
        }
          </form>
        </div>
        );
  }

}


class Checkout_payments extends React.Component {

  render() {
    return (
      <div className="col-md-4" style={styles}>
        <br/>
        <h3>Payments component</h3>
        <StripeProvider apiKey="pk_test_uVhVvUx1HCpcDK0OY2FyWFHc00p54aslpX">
          <div>
            <Elements>
              <CheckoutForm
                printState={this.props.printState}
              />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

const styles = {
  boxSizing: "border-box",
  backgroundColor : "pink",
}

export default Checkout;