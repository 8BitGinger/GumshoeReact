import React, { Component } from 'react';
import { MenuItem, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <nav>
        <Menu inverted className="navbar">
          {/* <img className="float" alt="rocket ship" src={logo}></img> */}

          <div className="nav-links">
            <MenuItem
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={Link}
              to="/home"
            >
              <Icon className="nav-link" name="home" />
            </MenuItem>
            <MenuItem
              name="player"
              active={activeItem === 'player'}
              onClick={this.handleItemClick}
              as={Link}
              to="/player"
            >
              <Icon className="nav-link" name="male" />
            </MenuItem>

            <MenuItem
              name="storyTeller"
              active={activeItem === 'storyTeller'}
              onClick={this.handleItemClick}
              as={Link}
              to="/storyTeller"
            >
              <Icon className="nav-link" name="book" />
            </MenuItem>
            <MenuItem
              name="neonCity"
              active={activeItem === 'neonCity'}
              onClick={this.handleItemClick}
              as={Link}
              to="/neonCity"
            >
              {' '}
              <Icon className="nav-link" name="map" />
            </MenuItem>

            <MenuItem
              name="contact"
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              as={Link}
              to="/contact"
            >
              {' '}
              <Icon className="nav-link" name="mail" />
            </MenuItem>
          </div>
        </Menu>
      </nav>
    );
  }
}
