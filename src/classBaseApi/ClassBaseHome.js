import React, { Component } from 'react'

export default class ClassBaseHome extends Component {

  state = {
    users: [],
    isLoading: true,
    selectedUser: '',
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

  handleMoreDetails(selectedUser) {
    console.log(selectedUser)
    this.setState({
      selectedUser: selectedUser
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
              return <div key={key} style={{ padding: '5px' }}><p>{val.email}</p>
                <button onClick={() => this.handleMoreDetails(val)} style={{ fontSize: '15px' }}>More details</button>
              </div>;
            })
          ) : (<div>
            <p>No users found !</p>
          </div>)}
          </div>)}
        <div style={{ background: 'green' }}>
          <h2>{this.state.selectedUser.name}</h2>
          <h2>Email : {this.state.selectedUser.email}</h2>
          <h2>Address : {this.state.selectedUser.address?.city}</h2>
        </div>


      </div>
    )
  }
}
