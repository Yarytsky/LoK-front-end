import React from 'react';
import PropTypes from 'prop-types';
import './EditGroup.css';
import Header from '../../components/header/header';

import profilePic from "../../img/profilePic.jpg";

class EditGroup extends React.Component {

  render() {
    return (



      <div>
        <Header />

        <div className='center margin-adm'>
          <div className='adminboard-title'>ADMIN CENTER</div>
        </div>
        <hr className='admin-underline'></hr>
        <div className='edit-group-container'>
          <div className='current-group-sidebar'>
            <div className='lables-ed'>
              <div className='back-btn'>

              <div className='back-label'>Back</div>

              </div>

              <div className='group-label'>4cs-11</div>

            </div>
            <hr className='admin-underline'></hr>

            <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>
            <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>

          </div>
          <div className='find-students-sidebar'>

          </div>

        </div>
      </div>



    )
  }

}


EditGroup.propTypes = {};

EditGroup.defaultProps = {};

export default EditGroup;
