import React, { Component } from 'react'

export default class HomeClass extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {

        this.setState({
          users: data
        });
        console.log(data)
      });
  }


  render() {
    return (
      <div>

        {this.state.users.map((val, key) => {
          return <div key={key}>
            <p>{val.email}</p>
          </div>;
        })}

      </div>
    )
  }
}
