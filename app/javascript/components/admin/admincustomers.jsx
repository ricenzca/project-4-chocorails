import React from 'react';

class AdminCustomers extends React.Component {

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
            <h1 onClick={this.visibleState}> Create Customer </h1>
            <form action="/customers/create" method="POST" style={this.state}>
                <label> Email  </label>
                <input type="text" name="email"/> <br/>

                <label> Address  </label>
                <input type="text" name="address"/> <br/>

                <label> Postal Code  </label>
                <input type="text" name="postal_code"/> <br/>

                <label> Country  </label>
                <input type="text" name="country"/> <br/>

                <label> City  </label>
                <input type="text" name="city"/> <br/>

                <label> Contact  </label>
                <input type="textarea" name="contact"/> <br/>

                <input type="submit"/>
            </form>
        </div>
    )
  }
}


export default AdminCustomers;