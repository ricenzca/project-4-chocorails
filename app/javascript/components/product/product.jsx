import React from "react";
import { Link } from "react-router-dom";
import style from "./style.scss";
import EmailSub from '../emailsub/emailsub';

class Product extends React.Component {
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

    $('#choco1').on('click', () => {
        $('#chocotext1').slideToggle(400);
        console.log("ASDASDS")
    });

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
                <div>
                    <EmailSub />
                    <Link to="/checkout">Checkout LINK!</Link>
                    <div className="container-fluid">
                        <div
                            className="row"

                        >
                            {products.map((product, index) => (
                                <div className="card col-md-4" >
                                    <img
                                        className="card-img-top"
                                        src={product.img_url}
                                        data-toggle="collapse" href={"#choco" + (index+1)}
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {product.name}
                                        </h4>
                                        <p className="card-text">
                                            ${product.price}
                                        </p>
                                        <div className="collapse" id={"choco" + (index+1)}>
                                        <button className="btn-success"> ADD CCB </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link to="/checkout">Checkout LINK!</Link>
                    <h1>Product!!!</h1>
                </div>
            );
        }
    }
}

export default Product;