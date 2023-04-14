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
import { students } from '../../components/groupMarks/studentsListExample';

const API_URL = "https://localhost:7203/";

function EditGroup(props) {



  const [show, setShow] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function chooseMain() {
    document.getElementById("main-btn").style.background = "#D2D3F9"
    document.getElementById("main-btn").style.border = "2px solid #000000"
    document.getElementById("main-btn").style.zIndex = "9"
    document.getElementById("main-btn").style.paddingRight = "10px"
    document.getElementById("sub-btn").style.marginLeft = "0px"
    document.getElementById("sub-btn").style.backgroundColor = "#E8E8E8"
    document.getElementById("sub-btn").style.border = "1px solid #000000"
    document.getElementById("sub-btn").style.marginLeft = "50px"
    document.getElementById("sub-btn").style.zIndex = "0"
    document.getElementById("sub-btn").style.paddingLeft = "20px"
  }

  function chooseSub() {
    document.getElementById("main-btn").style.background = "#E8E8E8"
    document.getElementById("main-btn").style.border = "1px solid #000000"
    document.getElementById("main-btn").style.zIndex = "0"
    document.getElementById("main-btn").style.paddingRight = "50px"
    document.getElementById("sub-btn").style.marginLeft = "50px"
    document.getElementById("sub-btn").style.backgroundColor = "#D2D3F9"
    document.getElementById("sub-btn").style.border = "2px solid #000000"
    document.getElementById("sub-btn").style.marginLeft = "50px"
    document.getElementById("sub-btn").style.zIndex = "9"
    document.getElementById("sub-btn").style.paddingLeft = "0px"
  }

  const [groupName, setgroupName] = useState("");
  const [term, setTerm] = useState("");
  async function postGroup() {
    return await axios.post(API_URL + "group/creategroup", {
      name: groupName,
      semesterId: parseInt(term)
    }, {
      headers: {
        'accept': '*/*',
        'Authorization': localStorage.getItem('Btoken')
      }
    })
      .then(response => response.data)
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
              <input className='edit-input' onChange={e => setgroupName(e.target.value)} />
              <div className='button-group'>
                <button id='main-btn' onClick={chooseMain}>Main</button>
                <button id='sub-btn' onClick={chooseSub}>Sub</button>
              </div>
            </div>
            <div>Choose the Term: </div>
            <select className='modal-select' onChange={e => setTerm(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">7</option>
              <option value="3">8</option>
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
              <button variant="secondary" className='mod-f-btn save-btn' onClick={postGroup}>
                Save
              </button>
              <button variant="primary" className='mod-f-btn cansel-btn' onClick={handleClose}>
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

  constructor(props) {
    super(props)

    this.state = {
      Sgroups:{},
      Sstudents:{}
    }

  }

  async componentDidMount() {
    const responsegrops = await axios.get(API_URL + "group/getgroups", {
      headers: {
        'accept': '*/*',
        'Authorization': localStorage.getItem('Btoken')
      }
    })
    const responseStud = await axios.get(API_URL + "user/getunverificatedstudents", {
      headers: {
        'accept': '*/*',
        'Authorization': localStorage.getItem('Btoken')
      }
    })
    
      this.setState({
        Sgroups:responsegrops.data.groups,
        Sstudents:responseStud.data.students
      })
      console.log(this.state.Sgroups)
      console.log(responseStud.data)
  }


  render() {
    let listGr=this.state && this.state.Sgroups.length>0?
      this.state.Sgroups.map(g=>
        <div className='main-item' key={g.id}><p className='group-text'>{g.name}</p></div>
        ):<>no</>
    let listStudents=this.state && this.state.Sstudents.length>0?
        this.state.Sstudents.map(s=>
          <div className='studentbox' key={s.id}><img src={profilePic} className="pic"></img><p>{s.lastname} {s.firstName}</p></div>

          ):<>no</>
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
                {listGr}
              </div>
              <div className='sub-groups'>
                <div className='sub-item'><p className='group-text'>AT</p></div>
              </div>
            </div>
          </div>
          <div className='students-sidebar'>
            <div className='titlestudents'>Students</div>
              {listStudents}
          </div>


        </div>




      </div>
    )
  }


}

Groups.propTypes = {};

Groups.defaultProps = {};

export default Groups;
