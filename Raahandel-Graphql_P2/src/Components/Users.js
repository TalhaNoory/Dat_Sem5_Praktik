import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    };

    componentDidMount() {
        const query = `
        query {
          allUsers {
            mail
            id
            name
            role
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
                    user: result.data.allUsers
                })
            })
            .catch(console.error);
    };
    render() {
        return (
            <div>
                {this.state.user !== undefined
                    ? this.state.user.map((user) => (
                        <div key={user.id}>
                            {user.mail}
                        </div>
                    )) : null}
            </div>
        )
    }
}
