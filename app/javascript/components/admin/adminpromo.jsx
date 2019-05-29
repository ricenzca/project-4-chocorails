import React from 'react';

class AdminPromos extends React.Component {

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
        <div className="col-md-6">
            <h2 onClick = {this.visibleState}> Create Promos </h2>
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
                <input type="submit" className="btn-primary btn-block"/>
            </form>
        </div>
    )
  }
}


export default AdminPromos;