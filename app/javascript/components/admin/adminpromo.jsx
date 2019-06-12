import React from 'react';

class AdminPromos extends React.Component {

  constructor() {
    super();
    // this.state = {
    //     display:''
    // }

    // this.visibleState = this.visibleState.bind(this);
  }

  // visibleState() {

  //   if (this.state.display === 'none') {
  //       this.setState({
  //       display: ''
  //           })
  //   } else {
  //       this.setState({
  //           display: 'none'
  //       })
  //   }

  // }

  render(){
    return(
      <div className="d-flex justify-content-center">
        <div className="mx-5 p-5 w-50">
            <h3 className="mb-3 font-weight-bold"onClick = {this.visibleState} > Add Promo </h3>
            <form action="/promos/create" method="POST" style={this.state}>

                <label> Percentage (true if amount is in %, false if amount is in $) </label>
                <input type="text" name="percentage" className="form-control"/>

                <label> Amount (e.g. 10)</label>
                <input type="text" name="amount" className="form-control"/>

                <label> Limit (number e.g 100) </label>
                <input type="text" name="limit" className="form-control"/>

                <label> Expiration (YYYY-MM-DD) </label>
                <input type="text" name="expiration" className="form-control"/>

                <label> Code </label>
                <input type="text" name="code" className="form-control"/>

                <label> Used (number, e.g. 0) </label>
                <input type="text" name="used" className="form-control"/> <br/>
                
                <div className="text-center">
                    <a class="btn btn-warning mr-4" href="/admin">Back</a>
                    <input type="submit" className="btn btn-success"/>
                </div>
            </form>
        </div>
      </div>
    )
  }
}


export default AdminPromos;