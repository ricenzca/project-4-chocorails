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
        <div className="col-md-3">
            <h1 onClick = {this.visibleState}> Create Promos </h1>
            <form action="/promos/create" method="POST" style={this.state}>
                <label> Amount </label>
                <input type="text" name="amount"/> <br/>

                <label> Limit </label>
                <input type="text" name="limit"/> <br/>

                <label> Expiration </label>
                <input type="text" name="expiration"/> <br/>

                <label> Code </label>
                <input type="text" name="code"/> <br/>

                <label> Percentage </label>
                <input type="text" name="percentage"/> <br/>

                <label> Used </label>
                <input type="text" name="used"/> <br/>
                <input type="submit"/>
            </form>
        </div>
    )
  }
}


export default AdminPromos;