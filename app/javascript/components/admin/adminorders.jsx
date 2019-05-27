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
            <h1 onClick={this.visibleState}> Create Orders </h1>
            <form action="/orders/create" method="POST" style={this.state}>
                <label> quantity  </label>
                <input type="text" name="quantity"/> <br/>

                <label> Delivery Address  </label>
                <input type="text" name="delivery_address"/> <br/>

                <label> Total Amount  </label>
                <input type="text" name="total_amount"/> <br/>

                <label> Stripe ID  </label>
                <input type="text" name="stripe_id"/> <br/>

                <label> Order Number  </label>
                <input type="text" name="order_number"/> <br/>

                <label> Promo ID  </label>
                <input type="textarea" name="promo_id"/> <br/>

                <input type="submit"/>
            </form>
        </div>
    )
  }
}


export default AdminOrders;