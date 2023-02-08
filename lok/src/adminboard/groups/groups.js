import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './groups.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import profilePic from "../../img/profilePic.jpg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function EditGroup(props) {

  const [show, setShow] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <button className='add-group-btn' onClick={handleShow}>
        Add group
      </button>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show} onHide={handleClose}
      >
        <Modal.Body>
          <div className='editgroupcontainer'>
            <div>Group name:</div>
            <div className='input-box'>
              <input className='edit-input'/>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Main</Button>
                <Button variant="secondary">Sub</Button>
              </ButtonGroup>
            </div>
            <div>Choose the subject: </div>
            <select>
              <option>123</option>
              <option>123</option>
              <option>123</option>
            </select>
            <div>Choose the main groups: </div>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">1 Course</Button>
              <Button variant="secondary">2 Course</Button>
              <Button variant="secondary">3 Course</Button>
              <Button variant="secondary">4 Course</Button>

            </ButtonGroup>
            <div>
              <div>
                4cs - 11
              </div>
            </div>
            <div>
              <Button variant="secondary" onClick={handleClose}>
                Save
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )

}


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
              <EditGroup />
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
