import React from 'react'
// import RU from 'react-update'
// import CUID from 'cuid'
import {v5 as uuid} from 'uuid'

class PokemonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [
                { id: uuid, name: '', img: '' }
            ],
            // pokemons: [
            //     { id: cuid },
            //     { name: '' },
            //     { img: '' },
            // ]
        };

        this.handleName = this.handleName.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleID = this.handleID.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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

    handleID(event) {
        this.setState({
            id: event.target.value
        })
    }

    handleSubmit(event) {
        alert(`
        A Pokemon has been added to the list:
           
           Name:    ${this.state.name}
           Image:   ${this.state.img}
           id:      ${this.state.id}
            `);
        event.preventDefault();
        this.setState({
            pokemon: [{
                name: this.state.name,
                img: this.state.img,
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
                        type="text"
                        onChange={this.handleImage} />
                    <input
                        type="submit"
                        value="Add Pokemon"
                        onChange={this.handleID} />
                </form>


                <div>
                    {/* {Map goes here!} */}
                    {this.state.pokemon.map((pokemon) =>
                        <div>
                            <p key={pokemon.id}>{pokemon.name}</p>
                            <img src={pokemon.img} alt='' />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default PokemonForm;