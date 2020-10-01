import React, { Component } from 'react';

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

    render() {
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
                                        {products.organic && <text style={{ backgroundColor: "lightgreen" }}>Økologisk</text>}
                                        {products.cold && <text style={{ backgroundColor: "lightblue" }}> Frost</text>}
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
                                                {products.bulkUnit}{": kr,-"} {products.bulkSizePrice.toFixed(2).toString().replace(".", ",")}
                                            </strong>
                                        </h5>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Om produktet :
                                    </p>
                                        <p className="text-muted lead">{products.descriptions.good[{}]}</p>
                                        {/* End Product text */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : null}
            </div>
        )
    }
};
