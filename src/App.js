import React, { Component } from 'react'
import HomeClass from './homeApi/HomeClass'

export default class App extends Component {
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center'}}>
        <HomeClass />
      </div>
    )
  }
}

