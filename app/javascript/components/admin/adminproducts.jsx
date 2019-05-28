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
        <div className="col-md-3"  >
            <h2 onClick={this.visibleState}> Create Products </h2>
            <form action="/products/create" method="POST" style={this.state}>
                <label> Brand  </label>
                <input type="text" name="brand" className="form-control"/>

                <label> Name  </label>
                <input type="text" name="name" className="form-control"/>

                <label> Image Link  </label>
                <input type="text" name="img_url" className="form-control"/>

                <label> Origin  </label>
                <input type="text" name="origin" className="form-control"/>

                <label> ingredients  </label>
                <input type="text" name="ingredients" className="form-control"/>

                <label> Description  </label>
                <input type="textarea" name="desc" className="form-control"/>

                <label> Price  </label>
                <input type="text" name="price" className="form-control"/>

                <label> Weight  </label>
                <input type="text" name="weight" className="form-control"/> <br/>

                <input type="submit" className="btn-primary btn-block"/>
            </form>
        </div>
    )
  }
}


export default AdminProducts;