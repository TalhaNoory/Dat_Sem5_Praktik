import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const
                        {
                            producer, title, type,
                            image, category,
                            organic, cold, unit, unitSize,
                            bulkUnit, bulkSize, price,
                            descriptions,
                            //id, cold, inCart
                        } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center
                                text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* End Title */}
                            {/* Product Info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-3 my-3">
                                    <img src={image} className="img-fluid" alt="product" />
                                </div>
                                {/* Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>{type}</h2>
                                    {organic && <text style={{backgroundColor:"lightgreen"}}>Økologisk</text>}
                                    {cold && <text style={{backgroundColor:"lightblue"}}> Frost</text>}
                                    <h5>{category}</h5>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        produceret af : <span className="text-uppercase">
                                            {producer}</span>
                                    </h4>
                                    <h3 className="text-blue">
                                        <strong>
                                            pris: <span>kr./ </span>{price.toFixed(2).toString().replace(".", ",")}
                                        </strong>
                                    </h3>
                                    <h5 className="text-blue">
                                        <strong>
                                            unit: {unit}
                                            {" | "}unitSize: {unitSize}
                                            {" | "}bulkUnit: {bulkUnit}
                                            {" | "}bulkSize: {bulkSize}

                                        </strong>
                                    </h5>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Om produktet :
                                    </p>
                                    <p className="text-muted lead">{descriptions[{}]}</p>
                                    {/* End Product text */}
                                    {/* Button */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>Tilbage til varer</ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
};
