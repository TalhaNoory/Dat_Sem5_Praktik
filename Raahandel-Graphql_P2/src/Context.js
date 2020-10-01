import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
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

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { products: product };
        });
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
