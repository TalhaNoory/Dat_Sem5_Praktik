import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";
import userInfo from './Users'

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const query = `
        query Product($id: ID!) {
            Product(id:$id) {
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
              descriptions
            }
          }`;

    const url = "http://localhost:3000/graphql";
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id: this.props.match.params.id } }),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        this.setState({
          products: [result.data.Product]
        });
      })
      .catch(console.error);
  }

  render() {
    console.log()
    return (
      <div>
        {this.state.products !== undefined
          ? this.state.products.map((products) => (
            <div key={products.id}>
              <div className="container py-5">
                {/* Title */}
                <div className="row">
                  <div
                    className="col-10 mx-auto text-center
                                text-slanted text-blue my-5"
                  >
                    <h1>{products.title}</h1>
                  </div>
                </div>
                {/* End Title */}
                {/* Product Info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-3 my-3">
                    <img
                      src={products.image}
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  {/* Product text */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>{products.type}</h2>
                    {products.organic && (
                      <div style={{ backgroundColor: "lightgreen" }}>
                        Økologisk
                      </div>
                    )}
                    {products.cold && (
                      <div style={{ backgroundColor: "lightblue" }}>
                        {" "}
                          Frost
                      </div>
                    )}
                    <h5>{products.category}</h5>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      produceret af :{" "}
                      <span className="text-uppercase">
                      <Link to={`/userinfo/}`}>
                        {products.producer}
                      </Link>
                      {/* {this.state.user.map((user) =>
                      <Link to={`/userinfo/:${user.id}`}>
                        {products.producer}
                      </Link>)} */}
                      </span>
                    </h4>
                    <h3 className="text-blue">
                      <strong>
                        pris pr. {products.unit}
                        {": "}
                        <span> kr,- </span>
                        {products.price
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")}
                      </strong>
                    </h3>
                    <h5 className="text-blue">
                      <strong>
                        {products.bulkUnit}
                        {": kr,-"}
                      </strong>
                    </h5>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Om produktet :
                      </p>
                    <div className="text-muted lead">
                      {products.descriptions.map((des, i) => (
                        <div key={i}>
                          {des.productDescription}<br />
                          {des.goodBecause}
                        </div>
                      ))}
                    </div>
                    {/* End Product text */}
                    {/* Button */}
                    <div>
                      <Link to="/products">
                        <ButtonContainer>Tilbage til varer</ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          : null}
      </div>
    );
  }
}
