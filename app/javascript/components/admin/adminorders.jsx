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
                <label> Transaction ID  </label>
                <input type="number" name="tranxaction_id" className="form-control"/>

                <label> Product ID  </label>
                <input type="text" name="product_id" className="form-control"/>

                <label> Product Qty  </label>
                <input type="text" name="product_quantity" className="form-control"/>

                <input type="submit" className="btn-primary btn-block"/>
            </form>
        </div>
    )
  }
}

export default AdminOrders;