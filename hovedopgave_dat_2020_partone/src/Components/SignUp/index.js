import React, { Component } from 'react';
import './styles.scss';

//Firebase
import { auth, handleUserProfile } from './../../Firebase/utils';

import AuthWrapper from './../AuthWrapper/index';

//Forms
import FormInput from './../Forms/FormInput/index';
import Button from './../Forms/Button/index';

const intitialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: [],
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...intitialState
        };

        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(e) {
        const { name, value } = e.target

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = async event => {
        //This is gonna prevent the 'form' from posting to itself & reloading the page!
        event.preventDefault();
        const { displayName, email, password, confirmPassword, errors } = this.state;

        if (password !== confirmPassword) {
            const err = ['Password dont match, please try again'];
            this.setState({
                errors: err
            })
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, { displayName });

            this.setState({
                ...intitialState
            })

        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { displayName, email, password, confirmPassword, errors } = this.state;

        const configAuthWrapper = {
            headline: 'Registration'
        };

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className='formWrap'>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}

                    <form onSubmit={this.handleFormSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={displayName}
                            placeholder='Full name'
                            onChange={this.handleChange}
                            autoComplete='on'
                        />

                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Email'
                            onChange={this.handleChange}
                            autoComplete='on'
                        />

                        <FormInput
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Password'
                            onChange={this.handleChange}
                            autoComplete='on'
                        />

                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            onChange={this.handleChange}
                            autoComplete='on'
                        />

                        <Button type='submit'>
                            Register
                        </Button>
                    </form>
                </div>
            </AuthWrapper>
        );
    };
};

export default SignUp;
