import React, { Component } from 'react';
import './mainmenu.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Termspage from '../termspage/termspage';
import Groups from '../groups/groups';
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
              <Link className='menu-item center admin-link' to={"/admin/termmenu"}>Terms</Link>
              <Link className='menu-item center admin-link' to={"/admin/groups"}>Groups</Link>
              <Link className='menu-item center admin-link' to={'/admin/subjects'}>Subjects</Link>
              <Link className='menu-item center admin-link' to={'/admin/teachers'}>Teachers</Link>
              <Link className='menu-item center admin-link' to={'/admin/students'}>Students</Link>
            </div>

           

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
