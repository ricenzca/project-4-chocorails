import React from 'react';

class AdminPromos extends React.Component {

  render(){
    return(
        <div>
            <h1> Create Promos </h1>
            <form action="/promos/create" method="POST">
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