import React, { Component } from 'react';
function getRandomColor() {
  const letters = "0123456789ABCDEF"; // Hexadecimal characters
  let color = "#";

  // Generate a 6-digit random hexadecimal color code
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}





export default class ClassBaseHome extends Component {

  state = {
    users: [],
    isLoading: true,
    selectedUser: '',
    bgColor: 'teal',
    count: 0,
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

  componentDidUpdate(prevProps, prevState) {
    // we can check what update
    //if the selected user change,we need to update the color

    console.log('componentDidUpdate');
    console.log(prevState.selectedUser.id);
    console.log(this.state.selectedUser.id);


    if (prevState.selectedUser.id !== this.state.selectedUser.id || prevState.count !== this.state.count) {
      this.setState({
        bgColor: getRandomColor(),
      });
    }
  }

  handleMoreDetails(selectedUser) {
    // console.log(selectedUser)
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

        <div style={{ background: this.state.bgColor, color: 'white' }}>
          {Object.keys(this.state.selectedUser).length > 0 ? (
            <div>
              {''}
              <h2>{this.state.selectedUser.name}</h2>
              <h2>Email : {this.state.selectedUser.email}</h2>
              <h2>Address : {this.state.selectedUser.address?.city}</h2>
            </div>
          ) : (
            <h2>Information will be shown</h2>
          )}
        </div>
        <br />
        <p>{this.state.count}</p>

        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>count +</button>
      </div>
    )
  }
}
