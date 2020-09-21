import React, { Component } from 'react'
import { productList, detailProduct } from './data'

const ProductContext = React.createContext();
//The Provider


//The Consumer


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };

    //Here we are getting new fresh set of values!
    //Instead of copying them...
    //----------------------------------------------------------
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        productList.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem]
        });
        this.setState(() => {
            return { products: tempProducts }
        })
    }
    //----------------------------------------------------------

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addProductToCart = (id) => {
        console.log(`The carts id is ${id}`)
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addProductToCart: this.addProductToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }
