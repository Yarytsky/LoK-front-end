import React from 'react';
import Footer from '../../components/footer/footer';
import './termspage.css';
import Header from '../../components/header/header';
import { Accordion } from 'react-bootstrap';
import profilePic from "../../img/profilePic.jpg";
import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import v from "../../img/V.png";



function Terms() {
  const [isActive, setIsActive] = useState(false);
  const [isActivegr,setIsActivegr] =useState(false);
  const handleClick = event => {
    setIsActive(current => !current);
    setIsActive1(current => !current);
    setIsActivegr(current => !current)
    setIsActivegr1(current => !current)


  };
  const [isActive1, setIsActive1] = useState(false);
  const [isActivegr1,setIsActivegr1] =useState(false);

  const handleClick1 = event => {
    setIsActive1(current => !current);
    setIsActive(current => !current);
    setIsActivegr(current => !current)
    setIsActivegr1(current => !current)
  };

  const[actbutt,setactbutt]=useState(false)
  const [actcourse1,setactcourse1] =useState(false);
  const [img1,setimg1] =useState(false);

  const opencourse1=event=>{
    setactbutt(current=>!current)
    setactcourse1(current=>!current)
    setimg1(current=>!current)
  }
  return (
    <div className='terms-sidebar'>
            <h3>1 course</h3>
      <Nav variant="tabs">
        <Nav.Item className={isActive ? 'disable-term' : 'active-term'} onClick={handleClick}>
          <Nav.Link>Term 1</Nav.Link>
        </Nav.Item>
        <Nav.Item className={isActive1 ? 'active-term' : 'disable-term'} onClick={handleClick1}>
          <Nav.Link>Term 2</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className={actcourse1 ? "all-groups-act":"all-groups-inact"}>
      <div className={isActivegr ? "inactive-group" : "active-group"}>
        <div className='main-item1'><p className='group-text'>4cs - 11</p></div>
        <div className='main-item1'><p className='group-text'>4cs - 12</p></div>
        <div className='main-item1'><p className='group-text'>4cs - 13</p></div>
      </div>
      <div className={isActivegr1 ? "active-group" : "inactive-group"}>
        <div className='main-item1'><p className='group-text'>4cs - 14</p></div>
        <div className='main-item1'><p className='group-text'>4cs - 15</p></div>
        <div className='main-item1'><p className='group-text'>4cs - 16</p></div>
      </div>
      </div>
      <button className={actbutt ? "actbutcourse1":"inactbutcourse1"} onClick={opencourse1}><div className='coursecolapsebtn'><img className={img1 ? "inact-img":"act-img"} src={v}/><img className={img1 ? "inact-img":"act-img"} src={v}/></div></button>
    </div>
  )
}

class Termspage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className='center'>
          <div className='adminboard-container'>
            <div className='center margin-adm'>
              <div className='adminboard-title'>ADMIN CENTER</div>
            </div>
            <hr className='admin-underline'></hr>
            <div className='term-container'>
              <Terms />
              <div className='students-sidebar'>
                <div className='titlestudents'>Students</div>
                <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>
                <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>

              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }
}

Termspage.propTypes = {};

Termspage.defaultProps = {};

export default Termspage;
