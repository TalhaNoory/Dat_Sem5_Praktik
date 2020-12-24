/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Drinks from './../../assets/Drinks.jpg';
import Vegetables from './../../assets/Vegetables.jpg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Drinks})`
                    }}>
                    <a>
                        Drinks
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Vegetables})`
                    }}>
                    <a>
                        Vegetables
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;