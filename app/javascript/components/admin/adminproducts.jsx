import React from 'react';

class AdminProducts extends React.Component {

  render(){
    return(
        <div>
            <form action="/products/create" method="POST">
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