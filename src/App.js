import React, { Component } from 'react'
import './App.css'

// import Card from './components/inline/Card'
// import Card from './components/external-file/Card'
import Card from './components/css-modules/Card'

class App extends Component {
  render () {
    return (
      <div>
        <Card/>
      </div>
    );
  }
}

export default App
