import React from 'react'
import ReactDOM from 'react-dom'


import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Projects from './components/pages/Projects'
import Footer from './components/pages/Footer'

import '@fortawesome/fontawesome-free/js/all.js'


import 'bulma'
import './style.scss'

class App extends React.Component{
  render(){
    return(
      <main>
        <Home />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Footer />

      </main>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
