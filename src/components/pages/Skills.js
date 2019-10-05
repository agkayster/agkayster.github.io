import React from 'react'

class Skills extends React.Component{
  render(){
    return(
      <section className = "section">
        <div id="skills" className= "container">
          <div className="columns is-multiline">
            <div className="column is-full-desktop is-full-tablet">
              <h2 className="title is-2">skills & experience.</h2>
              <ul className="tech-list is-multiline">
                <li >
                  <img src="./images/react_logo.svg" />
                  <span className="tech-logos">React</span>
                </li>
                <li >
                  <img src="./images/html_5_logo.svg" />
                  <span className="tech-logos">HTML5</span>
                </li>
                <li >
                  <img src="./images/python_logo.svg" />
                  <span className="tech-logos">PYTHON</span>
                </li>
                <li >
                  <img src="./images/bulma_logo.svg" />
                  <span className="tech-logos">BULMA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    )
  }
}
export default Skills
