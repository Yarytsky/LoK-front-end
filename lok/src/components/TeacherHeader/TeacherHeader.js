/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import './TeacherHeader.css';
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
import home from "../../img/burger/Vectorhome.png"
import acc from "../../img/burger/Vectoracc.png"
import calend from "../../img/burger/Vectorcalendar.png"
import diary from "../../img/burger/Vectordiary.png"
import proposals from "../../img/burger/Vectorproposal.png"
import subject from "../../img/burger/Vectorsubject.png"
import settings from "../../img/burger/Vectorsettings.png"
import logout from "../../img/burger/Vectorlogout.png"
import profilePic from "../../img/profilePic.jpg";
import authService from '../../services/auth.service';
import dz from "../../img/dz.png"

function BurgerMenu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img className='burger-icon' src={burger} onClick={handleShow}></img>
      <Offcanvas className="burger" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='bur-head'>
            <div>
              <img className='bur-logo' src={shortlogo}></img>

            </div>
            <div className='bur-acc'>
              <div className='bur-name'>
                Lake of Knowledge
              </div>
              <div className='bur-email'>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bur-da'>
          <div className='bur-menu'>
            <Link to={"/teacherHomepage"} className='bur-itm home-link'><img className='bur-icons' src={home} /><div className="itm-text">Home</div></Link>
            <Link to={"/account"} className='bur-itm home-link'><img className='bur-icons' src={acc} /><div className="itm-text">Account</div></Link>
            <Link to={"/timetable"} className='bur-itm home-link'><div className="itm-text">Timetable</div></Link>
            <Link to={"/studentspage"} className='bur-itm home-link'><div className="itm-text">Students</div></Link>
            <Link to={"/groupMarks"} className='bur-itm home-link'><div className="itm-text">Group Marks</div></Link>

          </div>
          <div className='bur-foot'>
            <Link to={"/settingspage"} className='bur-itm home-link'><img className='bur-icons' src={settings} /><div className="itm-text">Settings</div></Link>
            <Link to={"/"} onClick={authService.logout} className='bur-itm home-link'><img className='bur-icons' src={logout} /><div className="itm-text">Logout</div></Link>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

class TeacherHeader extends Component {
  // s(){
  //   console.log(this.props.userdata)
  // }


  render() {
    return (
      <div>
        <div className='container header-bg text-center'>
          <div className="bar">
            <div className='homenavbar'>

              <BurgerMenu />
              <div>
                <Link to={"/homepage"} className="navbar-brand">
                  <img className='header-logo' src={shortlogo}></img>
                </Link>
              </div>
              <div className='home-con1'>
                <Link to={"/homepage"} className="navbar-brand home-link hide home-con" ><img src={home} /><div>Home</div></Link>
                <div className='teach-icons'>
                  <Link ><img src={proposals} /></Link>
                  <Link to={"/settingspage"} ><img src={settings}/></Link>
                  <Link ><img src={dz}/></Link>
                </div>
              </div>
            </div>

            <div className='lang-acc'>
              <select
                type='text'
                name='language'
                className='col-md-1 col-2 offset-6 offset-md-8 language-selector right hide'
              >
                <option>En</option>
                <option>Ua</option>
              </select>
              <Link to={"/account"} className="profileLink"><img src={defaultavatar}></img></Link>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default TeacherHeader;
