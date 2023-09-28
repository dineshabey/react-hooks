import React, { Component } from 'react'

export default class ClassBaseHome extends Component {

  state = {
    users: [],
    isLoading: true,
    email: '',
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

  handleMoreDetails(email) {
    this.setState({
      email: email
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
                <button onClick={() => this.handleMoreDetails(val.email)} style={{ fontSize: '15px' }}>More details</button>
              </div>;
            })
          ) : (<div>
            <p>No users found !</p>
          </div>)}
          </div>)}
        <div style={{ background: 'yellow' }}>
          <h2>{this.state.email}</h2>
        </div>


      </div>
    )
  }
}
