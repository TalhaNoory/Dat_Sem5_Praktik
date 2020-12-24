import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

//FireBase
import { auth } from './../../Firebase/utils';

//Forms
import AuthWrapper from './../AuthWrapper/index';
import FormInput from './../Forms/FormInput/index';
import Button from './../Forms/Button/index';

const initialState = {
    email: '',
    errors: []
};

class EmailPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        });
    };

    //This will prevent the page from posting to itself causing it to refresh the page!
    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { email } = this.state;

            //This sends us back to the login page, after we have reseted our password.
            const config = {
                url: 'http://localhost:3000/login'
            }

            auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    this.props.history.push('/login')
                })
                .catch(() => {
                    const err = ['Email not valid. Please try again.']
                    this.setState({
                        errors: err
                    })
                })
        } catch (err) {
            //console.log(err)
        }

    }

    render() {

        const { email, errors } = this.state;

        const configAuthWrapper = {
            headline: 'Email Password'
        };

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className='formWrap'>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((e, index) => {
                                return (
                                    <li key={index}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <form onSubmit={this.handleSubmit}>

                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Email'
                            onChange={this.handleChange}
                        />

                        <Button type='submit'>
                            Email Password
                        </Button>

                    </form>

                </div>
            </AuthWrapper>
        );
    };
};

export default withRouter(EmailPassword);
