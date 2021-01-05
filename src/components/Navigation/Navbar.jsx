import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Redirect } from "react-router-dom";
import '../../../dist/stylesheets/NavbarStyles.css';

const Navbar = (props) => {

  const [redirect, setRedirect] = useState(null);

  return (
      <div className="navbar">
        {redirect}
        <p className="navbar-header">TEAM ATLANTIC COMPASS</p>
        <div className="navbar-searchbar-container">
         <input className="navbar-searchbar" aria-label="searchbar" type="text" onKeyPress={(e)=>changeProduct(e, setRedirect)}>
        </input>
        <span className="material-icons navbar-searchbar-symbol">
          search
        </span>
        </div>
      </div>
    );
}

export default Navbar;

const changeProduct = (e, setRedirect) => {
  if (e.key === 'Enter') {
    const id = e.target.value;
    console.log('hit redirect')
    const path = "/products/" + id;
    console.log('path', path)
    setRedirect(<Redirect to={path} />)
  }
}