// import React from 'react'

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: '' };

//         this.handleName = this.handleName.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleName(event) {
//         this.setState({ name: event.target.value });
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.name);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         type="text"
//                         name="name"
//                         value={this.state.value}
//                         onChange={this.handleName} />
//                     <input type="submit" value="Submit" />
//                 </form>
//                 {/* {this.state.name.map((name, id) => (
//                     <p key={id} name={name.id}/>
//                     )
//                 )} */}
//             </div>
//         );
//     }
// }

// export default NameForm;