import React from 'react';

class Footer extends React.Component {

  render(){
    return(
        <div style={styles} className="fixed-bottom">
            <footer> CHOCORAILS 2019 © Contact Us at choco@choco.com </footer>
        </div>
    );
  }
}

export default Footer;

const styles = {
    backgroundColor: "black",
    color: "white",
    padding: 16,
    textAlign: "center",
}