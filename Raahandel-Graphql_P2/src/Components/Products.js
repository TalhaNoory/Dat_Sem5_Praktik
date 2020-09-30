import React, { Component } from 'react'
import { ProductWrapper } from '../Button'

export default class Products extends Component {
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
          }
        `

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
        // console.log(this.state.products)
        return (
            <div>
                {this.state.products !== undefined
                    ? this.state.products.map((products) => (
                        <div key={products.id}>
                            {products.unit}
                        </div>
                    )) : null}
            </div>
        )
    }
}
