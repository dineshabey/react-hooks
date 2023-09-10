import React, { Component } from 'react'

export default class ClassBaseHome extends Component {

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
        // console.log(data)
      }).catch(() => {
        this.setState({
          users: [],
          isLoading: false,
        })
      });
  }


  render() {
    return (
      <div>
        <h1>Class Base API Call</h1>
        <hr />
        {this.state.isLoading == true ?
          (<div>{''}<h2>Loading .......</h2>{''}</div>)
          : (<div> {this.state.users.length > 0 ? (
            this.state.users.map((val, key) => {
              return <div key={key}>
                <p>{val.email}</p>
              </div>;
            })
          ) : (<div>
            <p>No users found !</p>
          </div>)}
          </div>)}
      </div>
    )
  }
}
