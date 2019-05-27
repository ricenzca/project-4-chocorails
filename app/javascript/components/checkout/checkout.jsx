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
            del_DeliveryAdd1: "",
            del_DeliveryAdd2: "",
            del_Suburb: "",
            del_State: "",
            del_Postcode: "",
            del_Country: "",
            bill_FirstName: "",
            bill_LastName: "",
            bill_Email: "",
            bill_Telephone: "",
            bill_DeliveryAdd1: "",
            bill_DeliveryAdd2: "",
            bill_Suburb: "",
            bill_State: "",
            bill_Postcode: "",
            bill_Country: ""
        }
        this.formInputHandler=this.formInputHandler.bind(this)
    }

    formInputHandler(e1, e2) {
        console.log("this", e1, e2);
        this.setState({[e1]: e2});
    }

    render() {
    // console.log("in checkout component", this.props.cart)
    console.log("checkout state", this.state)
        return (
          <div>
          <h1> THIS IS THE  CHECKOUT PAGE </h1>
            <div className="container">
            <div className="row">
            <Checkout_render cart={this.props.cart} subtotal={this.state.subtotal} />
            <Checkout_details deet={this.state} formInputHandler={this.formInputHandler} />
            <Checkout_payments />
            </div>
            </div>
          </div>
        );
    }
}

class Checkout_render extends React.Component {

    render() {
        // console.log("in child component", this.props.cart)
        var cartContents = this.props.cart.cart.map((item, index) => {
            return (
                <p>{index+1}) {item}</p>
            )
    })

        return (
            <div className="col-md-4" style={styles}>
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
        // console.log("checked", this.state.checked)
        this.setState({ checked: !this.state.checked });
        //add logic for set billing and delivery details
    }

    render() {
        // console.log("deets", this.props)
        return (
            <div className="col-md-4" style={styles}>
                <br/>
                <h1>Delivery address</h1>
                <h3>All fields required</h3>
                <form >
                    <label for="FirstName">First Name*</label>
                    <input type="text" className="form-control" name="del_FirstName" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>


                    <label for="LastName">Last Name*</label>
                    <input type="text" className="form-control" name="del_LastName" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

                    <label for="Email">Email Address</label>
                    <input type="text" className="form-control" name="del_Email" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

                    <label for="Phone">Telephone</label>
                    <input type="text" className="form-control" name="del_Telephone" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

                    <label for="DeliveryAddress">Delivery Address</label>
                    <input type="text" className="form-control" name="del_DeliveryAdd1" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
                    <input type="text" className="form-control" name="del_DeliveryAdd2" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/> <br/>

                    <label for="Town">Suburb/Town</label>
                    <input type="text" className="form-control" name="del_Suburb" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

                    <label for="State">State/Territory</label>
                    <input type="text" className="form-control" name="del_State" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

                    <label for="Postal">Postal Code</label>
                    <input type="text" className="form-control" name="del_Postcode" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>

                    <label for="Country">Country</label>
                    <input type="text" className="form-control" name="del_Country" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/>
                    <input type="checkbox" onClick={(e)=>{this.handleCheckChange();}} defaultChecked/> <b>Same Billing Address</b>

                    { !this.state.checked && <div>
                        <br/>
                        First name* <input type="text" name="bill_FirstName" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        Last name* <input type="text" name="bill_LastName" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        Email address* <input type="text" name="bill_Email" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        Telephone* <input type="text" name="bill_Telephone" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        Delivery address* <input type="text" name="bill_DeliveryAdd1" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        <input type="text" name="bill_DeliveryAdd2" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        Suburb/Town* <input type="text" name="bill_Suburb" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        State/Territory* <input type="text" name="bill_State" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        Postcode* <input type="text" name="bill_Postcode" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                        Country* <input type="text" name="bill_Country" onChange={(e)=> {this.props.formInputHandler(e.target.name, e.target.value);}}/><br/>
                    </div> }

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
                <h1>Payments component</h1>
            </div>
        );
    }

}

const styles = {
    boxSizing: "border-box",
    backgroundColor : "pink",
}

export default Checkout;