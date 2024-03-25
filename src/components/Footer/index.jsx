import React from 'react';
import { logo } from '../../assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={footerStyle}>
        <Link to="/" className="navlink" >
        <img style={{height:  '12vh'}} src={logo} alt="World Traveller site logo" />
      </Link>
      <p style={copyrightStyle}>&copy; 2024 World Traveller</p>
      <p style={contactStyle}>Contact: <a style={linkStyle} href="mailto:contact@worldtraveller.com">contact@worldtraveller.com</a></p>
      <p style={addressStyle}>Address: 123 Main Street, Toronto, Canada</p>
    </div>
  );
};

const footerStyle = {
    width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  justifyContent: 'space-around'
};

const copyrightStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const contactStyle = {
  fontSize: '1.2rem',
};

const linkStyle = {
  color: '#ffd700', // Gold color
  textDecoration: 'none',
};

const addressStyle = {
  fontSize: '1.2rem',
  fontStyle: 'italic',
};

export default Footer;
