import React from 'react';
import PropTypes from 'prop-types';
import './teachers.css';
import Header from '../../components/header/header';
import profilePic from "../../img/profilePic.jpg";
import TeacherDetail from './toasts';
class Teachers extends React.Component {


  render() {
    return (
      <div>
        <Header />
        <div className='center margin-adm'>
          <div className='adminboard-title'>ADMIN CENTER</div>
        </div>
        <hr className='admin-underline'></hr>
        <div className='teacher-container'>
          <div className='verified-teachers'>
            <div className='center'>
              <div className='titleterms'>Teachers</div>
            </div>
            <hr className='admin-underline'></hr>
            <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>

          </div>
          <div className='unverified-teachers'>
            <div className='title-unverified'>Unverified users</div>
            <div className='unverified-box'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>
            <div className='unverified-box'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>

          </div>
        </div>

      </div>

    )
  }

}

Teachers.propTypes = {};

Teachers.defaultProps = {};

export default Teachers;
