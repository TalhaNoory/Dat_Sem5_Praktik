import React from 'react'
// import RU from 'react-update'
import CUID from 'cuid'

class PokemonID extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [
                { id: CUID, name: '' }
            ]
        };

        this.handleName = this.handleName.bind(this);
        this.handleID = this.handleID.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleID(event) {
        this.setState({
            id: event.target.value
        })
    }

    handleSubmit(event) {
        alert(`
        A Pokemon has been added to the list:
           
           Name:    ${this.state.name}
           id:      ${this.state.id}
            `);
        event.preventDefault();
        this.setState({
            pokemon: [{
                name: this.state.name,
                id: this.state.id
            }],
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleName} />
                    <input
                        type="submit"
                        value="Add Pokemon"
                        onChange={this.handleID} />
                </form>


                <div>
                    {/* {Map goes here!} */}
                    {this.state.pokemon.map((pokemon) =>
                        <div key={pokemon}>
                            <p>{pokemon.name}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default PokemonID;