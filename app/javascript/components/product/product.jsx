import React from "react";

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3000/products/getall")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        products: result
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    toggleClass(e) {
        console.log(e.target);
    }

    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div
                    className="row"
                    onMouseOver={e => {
                        this.toggleClass(e);
                    }}
                >
                    {products.map(product => (
                        <div className="card col-md-4">
                            <img
                                src={product.img_url}
                                className="card-img-top"
                                style={{ height: "442px" }}
                            />
                            <div className="card-body">
                                <h1 className="card-title">{product.name}</h1>
                                <p className="card-text">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}
