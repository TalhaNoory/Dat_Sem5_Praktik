import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pokemon: {
                name: '',
                type: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value,
            type: event.target.value
        });
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
                        name="pokemon"
                        value={this.state.pokemon.value}
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        name="pokemon"
                        value={this.state.pokemon.value}
                        onChange={this.handleChange} />
                    <input type="submit" value="Add Pokemon" />
                </form>
                <div>
                    {/* {Map goes here!} */}
                </div>
            </div>
        );
    }
}

export default NameForm;