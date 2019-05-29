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
            <h2 onClick={this.visibleState}> Create Customer </h2>
            <form action="/customers/create" method="POST" style={this.state}>

                <label> First Name  </label>
                <input type="text" name="firstname" className="form-control"/>

                <label> Last Name  </label>
                <input type="text" name="lastname" className="form-control"/>

                <label> Email  </label>
                <input type="text" name="email" className="form-control"/>

                <label> Address Line 1 </label>
                <input type="text" name="address1" className="form-control"/>

                <label> Address Line 2 </label>
                <input type="text" name="address2" className="form-control"/>

                <label> Postal Code  </label>
                <input type="number" name="postal_code" className="form-control"/>

                <label> State </label>
                <input type="text" name="state" className="form-control"/>

                <label> Country  </label>
                <input type="text" name="country" className="form-control"/>

                <label> City  </label>
                <input type="text" name="city" className="form-control"/>

                <label> Contact  </label>
                <input type="text" name="contact" className="form-control"/> <br/>

                <input type="submit" className="btn-primary btn-block"/>
            </form>
        </div>
    )
  }
}


export default AdminCustomers;