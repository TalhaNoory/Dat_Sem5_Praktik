import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './styles.scss';

import Buttons from './../Forms/Button/index';
import { auth, signInWithGoogle } from './../../Firebase/utils';

import AuthWrapper from './../AuthWrapper/index';

//Forms
import FormInput from './../Forms/FormInput/index';
import Button from './../Forms/Button/index';

const initialState = {
    email: '',
    password: '',
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        });
    };

    //This will prevent the user, when clicking the button line 26, the page is not going to reload
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });

        } catch (err) {
            console.log(err)
        };
    };

    render() {
        const { email, password } = this.state;

        const configAuthWrapper = {
            headline: 'Login'
        };

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className='formWrap'>
                    <form onSubmit={this.handleSubmit}>

                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Email'
                            handleChange={this.handleChange}
                            autoComplete='on'
                        />

                        <FormInput
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Password'
                            handleChange={this.handleChange}
                            autoComplete='on'
                        />

                        <Button type='submit'>
                            LogIn
                            </Button>

                        <div className='socialSignin'>
                            <div className='row'>
                                <Buttons onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Buttons>
                            </div>
                        </div>

                        <div className='links'>
                            <Link to='/recovery'>
                                Reset Password
                            </Link>
                        </div>

                    </form>
                </div>
            </AuthWrapper>
        );
    };
};

export default SignIn;