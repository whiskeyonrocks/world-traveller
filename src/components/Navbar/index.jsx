import React from 'react';
import { Link } from 'react-router-dom';
import { logo, profileIcon } from '../../assets';
import './index.css'
import { navlinks } from '../../utils/constants';

const navBarStyle = {
  height: '8vh', // You can adjust the height as needed
  backgroundColor: 'transparent',
  color: '#fff',
  justifyContent: 'space-between',
  width: "100%",
  padding: '0px 20px', // Adjust padding values
};

const navIconStyle = { height: '12vh' }

const navOptionsStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  fontSize: '1.4em',
};

const NavBar = () => {
  return (
    <div style={navBarStyle}>
      <Link to="/" className='navlink' >
        <img style={navIconStyle} src={logo} alt="World Traveller site logo" />
      </Link>
      <ul style={navOptionsStyle}>
        {navlinks.map((navLink, index) => <li key={index}>
          <Link to={navLink.link} className='navlink' >
            <div style={{ padding: "5px 30px" }}>
              {navLink.text}
            </div>
          </Link>
        </li>)}
      </ul>
      <Link to="/" className='navlink' >
        <img style={{ height: '5vh' }} src={profileIcon} alt="World Traveller site logo" />
      </Link>
    </div>
  );
};

export default NavBar;
