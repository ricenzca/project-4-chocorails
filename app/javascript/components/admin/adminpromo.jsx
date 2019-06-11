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
        <div className="mx-5 p-5 w-50">
            <h3 className="mb-3 font-weight-bold"onClick = {this.visibleState} > Add Promo </h3>
            <form action="/promos/create" method="POST" style={this.state}>
                <label> Amount </label>
                <input type="text" name="amount" className="form-control"/>

                <label> Limit </label>
                <input type="text" name="limit" className="form-control"/>

                <label> Expiration </label>
                <input type="text" name="expiration" className="form-control"/>

                <label> Code </label>
                <input type="text" name="code" className="form-control"/>

                <label> Percentage </label>
                <input type="text" name="percentage" className="form-control"/>

                <label> Used </label>
                <input type="text" name="used" className="form-control"/> <br/>
                
                <div className="text-right">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}


export default AdminPromos;