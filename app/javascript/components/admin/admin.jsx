import React from 'react';
import AdminProducts from './adminproducts.jsx'
import AdminPromos from './adminpromo.jsx'
import AdminCustomers from './admincustomers.jsx'
import AdminOrders from './adminorders.jsx'

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
                <td key={index} > {customer.id} </td>
                <td> {customer.email} </td>
                <td> {customer.address} </td>
                <td> {customer.postal_code} </td>
                <td> {customer.country} </td>
                <td> {customer.contact} </td>
                <td> <a href={"/customers/" + (index+1) + "/edit"}> <button> Edit Customer </button> </a> </td>
            </tr>
            )
    });

        let orders = this.state.orders.map((order, index)=>{
        return (
            <tr>
            <td key={index}> Order Id:{order.id} </td>
            <td> {order.quantity}</td>
            <td> {order.delivery_address}</td>
            <td> {order.total_amount}</td>
            <td> {order.stripe_id}</td>
            <td> {order.order_number}</td>
            <td> {order.promo_id}</td>
            <td> <a href={"/orders/" + (index+1) + "/edit"}> <button> Edit Order </button> </a> </td>
            </tr>
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
        return (
            <tr>
            <td key={index}> {product.id} </td>
            <td > {product.brand} </td>
            <td> {product.name} </td>
            <td> {product.origin}</td>
            <td> {product.ingredients} </td>
            <td> {product.desc} </td>
            <td> {product.price} </td>
            <td> {product.weight} </td>
            <td> <a href={"/products/" + (index+1) + "/edit"}> <button> Edit Product </button> </a> </td>
            </tr>
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
          {customers}
          {orders}
          {promos}
          {products}
              <div className="row">
                  <AdminProducts /> <br/>
                  <AdminPromos /> <br/>
                  <AdminCustomers /> <br/>
                  <AdminOrders /> <br/>
              </div>
          </React.Fragment>
          );
  }
}


export default Admin;