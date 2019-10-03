import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './components/common/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'


import 'bulma'
import './style.scss'

class App extends React.Component{
  render(){
    return(
      <main>
        <Navbar />
        <Home />
        <About />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
