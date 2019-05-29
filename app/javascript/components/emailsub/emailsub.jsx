import React from "react";

class EmailSub extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            promo: "",
            style: {
                display: "",
                width: 300
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
                promo: " your promo code is WELCOME10%",
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
        return (
            <div
                style={{
                    backgroundColor: "black",
                    color: "white",
                    paddingTop: 6,
                    paddingBottom: 2,
                    textAlign: "center"
                }}
            >
                <form action="/customers/subscribe" method="POST">
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        style={this.state.style}
                        name="email"
                        placeholder="Subscribe to get 10% Off!"
                        noValidate
                        required
                    />
                    <button
                        type="submit"
                        style={this.state.style}
                        onClick={this.onClickHandler}
                        className="btn-primary"
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
