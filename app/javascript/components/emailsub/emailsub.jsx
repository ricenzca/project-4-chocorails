import React from "react";

class EmailSub extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            promo: "",
            style: {
                display: ""
            }
        };

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        console.log("typing", e.target.value);
        this.setState({
            email: e.target.value
        });
    }

    onClickHandler() {
        if (this.state.email.includes("@")) {
            console.log("email", this.state.email);

            this.setState({
                promo: " Your Promo Code is WELCOME10%",
                style: {
                    display: "none"
                }
            });
        } else {
            console.log("nooooooooo");
            this.setState({
                error: ""
            });
        }
    }

    render() {
        const inputStyle = {
            width:270,
            borderRadius:4,
            border:'none',
            padding:5,
            backgroundColor: '#f6f6f6',
            color:'black',
            outline:'none'
        }
        return (
            <div
                style={{
                    backgroundColor: "rgb(54,54,54)",
                    color: "white",
                    paddingTop: 15,
                    paddingBottom: 2,
                    textAlign: "center"
                }}
            >
                <form action="/customers/subscribe" method="POST">
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        style={{...this.state.style, ...inputStyle}}
                        name="email"
                        placeholder="Subscribe to get 10% Off!"
                        noValidate
                        required
                    />
                    <button
                        type="submit"
                        style={{...this.state.style, ...{marginLeft:3}}}
                        onClick={this.onClickHandler}
                        className="btn btn-outline-danger btn-sm"
                    >
                        {" "}
                        Submit{" "}
                    </button>
                    <p>
                        {this.state.promo} {this.state.error}
                    </p>
                </form>
            </div>
        );
    }
}

export default EmailSub;