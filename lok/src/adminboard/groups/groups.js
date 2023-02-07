import React from 'react';
import PropTypes from 'prop-types';
import './groups.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import profilePic from "../../img/profilePic.jpg";

class Groups extends React.Component {


  render() {
    return (
      <div>
        <Header />

        <div className='center margin-adm'>
          <div className='adminboard-title'>ADMIN CENTER</div>
        </div>
        <hr className='admin-underline'></hr>
        <div className='group-container'>
          <div className='group-sidebar'>
            <div className='lables'>
              <div className='main-group-label'>
                Main groups
              </div>
              <div className='sub-group-label'>
                Sub groups
              </div>
              <button className='add-group-btn'>
                Add group
              </button>
            </div>
            <hr className='admin-underline'></hr>
            <div className='groups-container'>
              <div className='main-groups'>
                <div className='main-item'><p className='group-text'>4cs - 11</p></div>
                <div className='main-item'><p className='group-text'>4cs - 11</p></div>
                <div className='main-item'><p className='group-text'>4cs - 11</p></div>
                <div className='main-item'><p className='group-text'>4cs - 11</p></div>

              </div>
              <div className='sub-groups'>
                <div className='sub-item'><p className='group-text'>AT</p></div>
                <div className='sub-item'><p className='group-text'>AT</p></div>
                <div className='sub-item'><p className='group-text'>AT</p></div>
                <div className='sub-item'><p className='group-text'>AT</p></div>

              </div>
            </div>


          </div>
          <div className='students-sidebar'>
            <div className='titlestudents'>Students</div>
            <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>
            <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>

          </div>


        </div>




      </div>
    )
  }


}

Groups.propTypes = {};

Groups.defaultProps = {};

export default Groups;
