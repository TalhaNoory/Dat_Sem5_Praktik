import React from 'react-dom'
import React, { Component } from 'react'
import { render } from '@testing-library/react'

// This is a Class which we converted from a 
// 'Function' => originated from 'LostCause.js'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    //The 2 methods below are called "Lifecycle Methods"
    //---------------------------------------------------
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //---------------------------------------------------
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
// function tick() {
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     );
// }