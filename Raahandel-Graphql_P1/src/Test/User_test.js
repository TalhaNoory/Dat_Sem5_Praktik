import React, { Component } from 'react'

export default class User_test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    };

    componentDidMount() {
        const query = `
          query {
            User(id:"ckf2seoiubsevnobawobfbnew") {
              mail
              name
              role
          }
        }`;

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
                    user: [result]
                })
            })
            .catch(console.error);
    };

    render() {
        console.log(this.state.user)
        return (
            <div>
                {this.state.user !== undefined ? this.state.user.map(user =>
                    (<div key={user.id}>
                        {user.id}{user.mail}
                    </div>)
                ) : null}
            </div>
        )
    }
}

