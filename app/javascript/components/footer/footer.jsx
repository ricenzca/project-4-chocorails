import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div style={styles}>
                <footer> CHOCORAILS 2019 © All Rights Reserved </footer>
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
    marginTop: 24
};
