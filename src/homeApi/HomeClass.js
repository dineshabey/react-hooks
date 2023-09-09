import React, { Component } from 'react'

export default class HomeClass extends Component {

  state = {
    users: [],
    isLoading: true,
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data,
          isLoading: false
        });
        console.log(data)
      }).catch(() => {
    
      });
  }


  render() {
    return (
      <div>

        {this.state.isLoading == true ? (<div>{''}<h2>Loading .......</h2></div>) : (<div>

          {this.state.users.map((val, key) => {
            return <div key={key}>
              <p>{val.email}</p>
            </div>;
          })}
        </div>)}



      </div>
    )
  }
}
