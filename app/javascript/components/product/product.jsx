import React from 'react';
import { Link } from 'react-router-dom'

class Product extends React.Component {

  render() {
    return (
      <div>
      	<Link to="/checkout">Checkout LINK!</Link>
        <h1>Product!!!</h1>
      </div>
    );
  }
}


export default Product;