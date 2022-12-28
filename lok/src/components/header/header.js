/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import shortlogo from '../../img/shortlogo.png'
import defaultavatar from '../../img/icons/Vector.png'
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Account from '../account/account';
import Diary from "../diary/diary";

class Header extends Component {

  render() {
    return (
      <div>
        <div className='container header-bg text-center'>
          <div className='row align-items-center'>
            <img className='header-logo' src={shortlogo}></img>
            <Link to={"/homepage"} className='col-1 home-link'>Home</Link>
            <Link to={"/diary"}>Diary</Link>
            <select
              type='text'
              name='language'
              className='col-md-1 col-2 offset-6 offset-md-8 language-selector right'
            >
              <option>En</option>
              <option>Ua</option>
            </select>
            <Link to={"/account"}><img src={defaultavatar}></img></Link>

          </div>
        </div>
        <div>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/diary" element={<Diary />} />
          </Routes>
        </div>
      </div>
    )
  }

}



Header.propTypes = {};

Header.defaultProps = {};

export default Header;
