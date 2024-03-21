import React, { Component } from 'react';
import { MenuItem, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
                className="nav-link"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                as={Link}
                to="/"
              >
                <Icon name="home" />
              </MenuItem>
              <MenuItem
                name="player"
                className="nav-link"
                active={activeItem === 'player'}
                onClick={this.handleItemClick}
                as={Link}
                to="/player"
              >
                <Icon name="male" />
              </MenuItem>

              <MenuItem
                name="storyTeller"
                className="nav-link"
                active={activeItem === 'storyTeller'}
                onClick={this.handleItemClick}
                as={Link}
                to="/storyTeller"
              >
                <Icon name="book" />
              </MenuItem>
              <MenuItem
                name="neonCity"
                className="nav-link"
                active={activeItem === 'neonCity'}
                onClick={this.handleItemClick}
                as={Link}
                to="/neonCity"
              >
                <Icon name="map" />
              </MenuItem>
            </div>
          </Menu>
        </aside>
      </nav>
    );
  }
}
