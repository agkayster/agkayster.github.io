import React from 'react'
import ReactDOM from 'react-dom'


import Home from './components/pages/Home'
import About from './components/pages/About'

class App extends React.Component{
  render(){
    return(
      <main>
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
