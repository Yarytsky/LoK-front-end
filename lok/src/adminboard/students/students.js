/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import './students.css';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import profilePic from "../../img/profilePic.jpg";
import calendar from "../../img/Calendar.png";
import phone from "../../img/Phone.png";
import envelope from "../../img/Envelope.png";
import checkmark from "../../img/checkmark.png"
import backArrow from "../../img/backArrow.png"
import cross from "../../img/cross.png"
import Footer from "../../components/footer/footer";
import CustomSelectAdmin from './customSelectAdmin';

let courseSelect = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" }
]

let x = 0;
let y = 0;
let target;
const GoBack = () => {
  const navigate = useNavigate();
  navigate(-1);
}
class Students extends React.Component {

  showDetailsVerified = (e) => {
    x += 1;
    let verifiedTeachers = document.getElementsByClassName("verified-teachers")[0];
    let unverifiedTeachers = document.getElementsByClassName("unverified-teachers")[0];
    let userDetailsAdmin = document.getElementsByClassName("studentUserDetailsAdmin")[1];
    let editStudentMenuAdmin = document.getElementsByClassName("editStudentMenuAdmin")[0];
    target = e.target;
    if (x % 2 === 1) {
      verifiedTeachers.style = "flex-grow: 0; width: 35vw";
      unverifiedTeachers.style.display = "none";
      userDetailsAdmin.style.display = "flex";
      target.style = "background-color: white; border: 3px solid #A5A6F3";
      editStudentMenuAdmin.style.display = "flex";
    }
    else {
      verifiedTeachers.style = "flex-grow: 1;";
      unverifiedTeachers.style.display = "flex";
      userDetailsAdmin.style.display = "none";
      target.style = "background-color: #D2D3F9; border: none";
      editStudentMenuAdmin.style.display = "none";
    }
  }

  showDetailsUnverified = (e) => {
    y += 1;
    let verifiedTeachers = document.getElementsByClassName("verified-teachers")[0];
    let unverifiedTeachers = document.getElementsByClassName("unverified-teachers")[0];
    let userDetailsAdmin = document.getElementsByClassName("studentUserDetailsAdmin")[0];
    let verticalLineAdmin = document.getElementsByClassName("verticalLineAdmin")[0];
    target = e.target;
    if (y % 2 === 1) {
      verifiedTeachers.style.display = "none";
      unverifiedTeachers.style = "flex-grow: 0; width: 35vw";
      userDetailsAdmin.style.display = "flex";
      target.style = "background-color: #A5A6F3; border: none";
      verticalLineAdmin.style.display = "none";
    }
    else {
      unverifiedTeachers.style = "flex-grow: 1;";
      unverifiedTeachers.style.display = "flex";
      verifiedTeachers.style.display = "flex";
      userDetailsAdmin.style.display = "none";
      target.style = "background-color: white; border: 3px solid #A5A6F3";
      verticalLineAdmin.style.display = "block";
    }
  }

