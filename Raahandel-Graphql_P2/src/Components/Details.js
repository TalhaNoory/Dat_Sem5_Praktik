import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    };

    componentDidMount() {
        const query = `
        query {
            allProducts {
              id 
              producer 
              title 
              type 
              image 
              category 
              organic
              cold
              unit
              unitSize
              bulkUnit
              bulkSize
              price
              quantity
            }
          }`

        const url = "http://localhost:3000/graphql";
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };
        fetch(url, opts)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    products: result.data.allProducts
                })
            })
            .catch(console.error);
    };

    // bulkSizePrice() {
    //     const bulkSizePrice = this.state.products.bulkSize * this.state.products.price
    //     return bulkSizePrice;
    // }

    render() {
        // console.log(this.state.products)
        return (
            <div>
                {this.state.products !== undefined
                    ? this.state.products.map((products) => (
                        <div key={products.id}>
                            <div className="container py-5">
                                {/* Title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center
                                text-slanted text-blue my-5">
                                        <h1>{products.title}</h1>
                                    </div>
                                </div>
                                {/* End Title */}
                                {/* Product Info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-3 my-3">
                                        <img src={products.image} className="img-fluid" alt="product" />
                                    </div>
                                    {/* Product text */}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>{products.type}</h2>
                                        {products.organic && <div style={{ backgroundColor: "lightgreen" }}>Økologisk</div>}
                                        {products.cold && <div style={{ backgroundColor: "lightblue" }}> Frost</div>}
                                        <h5>{products.category}</h5>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            produceret af : <span className="text-uppercase">
                                                {products.producer}</span>
                                        </h4>
                                        <h3 className="text-blue">
                                            <strong>
                                                pris pr. {products.unit}{": "}
                                                <span> kr,- </span>{products.price.toFixed(2).toString().replace(".", ",")}
                                            </strong>
                                        </h3>
                                        <h5 className="text-blue">
                                            <strong>
                                                {products.bulkUnit}{": kr,-"} {}
                                            </strong>
                                        </h5>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Om produktet :
                                    </p>
                                        <p className="text-muted lead"></p>
                                        {/* End Product text */}
                                        {/* Button */}
                                        <div>
                                            <Link to='/products'>
                                                <ButtonContainer>Tilbage til varer</ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : null}
            </div>
        )
    }
};

