import React from 'react';
import AdminProducts from './adminproducts.jsx'

class Admin extends React.Component {

  constructor() {
    super()
    this.state = {
        customers: [],
        orders: [],
        promos: [],
        products: []
        }

    this.customerList = this.customerList.bind(this);
    this.orderList = this.orderList.bind(this);
    this.promoList = this.promoList.bind(this);
    this.productList = this.productList.bind(this);
    }

  customerList() {

      var reactThis = this;
      var reqListener = function(){
      // console.log("hello");
      // console.log(this.responseText);
      // console.log("hello");
      const data = JSON.parse( this.responseText );
      // console.log(data);
      reactThis.setState({
        customers: data,
        orders: [],
        promos: [],
        products:[]
      })
      // console.log(reactThis.state.customers);
      // reactThis.setState({items:data.products})
      // console.log(reactThis.state);
      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/customers.json");
    oReq.send();
  }

    orderList() {
        console.log("SGSDGSDG")

      var reactThis = this;
      var reqListener = function(){
      // console.log("hello");
      console.log(this.responseText);
      // console.log("hello");
      const data = JSON.parse( this.responseText );
      // console.log(data);
      reactThis.setState({
        orders: data,
        customers: [],
        promos: [],
        products:[],
      })

      console.log(reactThis.state.orders)
      // console.log(reactThis.state.customers);
      // reactThis.setState({items:data.products})
      // console.log(reactThis.state);
      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})
    }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "/orders.json");
        oReq.send();
  }

    promoList() {

      var reactThis = this;
      var reqListener = function(){
      // console.log("hello");
      console.log(this.responseText);
      // console.log("hello");
      const data = JSON.parse( this.responseText );
      // console.log(data);
      reactThis.setState({
        promos: data,
        orders: [],
        customers: [],
        products:[]
      })
      // console.log(reactThis.state.customers);
      // reactThis.setState({items:data.products})
      console.log(reactThis.state);
      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/promos.json");
    oReq.send();
  }

    productList() {

      var reactThis = this;
      var reqListener = function(){
      // console.log("hello");
      console.log(this.responseText);
      // console.log("hello");
      const data = JSON.parse( this.responseText );
      // console.log(data);
      reactThis.setState({
        products: data,
        orders: [],
        customers: [],
        promos: []
      })
      // console.log(reactThis.state.customers);
      // reactThis.setState({items:data.products})
      console.log(reactThis.state);
      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/products/getall");
    oReq.send();
  }



  render(){
        let customers = this.state.customers.map((customer, index)=>{
        return (
            <tr>
                <td key={index} onClick={this.testing}> {customer.id} </td>
                <td> {customer.email} </td>
                <td> {customer.address} </td>
                <td> {customer.postal_code} </td>
                <td> {customer.country} </td>
                <td> {customer.contact} </td>
            </tr>
            )
    });

        let orders = this.state.orders.map((order, index)=>{
        return (<p key={index}>
                Order Id:{order.id}
                </p>
            )
    });

        let promos = this.state.promos.map((promo, index)=>{
        return (
            <tr>
            <td key={index}> {promo.unique_id} </td>
            <td key> {promo.discount} </td>
            </tr>
            )
    });

        let products = this.state.products.map((product, index)=>{
        return (<p key={index}>
                {product.price}
                </p>
            )
    });

    return( <React.Fragment>
        <h1> Admin Backend </h1>
        <div className="row">
            <h1 className="col-md-3" onClick={this.productList}> Products </h1>
            <h1 className="col-md-3" onClick={this.orderList}> Ordersss </h1>
            <h1 className="col-md-3" onClick={this.customerList}> Customers </h1>
            <h1 className="col-md-3" onClick={this.promoList}> Promos </h1>
          </div>
          <div>
          {customers}
          {orders}
          {promos}
          {products}
          </div>
          <AdminProducts />
          </React.Fragment>
          );
  }
}


export default Admin;