import React, { Component } from 'react';
import { MenuItem, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSound } from 'use-sound';

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    window.scrollTo(0, 0);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <nav>
        <aside>
          <Menu inverted className="navbar">
            {/* <img className="float" alt="rocket ship" src={logo}></img> */}

            <div className="nav-links">
              <MenuItem
                name="home"
                className="test"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                as={Link}
                to="/home"
              >
                <p className="tray-item">Home</p>
                <Icon className="nav-link" name="home" />
              </MenuItem>
              <MenuItem
                name="player"
                active={activeItem === 'player'}
                onClick={this.handleItemClick}
                as={Link}
                to="/player"
              >
                <p className="tray-item">Players</p>

                <Icon className="nav-link" name="male" />
              </MenuItem>

              <MenuItem
                name="storyTeller"
                active={activeItem === 'storyTeller'}
                onClick={this.handleItemClick}
                as={Link}
                to="/storyTeller"
              >
                <p className="tray-item">StoryTellers</p>

                <Icon className="nav-link" name="book" />
              </MenuItem>
              <MenuItem
                name="neonCity"
                active={activeItem === 'neonCity'}
                onClick={this.handleItemClick}
                as={Link}
                to="/neonCity"
              >
                <p className="tray-item">Neon City</p>

                <Icon className="nav-link" name="map" />
              </MenuItem>

              <MenuItem
                name="contact"
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
                as={Link}
                to="/contact"
              >
                <p className="tray-item">Contact</p>

                <Icon className="nav-link" name="mail" />
              </MenuItem>
            </div>
          </Menu>
        </aside>
      </nav>
    );
  }
}
