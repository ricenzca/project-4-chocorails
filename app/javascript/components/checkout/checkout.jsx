import React from 'react';
import { Link } from "react-router-dom";
import Promo from "../promo/promo";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import EmailSub from "../emailsub/emailsub";

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
      // bill_FirstName: "billfirst",
      // bill_LastName: "billlast",
      // bill_Email: "billemail",
      // bill_Telephone: "billphone",
      // bill_DeliveryAdd1: "billadd1",
      // bill_DeliveryAdd2: "billadd2",
      // bill_City: "billcity",
      // bill_State: "billstate",
      // bill_Postcode: "billpostcode",
      // bill_Country: "billcountry",
      gst: 0,
      grandTotal: 0,
      promoId: null,
      orderNumber: null,
    }
  }

  formInputHandler = (e1, e2) => {
    console.log(e1,e2.length);
    if (e1 === "del_Postcode" && e2.length<11) {
      this.setState({[e1]: e2});
    } else if (e1 !== "del_Postcode" && e2.length<40) {
      this.setState({[e1]: e2});
    }
  }

  // formInputHandler = (e1, e2) => {
  //     console.log("this", e1, e2);
  //     console.log("e1 split", "bill_"+e1.split("_")[1])
  //     this.setState({["bill_"+e1.split("_")[1]]: e2});
  // }

  componentDidMount () {
    let newSubtotal = this.props.subtotal;
    console.log("newSubtotal",newSubtotal)
    let newGst = Math.round((newSubtotal*0.07)*100)/100;
    let newGrandTotal = newSubtotal+newGst+5;
    this.setState({
      gst: newGst,
      grandTotal: newGrandTotal,
    })
  }

  adjustGstAndGrandTotal = (newGst, newGrandTotal) => {
    console.log("adjustGstAndGrandTotal", newGst, newGrandTotal)
    this.setState({
      gst: newGst,
      grandTotal: newGrandTotal,
    })
  }

  setPromoId = (newPromoId) => {
    this.setState({
      promoId: newPromoId
    })
  }

  submitUserInfo = async () => {
    console.log("del_FirstName", this.state["del_FirstName"]);
    console.log("promoId",this.state.promoId);
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
        transaction: {
          ["total_amount"]: this.state.grandTotal,
          ["promo_id"]: this.state.promoId,
        },
        order: {
          cart: this.props.cart,
        },
      }),
      credentials: 'same-origin'
    });
    if (response.ok) console.log("submission ok!", response);
    let data = await response.json();
    console.log("data",data);
    this.setState({orderNumber: data})
  }

  render() {

    if (this.state.orderNumber) {

      return (
        <div style={{backgroundColor:'#f6f6f6'}}>
          <div className="sticky-top">
              <nav
                  style={{
                      backgroundColor: "rgb(54, 54, 54)",
                      padding: 10
                  }}
              >
                  <a href="/" >
                    <h1 className="d-inline" style={{color: "#62aaa7"}}>
                        Choco React
                    </h1>
                  </a>
              </nav>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'100vh'}}>
            <h5 className="text-center">Thank you for placing your order with us!<br/>
            Your order number is {this.state.orderNumber}<br/>
            </h5>
            <a href="/" >
              <h5 className="bold" style={{color: "#62aaa7"}}>
                  Return to home
              </h5>
            </a>
          </div>
        </div>
      )

    } else {

      return (
        <div style={{backgroundColor:'#f6f6f6'}}>
          <div className="container">
            <div className="row">

            <div className="col-md-6">
              <Checkout_details
                formInputHandler={this.formInputHandler}
                del_FirstName={this.state["del_FirstName"]}
                del_LastName={this.state["del_LastName"]}
                del_Email={this.state["del_Email"]}
                del_Telephone={this.state["del_Telephone"]}
                del_DeliveryAdd1={this.state["del_DeliveryAdd1"]}
                del_DeliveryAdd2={this.state["del_DeliveryAdd2"]}
                del_City={this.state["del_City"]}
                del_State={this.state["del_State"]}
                del_Postcode={this.state["del_Postcode"]}
                del_Country={this.state["del_Country"]}
                // bill_FirstName={this.state.bill_FirstName}
              />
            </div>
            <div className="col-md-6">
              <Checkout_render
                cart={this.props.cart}
                subtotal={this.props.subtotal}
                adjustSubtotal={this.props.adjustSubtotal}
                subtotalAfterPromo={this.props.subtotalAfterPromo}
                gst={this.state.gst}
                grandTotal={this.state.grandTotal}
                adjustGstAndGrandTotal={this.adjustGstAndGrandTotal}
                setPromoId={this.setPromoId}
              />
              <Checkout_payments submitUserInfo={this.submitUserInfo}/>
            </div>
            </div>
          </div>
        </div>
        );

    }
  }
}

class Checkout_render extends React.Component {
    render() {

    // console.log("in child component", this.props.cart)
    var cartContents = this.props.cart.map((item, index) => {
      // console.log("item",item);
      return (
        <tr key={"item"+index}>
          <td>{index+1}.</td>
          <td className="product-icon-container pr-0"><img src={item["img_url"]} width="50px" height="50px" style={{borderRadius: "50%"}}/></td>
          <td>{item.name}</td>
          <td className="text-center">{item.quantity}</td>
          <td className="text-center">${(item.quantity*item.price).toFixed(2)}</td>
        </tr>
      )
    })



    return (
      <div style={styles}>
        <br/>
        <h3>Cart</h3>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th className="text-center">Qty</th>
              <th className="text-center">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartContents}
          </tbody>
        </table>
        <Promo
          subtotal={this.props.subtotal}
          adjustSubtotal={this.props.adjustSubtotal}
          subtotalAfterPromo={
            this.props.subtotalAfterPromo
          }
          adjustGstAndGrandTotal={this.props.adjustGstAndGrandTotal}
          setPromoId={this.props.setPromoId}
        />
        <div className="text-right">
          <p className="bold">GST: ${this.props.gst.toFixed(2)}</p>
          <p className="bold">Shipping fee: $5.00</p>
          <p className="bold">Grand Total: ${this.props.grandTotal.toFixed(2)}</p>
        </div>
        <Link className={"btn btn-success btn-sm link"} to="/">Back to Main</Link>
      </div>
    );
  }

}

class Checkout_details extends React.Component {

  constructor () {
    super();
    this.state = {
      // checked: true
    }
  }

  // handleCheckChange() {
  //   {// console.log("checked", this.state.checked)
  //     this.setState({ checked: !this.state.checked });
  //   }
  // }

  render() {
    return (
      <div style={styles}>
      <br/>
      <h3>Delivery address</h3>
      <p className="font-weight-bold">* fields are mandatory</p>
      <form >
        <p className="formlabel">First Name*</p>
        <input type="text" className="form-control" name="del_FirstName" value={this.props["del_FirstName"]} onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        <p className="formlabel">Last Name*</p>
        <input type="text" className="form-control" name="del_LastName"
          value={this.props["del_LastName"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        <p className="formlabel">Email Address*</p>
        <input type="text" className="form-control" name="del_Email"
          value={this.props["del_Email"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        <p className="formlabel">Telephone*</p>
        <input type="text" className="form-control" name="del_Telephone"
          value={this.props["del_Telephone"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        <p className="formlabel">Delivery Address*</p>
        <input type="text" className="form-control noMarginBottom" name="del_DeliveryAdd1"
          value={this.props["del_DeliveryAdd1"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />
        <input type="text" className="form-control" name="del_DeliveryAdd2"
          value={this.props["del_DeliveryAdd2"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        <p className="formlabel">City/Town*</p>
        <input type="text" className="form-control" name="del_City"
          value={this.props["del_City"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        <p className="formlabel">State/Territory</p>
        <input type="text" className="form-control" name="del_State"
          value={this.props["del_State"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        <p className="formlabel">Postal Code*</p>
        <input type="text" className="form-control" name="del_Postcode"
          value={this.props["del_Postcode"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        <p className="formlabel">Country*</p>
        <input type="text" className="form-control noMarginBottom" name="del_Country"
          value={this.props["del_Country"]}
          onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}
        />

        {/*<input type="checkbox" onClick={(e)=>{this.handleCheckChange();}} defaultChecked/> <b>Same Billing Address</b>*/}

        {/* !this.state.checked &&
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
        */}
          </form>
          <br/><br/>
        </div>
        );
  }

}


class Checkout_payments extends React.Component {

  render() {
    return (
      <div style={styles}>
        <br/>
        <h3>Payment</h3>
        <StripeProvider apiKey="pk_test_uVhVvUx1HCpcDK0OY2FyWFHc00p54aslpX">
          <div>
            <Elements>
              <CheckoutForm
                submitUserInfo={this.props.submitUserInfo}
              />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

const styles = {
  // boxSizing: "border-box",
  backgroundColor : "#f6f0e9",
  padding: 20,
  marginBottom: '1rem'
}

export default Checkout;