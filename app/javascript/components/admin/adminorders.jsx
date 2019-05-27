import React from 'react';

class AdminOrders extends React.Component {

  render(){
    return(
        <div>
            <h1> Create Orders </h1>
            <form action="/orders/create" method="POST">
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