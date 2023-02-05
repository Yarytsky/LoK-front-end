import React, { Component } from 'react';
import './mainmenu.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Termspage from '../termspage/termspage';

class Mainmenu extends Component {

  render() {
    return (
      <div >

        <Header />
        <div className='center'>
          <div className='adminboard-container'>
            <div className='center margin-adm'>
              <div className='adminboard-title'>ADMIN CENTER</div>
            </div>
            <hr className='admin-underline'></hr>
            <div className='menu'>
              <Link className='menu-item center' to={"/admin/termmenu"}>Terms</Link>
              <div className='menu-item center'>Groups</div>
              <div className='menu-item center'>Subjects</div>
              <div className='menu-item center'>Teachers</div>
              <div className='menu-item center'>Students</div>
            </div>

            <Routes>
              <Route path='/admin/termmenu' element={<Termspage />} />


            </Routes>

          </div>
        </div>
        <Footer />
      </div>






    )
  }


}

Mainmenu.propTypes = {};

Mainmenu.defaultProps = {};

export default Mainmenu;
