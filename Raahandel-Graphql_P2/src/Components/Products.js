import React, { Component } from 'react';
import { ProductWrapper } from '../Button';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
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
        // const id = this.props.products;
        return (
            <div>
                <ProductWrapper
                    className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        {this.state.products !== undefined
                            ? this.state.products.map((products) => (
                                <div key={products.id}>
                                    <ProductConsumer>
                                        {(value) => (
                                            <div className="img-container p-5"
                                                // onClick={() =>
                                                //     value.handleDetail(id)
                                                // }
                                                >
                                                <Link to="/products/details">
                                                    <img src={products.image} alt="Product" className="card-img-top" />
                                                </Link>
                                                {products.organic && <text style={{ backgroundColor: "green" }}>Ø</text>}
                                                {products.cold && <text style={{ backgroundColor: "lightblue" }}>F</text>}
                                            </div>
                                        )}
                                    </ProductConsumer>
                                    {/* footer for the cart! */}
                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">{products.title}</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <number className="mr-1">{products.price.toFixed(2).toString().replace(".", ",")} /kr.</number>
                                        </h5>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1"> qty:</span>{products.quantity}
                                        </h5>
                                    </div>
                                </div>
                            )) : null}
                    </div>
                </ProductWrapper>
            </div>
        )
    }
};

//Gammel Gemt kode, kan måske bruges!

// {this.state.products !== undefined
//     ? this.state.products.map((products) => (
//         <div key={products.id}>
//             <ProductWrapper
//                 className="col-9 mx-auto col-md-6 col-lg-3 my-3">
//                 <div className="card">
//                     <div className="img-container p-5">
//                         <Link to='/products/details'>
//                             <img src={products.image} alt="Product" className="card-img-top" />
//                         </Link>
//                         {products.organic && <h6 style={{ backgroundColor: "green" }}>Ø</h6>}
//                         {products.cold && <h6 style={{ backgroundColor: "lightblue" }}>F</h6>}
//                     </div>
//                     {/* footer for the cart! */}
//                     <div className="card-footer d-flex justify-content-between">
//                         <p className="align-self-center mb-0">{products.title}</p>
//                         <h5 className="text-blue font-italic mb-0">
//                             <div className="mr-1">{products.price.toFixed(2).toString().replace(".", ",")} /kr.</div>
//                         </h5>
//                         <h5 className="text-blue font-italic mb-0">
//                             <span className="mr-1"> qty:</span>{products.quantity}
//                         </h5>
//                     </div>
//                     <div>
//                         {}
//                     </div>
//                 </div>
//             </ProductWrapper>
//         </div>
//     )) : null}
