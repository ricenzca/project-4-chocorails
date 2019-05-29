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
        products: [],

        productDisplay: {
            display: 'none'
        },

        orderDisplay: {
            display: 'none'
        },

        customerDisplay: {
            display: 'none'
        },

        promoDisplay: {
            display: 'none'
        }

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
        products:[],

        productDisplay: {
            display: 'none'
        },

        orderDisplay: {
            display: 'none'
        },

        customerDisplay: {
            display: ''
        },

        promoDisplay: {
            display: 'none'
        }

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

        productDisplay: {
            display: 'none'
        },

        orderDisplay: {
            display: ''
        },

        customerDisplay: {
            display: 'none'
        },

        promoDisplay: {
            display: 'none'
        }

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
        products:[],

        productDisplay: {
            display: 'none'
        },

        orderDisplay: {
            display: 'none'
        },

        customerDisplay: {
            display: 'none'
        },

        promoDisplay: {
            display: ''
        }
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
        promos: [],

        productDisplay: {
            display: ''
        },

        customerDisplay: {
            display: 'none'
        },

        orderDisplay: {
            display: 'none'
        },

        promoDisplay: {
            display: 'none'
        },
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
                <td> {customer.firstname} </td>
                <td> {customer.lastname} </td>
                <td> {customer.email} </td>
                <td> {customer.address1} </td>
                <td> {customer.address2} </td>
                <td> {customer.postal_code} </td>
                <td> {customer.country} </td>
                <td> {customer.city} </td>
                <td> {customer.contact} </td>
                <td> <a href={"/customers/" + (customer.id) + "/edit"}> <button className="btn btn-warning"> Edit Customer </button> </a> </td>
            </tr>
            )
    });

        let orders = this.state.orders.map((order, index)=>{
        return (
            <tr>
            <td key={index}> Order Id:{order.id} </td>
            <td> {order.tranxaction_id}</td>
            <td> {order.product_id}</td>
            <td> {order.product_quantity}</td>
            <td> <a href={"/transactions/" + (order.tranxaction_id)}> <button className="btn btn-warning"> Show Order </button> </a> </td>
            </tr>
            )
    });

        let promos = this.state.promos.map((promo, index)=>{
        return (
            <tr>
            <td key={index}> {promo.id} </td>
            <td> {promo.amount} </td>
            <td> {promo.limit} </td>
            <td> {promo.expiration} </td>
            <td> {promo.code} </td>
            <td> {promo.percentage} </td>
            <td> {promo.used} </td>
            <td> <a href={"/promos/" + (promo.id) + "/edit"}> <button className="btn btn-warning"> Edit Promo </button> </a> </td>
            </tr>
            )
    });

        let products = this.state.products.map((product, index)=>{
        return (
            <tr scope="row">
            <td key={index}> {product.id} </td>
            <td > {product.brand} </td>
            <td> {product.name} </td>
            <td> {product.origin}</td>
            <td> {product.ingredients} </td>
            <td> {product.desc} </td>
            <td> {product.price} </td>
            <td> {product.weight} </td>
            <td> <a href={"/products/" + (index+1) + "/edit"}> <button className="btn btn-warning"> Edit Product </button> </a> </td>
            </tr>
            )
    });

    return( <React.Fragment>
        <div style={{backgroundColor:'', color:'', padding: 8}}>
        <h1 style={{textAlign:'center   '}}> Admin Backend </h1>
        <div className="row" >
            <h2 className="col-md-3" onClick={this.productList}> Products </h2>
            <h2 className="col-md-3" onClick={this.orderList}> Ordersss </h2>
            <h2 className="col-md-3" onClick={this.customerList}> Customers </h2>
            <h2 className="col-md-3" onClick={this.promoList}> Promos </h2>
        </div>
          <table className="table" style={{backgroundColor:''}}>
            <thead class="thead-dark" style={this.state.productDisplay}>
                <tr>
                  <th>id</th>
                  <th>brand</th>
                  <th>name</th>
                  <th>origin</th>
                  <th>ingredients</th>
                  <th>desc</th>
                  <th>price</th>
                  <th>weight</th>
                  <th>Edit</th>
                </tr>
            </thead>

            <thead class="thead-dark" style={this.state.orderDisplay}>
                <tr>
                  <th>id</th>
                  <th>Transaction ID</th>
                  <th>Product ID</th>
                  <th>Product Qty</th>
                  <th>Edit</th>
                </tr>
            </thead>

            <thead class="thead-dark" style={this.state.customerDisplay}>
                <tr>
                  <th>id</th>
                  <th>first name</th>
                  <th>last name</th>
                  <th>email</th>
                  <th>address line 1</th>
                  <th>address line 2</th>
                  <th>Postal Code</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Contact</th>
                  <th>Edit</th>
                </tr>
            </thead>

            <thead class="thead-dark" style={this.state.promoDisplay}>
                <tr>
                  <th>id</th>
                  <th>amount</th>
                  <th>limit</th>
                  <th>expiration</th>
                  <th>code</th>
                  <th>percentage</th>
                  <th>used</th>
                  <th>Edit</th>
                </tr>
            </thead>

          {products}
          {orders}
          {customers}
          {promos}
          </table>
        </div>
              <div className="row" style={{backgroundColor: '', color: '', padding: 8}}>
                  <AdminProducts /> <br/>
                  <AdminPromos /> <br/>
              </div>
          </React.Fragment>
          );
  }
}


export default Admin;

                  // <AdminOrders /> <br/>
                  // <AdminCustomers /> <br/>