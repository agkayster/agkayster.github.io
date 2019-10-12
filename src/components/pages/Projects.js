import React from 'react'

import ProjectCard from '../common/ProjectCard'

class Projects extends React.Component{
  constructor(){
    super()

    this.state = {
      data: [
        {
          id: '1',
          title: 'Space Invaders',
          tech: 'Python | Flask | PostgreSQL | React | Webpack | Ajax | JavaScript (ES6) | HTML5 | Bulma (CSS framework) | SCSS | Heroku',
          description: 'Space Invaders is an entertaining browser-based arcade style game. Challenge your reaction skills by stopping Aliens from invading earth while avoiding getting killed by the same Aliens.It was an individual project built in a week, and was both the first proper game I had built, and my first real-world type practice with JavaScript.',
          type: 'JavaScript ES6',
          image: './images/Space Invaders.png',
          link: 'https://bit.ly/2nb9zln',
          git: 'https://bit.ly/2mmS01d'
        },
        {
          id: '2',
          title: 'NewsAPI',
          tech: 'Python | Flask | PostgreSQL | React | Webpack | Ajax | JavaScript (ES6) | HTML5 | Bulma (CSS framework) | SCSS | Heroku',
          description: 'NEWS API is a news aggregator collating online news from different online papers across various countries. It was a pair coding project built in 2 days, and was both the first aggregating site we built, and our first real-world type practice with REACT.',
          type: 'React App',
          image: './images/NewsAPI.png',
          link: 'https://bit.ly/2oKlszj',
          git: 'https://bit.ly/2o39Jv1'
        },
        {
          id: '3',
          title: 'Lost the Plot' ,
          tech: 'Python | Flask | PostgreSQL | React | Webpack | Ajax | JavaScript (ES6) | HTML5 | Bulma (CSS framework) | SCSS | Heroku',
          description: 'Lost the plot is a web-site primarily aimed at Londoners who are looking for a plot of land on which to grow their own food (or to help grow food, or take part in other gardening activities).This project has been built as part of a learning module in General Assembly"s Software Engineering Immersive Course using JavaScript and React on the front-end and Express and MongoDB on the back-end.',
          type: 'Full-Stack',
          image: './images/Lost the Plot.png',
          link: 'https://bit.ly/2n22bJ9',
          git: 'https://bit.ly/2nZLjm6'
        },
        {
          id: '4',
          title: 'Gympro',
          tech: 'Python | Flask | PostgreSQL | React | Webpack | Ajax | JavaScript (ES6) | HTML5 | Bulma (CSS framework) | SCSS | Heroku',
          description: 'Gympro is a web application primarily aimed at those who love to go to the gym and work out. It allows users: 1. Search for exercises for each category of the body e.g. Thighs, Legs, Shoulders, Chest, Core and Arms. 2. Create workout programmes like Summer Body,etc.',
          type: 'Full Stack',
          image: './images/GymproApp.png',
          link: 'https://bit.ly/2n24agz',
          git: 'https://bit.ly/2nb4fOV'
        }
      ]
    }
  }

  render(){
    const classes = 'column is-mutiline is-half-desktop is-full-tablet is-full-mobile'
    return(
      <section className="section projects">
        <div id="projects" className="projects">

          <div className="projectscontainer">

            <h2 className="title is-2 is-full-tablet projectstitle">projects.</h2>

            <div className="columns is-multiline">
              {this.state.data.map(projectCard =>
                <div key={projectCard.id} className={classes}>
                  <ProjectCard {...projectCard} />

                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    )
  }
}
export default Projects
