/* eslint-disable jsx-a11y/alt-text */
import React, { Component,useState } from 'react';
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
import burger from "../../img/icons/burger.png"
import Offcanvas from 'react-bootstrap/Offcanvas';


function BurgerMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img className='burger-icon' src={burger} onClick={handleShow}></img>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



class Header extends Component {

  



  render() {
    return (
      <div>
        <div className='container header-bg text-center'>
          <nav className="navbar">
            <BurgerMenu/>

              <div><Link to={"/homepage"} className="navbar-brand">
                <img className='header-logo' src={shortlogo}></img>
              </Link>

                <Link to={"/homepage"} className="navbar-brand home-link" >Home</Link></div>
                    <Link to={"/diary"} className="nav-link active home-link" aria-current="page" >Diary</Link>
                    <Link to={"/proposals"} className="nav-link home-link">
                      Proposals
                    </Link>
              <div>
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
