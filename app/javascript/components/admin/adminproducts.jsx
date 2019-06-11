import React from 'react';

class AdminProducts extends React.Component {

  constructor() {
    super();
    // this.state = {
    //     display:'none'
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
            <h3 className="mb-3 font-weight-bold" onClick={this.visibleState}> Add Product  </h3>
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


export default AdminProducts;