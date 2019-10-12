import React from 'react'

class About extends React.Component{
  render(){
    return(
      <section className = "section">
        <div id="about" className= "aboutcontainer">
          <div className="columns">
            <div className="column">
              <h2 className="title is-2 abouttitle">about the developer.</h2>
              <div className="contentcontainer">
                <div className="intro">
                  <p className="introcontent"> My name is Ejike Chiboka. A graduate of Software Engineering Immersive Course at General Assembly, London and currently looking for opportunities as a Full Stack Developer.<br />
                  Coding has always intrigued me ever since I wrote my first code as a final year student in University, this was part of my final year project. Since then I have been passionate about software deveopment and how I can use it to build web applications that would change the world. <br />
                  Having the urge to go into professional software development full-time; I decided to take the General Assembly&rsquo;s Software Engineering Immersive Course, where I learnt how to build full stack apps from scratch, by building both Front-end and Back-end and connecting both. Since then I have become a confident developer but with an insatiable appetite for knowledge.<br />
                  </p>
                </div>
                <div className="interest">
                  <p className="interestcontent">When I am not coding, I like to read books, watch movies, play chess and listen to good music as these activities provide a way for me to relax.<br /> My knack for taking on both logical and creative challenges and making sure I overcome such challenges is what really makes me want to pursue a career in Software development, where logical and creative outcomes can come together to create new and exciting products for the world to experience.<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default About