  back = (e) => {
    let verifiedTeachers = document.getElementsByClassName("verified-teachers")[0];
    let unverifiedTeachers = document.getElementsByClassName("unverified-teachers")[0];
    let userDetailsAdminUnver = document.getElementsByClassName("studentUserDetailsAdmin")[0];
    let userDetailsAdminVer = document.getElementsByClassName("studentUserDetailsAdmin")[1];
    let verticalLineAdmin = document.getElementsByClassName("verticalLineAdmin")[0];
    let editStudentMenuAdmin = document.getElementsByClassName("editStudentMenuAdmin")[0];
    if (userDetailsAdminUnver.style.display !== "none" || userDetailsAdminVer.style.display !== "none") {
      if (y % 2 === 1) {
        y += 1;
        unverifiedTeachers.style = "flex-grow: 1;";
        unverifiedTeachers.style.display = "flex";
        verifiedTeachers.style.display = "flex";
        userDetailsAdminUnver.style.display = "none";
        target.style = "background-color: white; border: 3px solid #A5A6F3";
        verticalLineAdmin.style.display = "block";
      }
      if (x % 2 === 1) {
        x += 1;
        verifiedTeachers.style = "flex-grow: 1;";
        unverifiedTeachers.style.display = "flex";
        verifiedTeachers.style.display = "flex";
        userDetailsAdminVer.style.display = "none";
        target.style = "background-color: #D2D3F9; border: none";
        verticalLineAdmin.style.display = "block";
        editStudentMenuAdmin.style.display = "none"
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className='adminContainer'>
          <div className='center margin-adm'>
            <div className='adminboard-title'>ADMIN CENTER</div>
          </div>
          <hr className='admin-underline'></hr>
          <div className='teacher-container'>
            <div className='backButtonAdmin' onClick={this.back}><img src={backArrow}></img>Back</div>
            <div className='verified-teachers'>
              <div className='center'>

                <div className='titleterms'>Students</div>
              </div>
              <hr className='admin-underline'></hr>
              <div className='studentbox' onClick={this.showDetailsVerified}><img src={profilePic} className="picAdmin"></img>Meshkova Inna</div>

            </div>
            <div className='verticalLineAdmin'></div>
            <div className='studentUserDetailsAdmin student'>
              <div className='profileInfoAdmin'>
                <img src={profilePic} className="profileInfoPicAdmin"></img>
                <div className='profileDetailsAdmin'>
                  <div className='profileInfoNameAdmin'><b>Meshkova Inna</b><div className="verificationCrossAdmin"><img src={cross}></img>(unverified)</div></div>
                  <div className='birthdayInfoAdmin infoAdmin'><img src={calendar} className="infoIconAdmin"></img>24 July 1989<div className='ageInfoAdmin'>(36 years)</div></div>
                  <div className='phoneInfoAdmin infoAdmin'><img src={phone} className="infoIconAdmin"></img>+380 (97) 234 78 56</div>
                  <div className='emailInfoAdmin infoAdmin'><img src={envelope} className="infoIconAdmin"></img>anna.soloviy@itstep.org</div>
                </div>
              </div>
              <div className="studentGroupInfoAdmin">
                <div>
                  <div className='studentDetailsTitleAdmin'>Details</div>
                  <div className='studentDetailsGroupsAdmin'>
                    <div className="studentDetailAdmin">Course: <div>2</div></div>
                    <div className="studentDetailAdmin">Main group: <div>3CS-21</div></div>
                    <div className="studentDetailAdmin">Subgroups: <div>--</div></div>
                  </div>
                </div>
                <div className="addButtonDivAdmin">
                  <div className='editGroupAdmin'>Edit</div>
                </div>
              </div>
              <div className='verificationButtonAdmin'>Verify this student</div>
            </div>
            <div className='unverified-teachers'>
              <div className='titleterms'>Unverified users</div>
              <div className='unverified-box' onClick={this.showDetailsUnverified}><img src={profilePic} className="picAdmin"></img>Meshkova Inna</div>
              <div className='unverified-box' onClick={this.showDetailsUnverified}><img src={profilePic} className="picAdmin"></img>Meshkova Inna</div>

            </div>
            <div>
              <div className='studentUserDetailsAdmin'>
                <div className='profileInfoAdmin'>
                  <img src={profilePic} className="profileInfoPicAdmin"></img>
                  <div className='profileDetailsAdmin'>
                    <div className='profileInfoNameAdmin'><b>Meshkova Inna</b><div className="verificationCheckmarkAdmin"><img src={checkmark}></img>(verified)</div></div>
                    <div className='birthdayInfoAdmin infoAdmin'><img src={calendar} className="infoIconAdmin"></img>24 July 1989<div className='ageInfoAdmin'>(36 years)</div></div>
                    <div className='phoneInfoAdmin infoAdmin'><img src={phone} className="infoIconAdmin"></img>+380 (97) 234 78 56</div>
                    <div className='emailInfoAdmin infoAdmin'><img src={envelope} className="infoIconAdmin"></img>anna.soloviy@itstep.org</div>
                  </div>
                </div>
                <div className="studentGroupInfoAdmin">
                  <div>
                    <div className='studentDetailsTitleAdmin'>Details</div>
                    <div className='studentDetailsGroupsAdmin'>
                      <div className="studentDetailAdmin">Course: <div>2</div></div>
                      <div className="studentDetailAdmin">Main group: <div>3CS-21</div></div>
                      <div className="studentDetailAdmin">Subgroups: <div>3DD-21</div><div className='lastStudentDetailSub'>AT</div></div>
                    </div>
                  </div>
                  <div className="addButtonDivAdmin">
                    <div className='editGroupAdmin'>Edit</div>
                  </div>
                </div>
              </div>
              <div className='editStudentMenuAdmin'>
                <div className='editMenuTitle'>Edit details</div>
                <div className='editMenuChoicesAdmin'>
                  <div className='editMenuChoiceAdmin'>Course: <div className='editStudentDropdown'><CustomSelectAdmin defaultText = "1" optionsList = {courseSelect}></CustomSelectAdmin></div></div>
                  <div className='editMenuChoiceAdmin'>Main group: <div className='editStudentDropdown'><CustomSelectAdmin defaultText = "1" optionsList = {courseSelect}></CustomSelectAdmin></div></div>
                  <div className='editMenuChoiceAdmin'>Subgroups: <div className='subgroupTypeChoice'><div>Design</div><div>Management</div><div>Programming</div><div>Other</div></div><div className='subgroupChoiceTable'></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>

    )
  }

}

Students.propTypes = {};

Students.defaultProps = {};

export default Students;
