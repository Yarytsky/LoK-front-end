import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './groups.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import profilePic from "../../img/profilePic.jpg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import axios from "axios";

const API_URL = "https://lokserver.azurewebsites.net/";
function EditGroup(props) {



  const [show, setShow] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function chooseMain(){
    document.getElementById("main-btn").style.background="#D2D3F9"
    document.getElementById("main-btn").style.border="2px solid #000000"
    document.getElementById("main-btn").style.zIndex="9"
    document.getElementById("main-btn").style.paddingRight="10px"
    document.getElementById("sub-btn").style.marginLeft="0px"
    document.getElementById("sub-btn").style.backgroundColor="#E8E8E8"
    document.getElementById("sub-btn").style.border="1px solid #000000"
    document.getElementById("sub-btn").style.marginLeft="50px"
    document.getElementById("sub-btn").style.zIndex="0"
    document.getElementById("sub-btn").style.paddingLeft="20px"
  }

  function chooseSub(){
    document.getElementById("main-btn").style.background="#E8E8E8"
    document.getElementById("main-btn").style.border="1px solid #000000"
    document.getElementById("main-btn").style.zIndex="0"
    document.getElementById("main-btn").style.paddingRight="50px"
    document.getElementById("sub-btn").style.marginLeft="50px"
    document.getElementById("sub-btn").style.backgroundColor="#D2D3F9"
    document.getElementById("sub-btn").style.border="2px solid #000000"
    document.getElementById("sub-btn").style.marginLeft="50px"
    document.getElementById("sub-btn").style.zIndex="9"
    document.getElementById("sub-btn").style.paddingLeft="0px"
  }

  const [groupName, setgroupName] = useState("");
  async function postGroup(){
    return await axios.post(API_URL+"group/creategroup",{
      name:groupName,
      id:''
    }
    )
    .then(response=>response.data)
    
  }
  return (
    <>
      <button className='add-group-btn' onClick={handleShow}>
        Add group
      </button>
      <Modal
        {...props}
        className='modal-add-group'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show} onHide={handleClose}
      >
        <Modal.Body>
          <div className='editgroupcontainer'>
            <div>Group name:</div>
            <div className='input-box'>
              <input className='edit-input' onChange={e=>setgroupName(e.target.value)}/>
              <div className='button-group'>
                <button id='main-btn' onClick={chooseMain}>Main</button>
                <button  id='sub-btn' onClick={chooseSub}>Sub</button>
              </div>
            </div>
            <div>Choose the subject: </div>
            <select className='modal-select'>
              <option>123</option>
              <option>123</option>
              <option>123</option>
            </select>
            <div>Choose the main groups: </div>
            <div className='course-box'>
              <button variant="secondary" className='group-choose'>1 Course</button>
              <button variant="secondary" className='group-choose'>2 Course</button>
              <button variant="secondary" className='group-choose'>3 Course</button>
              <button variant="secondary" className='group-choose'>4 Course</button>

            </div>
            <div className='groups-table'>
              <div className='course'>4cs - 11</div>
              <div className='course'>4cs - 12</div>
              <div className='course'>4cs - 13</div>
              <div className='course'>4cs - 14</div>
              <div className='course'>4cs - 15</div>

            </div>
            <div className='modal-group-footer'>
              <button variant="secondary" className='mod-f-btn save-btn' onClick={handleClose}>
                Save
              </button>
              <button variant="primary" className='mod-f-btn cansel-btn'  onClick={handleClose}>
                Cancel
              </button>
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
                <Link to={"/admin/groups/editgroup"} className='main-item admin-link'><p className='group-text'>4cs - 11</p></Link>
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
