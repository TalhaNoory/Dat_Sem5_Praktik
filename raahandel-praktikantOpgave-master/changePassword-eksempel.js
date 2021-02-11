import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import Form from '../styles/Form';

// Dette er min Mutation. Det kunne også Ha' været en Query.
// Den har navnet "CHANGE_PASSWORD_MUTATION".
// Endpointet hos serveren er "changePassword"
// Ligesom Query, så tager den imod variabler.

// OBS. I ser ingen URL'er, som I gør med Axios. Det er fordi at man sætter URL, i en fil som laver et kald til serveren, hver gang Apollo kører.

const CHANGE_PASSWORD_MUTATION = gql `
    mutation CHANGE_PASSWORD_MUTATION(
        $oldPassword: String!
        $password: String!
        $confirmPassword: String!
    ) {
        changePassword(
            oldPassword: $oldPassword
            password: $password
            confirmPassword: $confirmPassword
        ) {
            message
        }
    }
`;

class ChangePassword extends React.Component {
    state = {
        oldPassword: '',
        password: '',
        confirmPassword: ''
    };

    // Dette er min onSubmit funktion, som kører når man submitter formen.
    // Den kører i promise (async/await), som fortæller at den skal køre await, inden den begynder på andet.
    changePassword = async (e, changePasswordMutation) => {
        e.preventDefault();
        // Dette er et af de steder hvor man typisk ville sætte sine variabler i en mutation.
        // Det andet sted, er i selve komponenten, som jeg viser nedenunder. Det gør man oftest med Queries.
        // Mine variable er alt i min state. oldPassword, password og confirmPassword.
        const res = await changePasswordMutation({
            variables: {
                ...this.state,
            },
        }).then(response => {
            this.setState({
                oldPassword: '',
                password: '',
                confirmPassword: ''
            });
            window.scrollTo(0, 0);
            // Catch potential errors and set them to state
        }).catch((e) => {
            this.setState({
                oldPassword: '',
                password: '',
                confirmPassword: ''
            });
            window.scrollTo(0, 0);
        });
    };

    handlePassword = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { oldPassword, password, confirmPassword } = this.state;

        // Her kalder man selve Mutation eller Query komponentet, som er en del af Apollo.
        // Her kan I også set det andet eksempel på hvor variabler kan sættes.
        return (
            <Mutation mutation={CHANGE_PASSWORD_MUTATION} variables={this.state}>
                {(changePassword, { error, loading, called }) => {
                    // Det fede ved Apollo er at man får en masse andre fede props.
                    // Bl.a. dem i ser ovenover.
                    // Med dem kan man sige if(error). Hvilket gør at den returnere hvis der er fejl.
                    // if(loading) gør at så længe den loader, så kan du vise en indikator på at den loader.
                    // if(called) kan du bruge hvis du vil lave en action i sekundet at din Mutation bliver kaldt. Og ikke efter at den er færdig, som du normalt gør.
                    // Formen er bare simpelt HTML/Javascript, hvor jeg udfylder felterne, og ændrer min state.
                    return (
                        <Form
                            className="shortForm"
                            method="post"
                            onSubmit={e => this.changePassword(e, changePassword)}
                        >
                            <fieldset disabled={loading} aria-busy={loading}>
                                <div className="fieldsContainer accountFields">
                                    <label htmlFor="oldPassword">
                                        <div className="fieldTitle">
                                            Ændre kodeord
                                        </div>
                                        <div className="textField">
                                            <input
                                                type="password"
                                                id="oldPassword"
                                                name="oldPassword"
                                                placeholder="Nuværende kodeord"
                                                onChange={(e) => this.handlePassword(e)}
                                                value={oldPassword}
                                                required
                                            />
                                        </div>
                                    </label>
                                    <label htmlFor="password">
                                        <div className="textField noHeaderDoubleField">
                                            <input
                                                className={
                                                    confirmPassword.length > 0 ? 
                                                        confirmPassword === password ? "match" :
                                                        "" :
                                                    ""
                                                }
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Nyt kodeord"
                                                onChange={(e) => this.handlePassword(e)}
                                                value={password}
                                                required
                                            />
                                        </div>
                                    </label>
                                    <label htmlFor="confirmPassword">
                                        <div className="textField noHeaderField">
                                            <input
                                                className={
                                                    confirmPassword.length > 0 ? 
                                                        confirmPassword === password ? "match" :
                                                        "" :
                                                    ""
                                                }
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                placeholder="Gentag nyt kodeord"
                                                onChange={e => {
                                                    e.persist();
                                                    this.handlePassword(e);
                                                }}
                                                value={confirmPassword}
                                                required
                                            />
                                        </div>
                                    </label>
                                    <div className="accountButton">
                                        <div className="update">
                                            <div
                                                className={""
                                                    /*!updateOwnProduct.loading
                                                    ? "available" 
                                                    : "unavailable"*/
                                                }
                                            />
                                            <div className="buttonContainer">
                                                <label htmlFor="submit">
                                                    <div className="buttonInside create">
                                                        <div className="right">
                                                            GODKEND
                                                        </div>
                                                        <img src="https://res.cloudinary.com/raahandel/image/upload/v1587539417/assets/arrowRightWhite.svg" alt="<" />
                                                    </div>
                                                </label>
                                                <button id="submit" type="submit">
                                                    GODKEND
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </Form>
                    );
                }}
            </Mutation>
        )
    }
}

export default ChangePassword;