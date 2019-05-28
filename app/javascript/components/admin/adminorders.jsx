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
                <label> quantity  </label>
                <input type="text" name="quantity" className="form-control"/>

                <label> Delivery Address  </label>
                <input type="text" name="delivery_address" className="form-control"/>

                <label> Total Amount  </label>
                <input type="text" name="total_amount" className="form-control"/>

                <label> Stripe ID  </label>
                <input type="text" name="stripe_id" className="form-control"/>

                <label> Order Number  </label>
                <input type="text" name="order_number" className="form-control"/>

                <label> Promo ID  </label>
                <input type="textarea" name="promo_id" className="form-control"/> <br/>

                <input type="submit" className="btn-primary btn-block"/>
            </form>
        </div>
    )
  }
}


export default AdminOrders;