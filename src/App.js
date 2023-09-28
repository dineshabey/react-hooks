import React, { Component } from 'react'
import ClassBaseHome from './classBaseApi/ClassBaseHome'
import FunctionBaseHome from './functionBaseApi/FunctionBaseHome'
import UserInformationLayouts from './functionBaseApi/UserInformationLayouts'
import UserInformatioClass from './UserInformatioClass'

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ClassBaseHome />
        <hr />
        {/* <FunctionBaseHome /> */}

        {/* <UserInformationLayouts/> */}

        {/* <UserInformatioClass /> */}

      </div>
    )
  }
}

