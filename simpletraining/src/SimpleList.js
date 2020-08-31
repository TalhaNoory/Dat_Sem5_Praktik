import React from 'react'
import ID from 'react-html-id'

class PokemonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [
                {id: ID},
                {name: ''},
                {img: ''},
            ]
        };

        // this.handlePokemons = this.handlePokemons.bind(this)
        this.handleName = this.handleName.bind(this);
        this.handleImage = this.handleImage.bind(this);
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

    handleImage(event) {
        this.setState({
            img: event.target.value
        });
    }

    handleSubmit(event) {
        alert(`
        A Pokemon has been added to the list: 
           Name:   ${this.state.name}
           Image:     ${this.state.img}
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
                        onChange={this.handleName} />
                    {/* <div>{this.state.name}</div> */}
                    <input
                        type="text"
                        name="img"
                        onChange={this.handleImage} />
                    {/* <div>{this.state.type}</div> */}
                    <input type="submit" value="Add Pokemon" />
                </form>

                <div>
                    {/* {Map goes here!} */}
                    {this.state.pokemons.map((pokemon, id) =>
                        <p key={id} value={pokemon.name} />
                    )}
                </div>
            </div>
        );
    }
}

export default PokemonForm;