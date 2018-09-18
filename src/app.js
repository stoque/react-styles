import React, { Component, Fragment } from 'react'
import './App.css'

// import Card from './components/inline/card'
// import Card from './components/external-file/card'
// import Card from './components/css-modules/card'
import Card from './components/styled-components/card'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Card/>
      </Fragment>
    );
  }
}

export default App
