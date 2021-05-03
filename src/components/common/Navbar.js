import React from 'react'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a
              role="button"
              className={`navbar-burger burger${
                this.state.active ? ' is-active' : ''
              }`}
              onClick={this.toggleActive}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            className={`navbar-menu${this.state.active ? ' is-active' : ''}`}
          >
            <div id="menu" className="navbar-start">
              <a
                onClick={this.toggleActive}
                href="#about"
                className="navbar-item"
              >
                About
              </a>
              <a
                onClick={this.toggleActive}
                href="#skills"
                className="navbar-item one"
              >
                Skills
              </a>
            </div>

            <div>
              <a
                onClick={this.toggleActive}
                href="#home"
                className="navbar-item"
              >
                <img
                  className="logo"
                  src="https://i.imgur.com/lvYJz7K.jpg"
                  alt="dragons"
                />
              </a>
            </div>

            <div id="menu" className="navbar-end">
              <a
                onClick={this.toggleActive}
                href="#projects"
                className="navbar-item three"
              >
                Projects
              </a>
              <a
                onClick={this.toggleActive}
                href="#contact"
                className="navbar-item"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
