import React, { Component } from 'react'
import ClassBaseHome from './classBaseApi/ClassBaseHome'
import FunctionBaseHome from './functionBaseApi/FunctionBaseHome'

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ClassBaseHome />
        <hr />
        <FunctionBaseHome />
      </div>
    )
  }
}

