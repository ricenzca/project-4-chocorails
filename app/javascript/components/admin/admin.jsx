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
      const uniqDataArray = data.filter(function (item) {
              let key = item.order_number;
              // console.log("key",key);
              // console.log("this",this);
              // console.log("this key", this[key]);
              if (!this[key]) {
                  this[key] = true;
                  return true;
              }
          }, Object.create(null));

      reactThis.setState({
        orders: uniqDataArray,
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

  handleChange = (event) => {
    console.log("event.target.value",event.target.value);
    console.log("event.target.name",event.target.name);

    const paramsObj = {
      status: event.target.value
    }

    const update = async (selectDomObject) => {
      let csrfToken = $('meta[name="csrf-token"]').attr('content');
      let response = await fetch(`/transactions/${event.target.name}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': csrfToken,
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          transaction: paramsObj
        }),
        credentials: 'same-origin'
      });
      if (response.ok) console.log("submission ok!", response);

      let data = await response.json();
      if (data.response === "success") {
        console.log("event",selectDomObject);
        const previous = selectDomObject.parentNode.previousSibling;
        console.log("previousSibling",previous);
        previous.innerHTML = selectDomObject.value;
      }
    }
    
    update(event.target);

  }



  render(){
        let customers = this.state.customers.map((customer, index)=>{
        return (
            <tr key={index} >
                <td> {customer.id} </td>
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
          let select1 = false;
          let select2 = false;
          let select3 = false;
          if (order.status === "pending") {
            select1 = "selected";
          } else if (order.status === "fulfilled") {
            select2 = "selected";
          } else if (order.status === "cancelled") {
            select3 = "selected";
          }
        return (
            <tr key={index}>
            <td className="text-center"> {order.order_number}</td>
            <td className="text-center"> ${order.total_amount.toFixed(2)}</td>
            <td className="text-center"> {order.status}</td>
            <td>
              <select className="form-control form-control-sm" name={order.id} onChange={(e)=>this.handleChange(e)}
              >
                <option name="status" value="pending" selected={select1}>Pending</option>
                <option name="status" value="fulfilled" selected={select2}>Fulfilled</option>
                <option name="status" value="cancelled" selected={select3}>Cancelled</option>
              </select>
            </td>
            <td className="text-center"> <a href={"/transactions/" + (order.id)}> <button className="btn btn-warning"> View Order Details </button> </a> </td>
            </tr>
            )
    });

        let promos = this.state.promos.map((promo, index)=>{
        return (
            <tr key={index}>
            <td> {promo.id} </td>
            <td> {promo.amount} </td>
            <td> {promo.limit} </td>
            <td> {promo.expiration} </td>
            <td> {promo.code} </td>
            <td> {promo.percentage.toString()} </td>
            <td> {promo.used} </td>
            <td> <a href={"/promos/" + (promo.id) + "/edit"}> <button className="btn btn-warning"> Edit Promo </button> </a> </td>
            </tr>
            )
    });

        let products = this.state.products.map((product, index)=>{
        return (
            <tr scope="row" key={index}>
            <td> {product.id} </td>
            <td> {product.brand} </td>
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
            <h2 className="col-md-3" onClick={this.orderList}> Orders </h2>
            <h2 className="col-md-3" onClick={this.customerList}> Customers </h2>
            <h2 className="col-md-3" onClick={this.promoList}> Promos </h2>
        </div>
          <table className="table" style={{backgroundColor:''}}>
            <thead className="thead-dark" style={this.state.productDisplay}>
                <tr>
                  <th>ID</th>
                  <th>Brand</th>
                  <th>Name</th>
                  <th>Origin</th>
                  <th>Ingredients</th>
                  <th>Desc</th>
                  <th>Price</th>
                  <th>Weight</th>
                  <th>Edit</th>
                </tr>
            </thead>

            <thead className="thead-dark" style={this.state.orderDisplay}>
                <tr>
                  <th className="text-center">Order No.</th>
                  <th className="text-center">Total Amt</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Update Status</th>
                  <th></th>
                </tr>
            </thead>

            <thead className="thead-dark" style={this.state.customerDisplay}>
                <tr>
                  <th>ID</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Address line 1</th>
                  <th>Address line 2</th>
                  <th>Postal Code</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Contact</th>
                  <th>Edit</th>
                </tr>
            </thead>

            <thead className="thead-dark" style={this.state.promoDisplay}>
                <tr>
                  <th>ID</th>
                  <th>Amount</th>
                  <th>Limit</th>
                  <th>Expiration</th>
                  <th>Code</th>
                  <th>Percentage</th>
                  <th>Used</th>
                  <th>Edit</th>
                </tr>
            </thead>
          <tbody>
          {products}
          {orders}
          {customers}
          {promos}
          </tbody>
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