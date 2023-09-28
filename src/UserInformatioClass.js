import React, { Component } from 'react'

export default class UserInformatioClass extends Component {
    state = {
        count: 1,
        count2: 100,
    };
    componentDidMount() {
        console.log('did mount');
        this.setState({
            count2: this.state.count + this.state.count2,
        });
    }

    componentDidUpdate() {
        console.log('did update');
    }

    render() {
        return (
            <div>
                UserInformatioClass
                <h2>{this.state.count}</h2>
                <h2>{this.state.count2}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count +</button>
            </div>
        )
    }
}
