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
import ProposalsPage from '../ProposalsPage/ProposalsPage';
import Footer from '../footer/footer';

class Header extends Component {

  render() {
    return (
      <div>
        <div className='container header-bg text-center'>

          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div><Link to={"/homepage"} className="navbar-brand">
                <img className='header-logo' src={shortlogo}></img>
              </Link>

                <Link to={"/homepage"} className="navbar-brand home-link" >Home</Link></div>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/diary"} className="nav-link active home-link" aria-current="page" >Diary</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/proposals"} className="nav-link home-link">
                      Proposals
                    </Link>
                  </li>
                </ul>
              </div><div>
                <select
                  type='text'
                  name='language'
                  className='col-md-1 col-2 offset-6 offset-md-8 language-selector right'
                >
                  <option>En</option>
                  <option>Ua</option>
                </select>
                <Link to={"/account"} className = "profileLink"><img src={defaultavatar}></img></Link>

              </div>
            </div>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/proposals" element={<ProposalsPage />} />

          </Routes>
        </div>

      </div>
    )
  }

}



Header.propTypes = {};

Header.defaultProps = {};

export default Header;
