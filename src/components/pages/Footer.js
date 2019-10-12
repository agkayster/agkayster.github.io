import React from 'react'

class Footer extends React.Component{
  render(){
    return(
      <footer>
        <section className="section">
          <div id="contact" className="contactcontainer">
            <a href="#"><img className="logo" src=""/></a>
            <h2 className="title is-2 contact">contact.</h2>


            <a href="mailto:ejike.chiboka@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a>
            <a href="https://https://github.com/agkayster" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ejike-chiboka-pmp/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.twitter.com/agkayster" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>

            <span><small>© ejike.chiboka</small></span>
          </div>
        </section>
      </footer>

    )
  }
}

export default Footer
