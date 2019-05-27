import React from 'react';

class AdminProducts extends React.Component {

  constructor() {
    super()
    this.state = {
        customers: [],
        orders: [],
        promos: [],
        products: []
        }

    }

  render(){
    return(
        <div>
            <form action="/products/testing" method="POST">
                <input type="text" />
                <input type="text" />
                <input type="submit"/>
            </form>
        </div>
    )
  }
}


export default AdminProducts;