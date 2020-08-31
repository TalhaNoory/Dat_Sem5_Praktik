// import React from 'react'

// class NameImageForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             img: ''
//         };

//         this.handleName = this.handleName.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleName(event) {
//         this.setState({
//             name: event.target.value,
//             img: event.target.value

//         });
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.name + this.state.img);
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
//                         onChange={this.handleName}
//                     />
//                     <input 
//                         type="text"
//                         name="img"
//                         value={this.state.value}
//                         onChange={this.handleName}
//                     />
//                     <img src={this.state.img} alt='' />
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         );
//     }
// }

// export default NameImageForm;