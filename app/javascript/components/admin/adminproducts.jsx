import React from 'react';

class AdminProducts extends React.Component {

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
        <div className="col-md-3" onClick={this.visibleState} >
            <h1> Create Products </h1>
            <form action="/products/create" method="POST" style={this.state}>
                <label> Brand  </label>
                <input type="text" name="brand"/> <br/>

                <label> Name  </label>
                <input type="text" name="name"/> <br/>

                <label> Image Link  </label>
                <input type="text" name="img_url"/> <br/>

                <label> Origin  </label>
                <input type="text" name="origin"/> <br/>

                <label> ingredients  </label>
                <input type="text" name="ingredients"/> <br/>

                <label> Description  </label>
                <input type="textarea" name="desc"/> <br/>

                <label> Price  </label>
                <input type="text" name="price"/> <br/>

                <label> Weight  </label>
                <input type="text" name="weight"/> <br/>

                <input type="submit"/>
            </form>
        </div>
    )
  }
}


export default AdminProducts;