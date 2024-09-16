import React, { Component, useState } from 'react';
import { MenuItem, Menu, Icon } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LiaUserSecretSolid,
  LiaHomeSolid,
  LiaUserLockSolid,
  LiaDiceD20Solid,
  LiaBookReaderSolid,
  LiaMapSolid,
  LiaEnvelopeSolid,
  LiaToggleOffSolid,
  LiaToggleOnSolid,
  LiaWarehouseSolid,
} from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged); // Assuming logged state is nested in auth slice
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState({ activeItem: 'home' });

  const handleItemClick = (e, { name }) => {
    setActiveItem({ activeItem: name });
    window.scrollTo(0, 0);
  };

  const logout = () => {
    dispatch(logout());
    // Dispatch logout action
    navigate('/login');
  };

  return (
    <nav>
      <aside>
        <Menu inverted className="navbar">
          <div className="nav-links">
            <MenuItem
              name="home"
              className="nav-link"
              active={activeItem === 'home'}
              onClick={(e) => handleItemClick(e, { name: 'home' })}
              as={Link}
              to="/"
            >
              <LiaHomeSolid />
            </MenuItem>

            <MenuItem
              name="player"
              className="nav-link"
              active={activeItem === 'player'}
              onClick={(e) => handleItemClick(e, { name: 'player' })}
              as={Link}
              to="/player"
            >
              <LiaUserSecretSolid />
            </MenuItem>

            <MenuItem
              name="storyTeller"
              className="nav-link"
              active={activeItem === 'storyTeller'}
              onClick={(e) => handleItemClick(e, { name: 'storyTeller' })}
              as={Link}
              to="/storyTeller"
            >
              <LiaBookReaderSolid />
            </MenuItem>
            <MenuItem
              name="neonCity"
              className="nav-link"
              active={activeItem === 'neonCity'}
              onClick={(e) => handleItemClick(e, { name: 'neonCity' })}
              as={Link}
              to="/neonCity"
            >
              <LiaMapSolid />
            </MenuItem>

            <MenuItem
              name="diceRoller"
              className="nav-link"
              active={activeItem === 'diceRoller'}
              onClick={(e) => handleItemClick(e, { name: 'diceRoller' })}
              as={Link}
              to="/diceRoller"
            >
              <LiaDiceD20Solid />
            </MenuItem>

            <MenuItem
              name="contact"
              className="nav-link"
              active={activeItem === 'contact'}
              onClick={(e) => handleItemClick(e, { name: 'contact' })}
              as={Link}
              to="/contact"
            >
              <LiaEnvelopeSolid />
            </MenuItem>

            {!logged ? null : (
              <MenuItem
                name="dashboard"
                className="nav-link"
                active={activeItem === 'dashboard'}
                onClick={(e) => handleItemClick(e, { name: 'dashboard' })}
                as={Link}
                to="/dashboard"
              >
                <LiaWarehouseSolid />
              </MenuItem>
            )}

            {/* {!logged ? (
              <MenuItem
                name="login"
                className="nav-link"
                active={activeItem === 'login'}
                onClick={(e) => handleItemClick(e, { name: 'login' })}
                as={Link}
                to="/login"
              >
                <LiaToggleOffSolid />
              </MenuItem>
            ) : (
              <MenuItem
                name="logout"
                className="nav-link"
                onClick={logout}
                as={Link}
                to="/login"
              >
                <LiaToggleOnSolid />
              </MenuItem>
            )} */}
          </div>
        </Menu>
      </aside>
    </nav>
  );
};

export default NavBar;
