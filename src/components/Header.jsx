import React from 'react';
import Logo from '../images/Logo.png';
import '../styles/Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="Nav">
      <img src={Logo} alt="" height={50} width={200} className="logo" />
      <div class="search-container">
        <input type="text" class="search-box" placeholder="Search For a Product.."/>
        <button class="search-button"><FaSearch/></button>
      </div>
    </div>
  );
};

export default Header;



