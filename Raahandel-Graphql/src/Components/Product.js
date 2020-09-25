import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ProductWrapper } from './Button';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../Context';

export default class Product extends Component {
    render() {
        const
            {
                id, title, image, price,
                quantity, organic, cold, inCart,
                //producer, type, category, descriptions,
            } = this.props.product;
        return (
            <ProductWrapper
                className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5"
                                onClick={() => 
                                    value.handleDetail(id)
                                }>
                                <Link to="/details">
                                    <img src={image} alt="Product" className="card-img-top" />    
                                </Link>
                                {organic && <text style={{backgroundColor:"green"}}>Ø</text>}
                                {cold && <text style={{backgroundColor:"lightblue"}}>F</text>}
                                <button className="card-btn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        console.log('Produktet er tilføjet til kurv!')
                                    }}>
                                    {inCart ? (
                                        <p className="text-capitalize mb-0" disabled>
                                            {" "}
                                in Cart</p>
                                    ) : (
                                            <AddShoppingCartIcon />
                                        )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                    {/* footer for the cart! */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">{price}./kr.</span>
                        </h5>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1"> qty:</span>{quantity}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
};

//Incase someone should mess up in the data section
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        producer: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        image: PropTypes.string,
        category: PropTypes.string,
        organic: PropTypes.bool,
        cold: PropTypes.bool,
        unit: PropTypes.string,
        unitSize: PropTypes.number,
        bulkUnit: PropTypes.string,
        bulkSize: PropTypes.number,
        price: PropTypes.number,
        quantity: PropTypes.number,
        descriptions: PropTypes.array,
        inCart: PropTypes.bool
    }).isRequired
};

