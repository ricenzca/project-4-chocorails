import React from 'react';

class Checkout extends React.Component {

    constructor () {
        super();
        this.state = {
            subtotal: 0,
            del_FirstName: "",
            del_LastName: "",
            del_Email: "",
            del_Telephone: "",
            del_DeliveryAdd: "",
            del_Suburb: "",
            del_State: "",
            del_Postcode: "",
            del_Country: "",
            bill_FirstName: "",
            bill_LastName: "",
            bill_Email: "",
            bill_Telephone: "",
            bill_DeliveryAdd: "",
            bill_Suburb: "",
            bill_State: "",
            bill_Postcode: "",
            bill_Country: ""
        }
    }

    formInputHandler(value) {

    }

    render() {
    // console.log("in checkout component", this.props.cart)
    console.log("checkout state", this.state)
        return (
          <div>
          <h1> THIS IS THE  CHECKOUT PAGE </h1>
            <Checkout_render cart={this.props.cart} subtotal={this.state.subtotal}/>
            <Checkout_details deet={this.state} formInputHandler={this.formInputHandler} />
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

    constructor () {
        super();
        this.state = {
            checked: true
        }
    }

    handleCheckChange() {
        console.log("checked", this.state.checked)
        this.setState({ checked: !this.state.checked });
    }

    render() {
        console.log("deets", this.props)
        return (
            <div>
                <br/>
                <h1>Delivery address</h1>
                <h3>All fields required</h3>
                <form onChange={(e)=> {this.props.formInputHandler(e.target.value);}}>
                    First name* <input /><br/>
                    Last name* <input /><br/>
                    Email address* <input /><br/>
                    Telephone* <input /><br/>
                    Delivery address* <input /><br/>
                    <input /><br/>
                    Suburb/Town* <input /><br/>
                    State/Territory* <input /><br/>
                    Postcode* <input /><br/>
                    Country* <input /><br/>

                <br/>
                <input type="checkbox" onClick={(e)=>{this.handleCheckChange();}} defaultChecked/> <b>Same Billing Address</b>

                { !this.state.checked && <div>
                    <br/>
                    First name* <input /><br/>
                    Last name* <input /><br/>
                    Email address* <input /><br/>
                    Telephone* <input /><br/>
                    Delivery address* <input /><br/>
                    <input /><br/>
                    Suburb/Town* <input /><br/>
                    State/Territory* <input /><br/>
                    Postcode* <input /><br/>
                    Country* <input /><br/>
                </div> }

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