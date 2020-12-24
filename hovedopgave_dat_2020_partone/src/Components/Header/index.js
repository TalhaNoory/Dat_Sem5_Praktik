import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';
import { auth } from './../../Firebase/utils';


import Logo from './../../assets/Raahandel.jpg';

const Header = props => {
    const { currentUser } = props;

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="Raahandel" />
                    </Link>
                </div>
                <div className="callToActions">

                    {/* If user IS logged in! */}
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    LogOut
                                </span>
                            </li>
                        </ul>
                    )}

                    {/* Only render if user is NOT logged in! */}
                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to='/registration'>
                                    Register
                            </Link>
                            </li>
                            <li>
                                <Link to='/login'>
                                    Login
                            </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

//Our default for 'currentUser'
Header.defaultProps = {
    currentUser: null
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser 
});

export default connect(mapStateToProps, null)(Header);
