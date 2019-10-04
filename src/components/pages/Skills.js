import React from 'react'

class Skills extends React.Component{
  render(){
    return(
      <div id="skills">
        <div className="section skills">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-full-desktop is-full-tablet">
                <h2 className="black-title is-full-tablet is-multiline is-half-desktop">Skills</h2>
                <ul className="tech-list is-multiline">
                  <li >
                    <img className="react-tech" src="https://ih0.redbubble.net/image.523773899.2261/flat,550x550,075,f.u4.jpg" />
                    <span className="react-tech">React</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Skills
