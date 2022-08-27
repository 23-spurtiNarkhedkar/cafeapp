import { Button } from 'bootstrap'
import React, { Component } from 'react'

export default class LifeCycle extends Component {
    // constructor takes class as a object
    // and we need to call super(props) as this is the base class
    constructor(props) {
        // parent class / base class
        super(props)
        // this sets this.props to props
        // constrcutor is only place to setState
        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({ counter: this.state.counter + 1 });
        this.decrement = () => this.setState({ counter: this.state.counter - 1 });
    }

    // Lifecycle methodd

    // this is called right after render
    componentDidMount() {
        console.log("Component did mount");
        console.log("-------------------");
    }
    render() {
        return (
            <div>LifeCycle
                Counter : {this.state.counter}
                <Button onClick={this.increment}>Increment</Button>
                <Button onClick={this.decrement}>Increment</Button>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("Component did update")
    }
}
