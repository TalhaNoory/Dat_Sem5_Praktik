import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [{
                id: '',
                name: '',
                type: '',
            }]
        };

        // this.handlePokemons = this.handlePokemons.bind(this)
        this.handleName = this.handleName.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handlePokemons(event) {
    //     this.setState([{
    //         name: event.target.value,
    //         type: event.target.value
    //     }])

    // }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleType(event) {
        this.setState({
            type: event.target.value
        })

    }

    handleSubmit(event) {
        alert(`
        A Pokemon has been added to the list: 
            ${this.state.name}
            ${this.state.type}
            `);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.value}
                        onChange={this.handleName} />
                    {/* <div>{this.state.name}</div> */}
                    <input
                        type="text"
                        name="type"
                        value={this.state.value}
                        onChange={this.handleType} />
                    {/* <div>{this.state.type}</div> */}
                    <input type="submit" value="Add Pokemon" />
                </form>

                <div>
                    {/* {Map goes here!} */}
                    {/* {this.state.pokemons.map((pokemon, id) =>
                        <li key={id} pokemon={pokemon.name} />
                    )} */}
                </div>
            </div>
        );
    }
}

export default NameForm;