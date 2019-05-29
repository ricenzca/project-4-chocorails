import React from 'react';

class AdminOrders extends React.Component {

  constructor() {
    super();
    this.state = {
        display:'none'
    }

    this.visibleState = this.visibleState.bind(this);
  }

  visibleState() {

    if (this.state.display === 'none') {
        this.setState({
        display: ''
            })
    } else {
        this.setState({
            display: 'none'
        })
    }

  }

  render(){
    return(
        <div className="col-md-3">
            <h2 onClick={this.visibleState}> Create Orders </h2>
            <form action="/orders/create" method="POST" style={this.state}>
                <label> Transaction ID  </label>
                <input type="number" name="transaction_id" className="form-control"/>

                <label> Product ID  </label>
                <input type="text" name="product_id" className="form-control"/>

                <label> Product Qty  </label>
                <input type="text" name="product_qty" className="form-control"/>

                <label> Order Number  </label>
                <input type="text" name="order_number" className="form-control"/>

                <label> Promo ID  </label>
                <input type="text" name="promo_id" className="form-control"/> <br/>

                <input type="submit" className="btn-primary btn-block"/>
            </form>
        </div>
    )
  }
}

export default AdminOrders;



            // <form action="/orders/create" method="POST" style={this.state}>
            //     <label> quantity  </label>
            //     <input type="text" name="quantity" className="form-control"/>

            //     <label> Delivery Address  </label>
            //     <input type="text" name="delivery_address" className="form-control"/>

            //     <label> Total Amount  </label>
            //     <input type="text" name="total_amount" className="form-control"/>

            //     <label> Order Number  </label>
            //     <input type="text" name="order_number" className="form-control"/>

            //     <label> Promo ID  </label>
            //     <input type="text" name="promo_id" className="form-control"/> <br/>

            //     <label> Products Purchased  </label>
            //     <input type="text" name="products_purchased" className="form-control"/> <br/>

            //     <label> First Name </label>
            //     <input type="text" name="firstname" className="form-control"/> <br/>

            //     <label> Last Name  </label>
            //     <input type="text" name="lastname" className="form-control"/> <br/>

            //     <label> Email  </label>
            //     <input type="text" name="email" className="form-control"/> <br/>

            //     <label> Address Line 1  </label>
            //     <input type="text" name="address1" className="form-control"/> <br/>

            //     <label> Address Line 2  </label>
            //     <input type="text" name="address2" className="form-control"/> <br/>

            //     <label> State  </label>
            //     <input type="text" name="state" className="form-control"/> <br/>

            //     <label> Postal Code  </label>
            //     <input type="text" name="postal_code" className="form-control"/> <br/>

            //     <label> Country  </label>
            //     <input type="text" name="country" className="form-control"/> <br/>

            //     <label> City </label>
            //     <input type="text" name="city" className="form-control"/> <br/>

            //     <label> Contact </label>
            //     <input type="text" name="contact" className="form-control"/> <br/>

            //     <input type="submit" className="btn-primary btn-block"/>
            // </form>