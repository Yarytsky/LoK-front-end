/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import './teachers.css';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';
import Header from '../../components/header/header';
import profilePic from "../../img/profilePic.jpg";
import calendar from "../../img/Calendar.png";
import phone from "../../img/Phone.png";
import envelope from "../../img/Envelope.png";
import checkmark from "../../img/checkmark.png"
import backArrow from "../../img/backArrow.png"
import cross from "../../img/cross.png"
import TeacherDetail from './toasts';
import Footer from "../../components/footer/footer";

let x = 0;
let y = 0;
let target;
const GoBack = () => {
  const navigate = useNavigate();
  navigate(-1);
}
class Teachers extends React.Component {

  showDetailsVerified = (e) => {
    x += 1;
    let verifiedTeachers = document.getElementsByClassName("verified-teachers")[0];
    let unverifiedTeachers = document.getElementsByClassName("unverified-teachers")[0];
    let userDetailsAdmin = document.getElementsByClassName("userDetailsAdmin")[1];
    target = e.target;
    if (x % 2 === 1) {
      verifiedTeachers.style = "flex-grow: 0; width: 35vw";
      unverifiedTeachers.style.display = "none";
      userDetailsAdmin.style.display = "flex";
      target.style = "background-color: white; border: 3px solid #A5A6F3";
    }
    else {
      verifiedTeachers.style = "flex-grow: 1;";
      unverifiedTeachers.style.display = "flex";
      userDetailsAdmin.style.display = "none";
      target.style = "background-color: #D2D3F9; border: none";
    }
  }

  showDetailsUnverified = (e) => {
    y += 1;
    let verifiedTeachers = document.getElementsByClassName("verified-teachers")[0];
    let unverifiedTeachers = document.getElementsByClassName("unverified-teachers")[0];
    let userDetailsAdmin = document.getElementsByClassName("userDetailsAdmin")[0];
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
    let userDetailsAdminUnver = document.getElementsByClassName("userDetailsAdmin")[0];
    let userDetailsAdminVer = document.getElementsByClassName("userDetailsAdmin")[1];
    let verticalLineAdmin = document.getElementsByClassName("verticalLineAdmin")[0];
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
      }
    }
  }

  render() {

    let listTeachers = this.state && this.state.Steachers.length > 0 ?  //{t.lastname} {t.firstname}
      this.state.Steachers.map(t =>
        <div className='unverified-box' key={t.id} onClick={this.showDetailsUnverified}><img src={profilePic} className="picAdmin"></img>{t.lastname} {t.firstName}</div>
      ) : <>no data</>
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

                <div className='titleterms'>Teachers</div>
              </div>
              <hr className='admin-underline'></hr>
              <div className='studentbox' onClick={this.showDetailsVerified}><img src={profilePic} className="picAdmin"></img>Meshkova Inna</div>

            </div>
            <div className='verticalLineAdmin'></div>
            <div className='userDetailsAdmin'>
              <div className='profileInfoAdmin'>
                <img src={profilePic} className="profileInfoPicAdmin"></img>
                <div className='profileDetailsAdmin'>
                  <div className='profileInfoNameAdmin'><b>Meshkova Inna</b><div className="verificationCrossAdmin"><img src={cross}></img>(unverified)</div></div>
                  <div className='birthdayInfoAdmin infoAdmin'><img src={calendar} className="infoIconAdmin"></img>24 July 1989<div className='ageInfoAdmin'>(36 years)</div></div>
                  <div className='phoneInfoAdmin infoAdmin'><img src={phone} className="infoIconAdmin"></img>+380 (97) 234 78 56</div>
                  <div className='emailInfoAdmin infoAdmin'><img src={envelope} className="infoIconAdmin"></img>anna.soloviy@itstep.org</div>
                </div>
              </div>
              <div className="subjectTeacherInfoAdmin">
                <div>
                  <div className='subjectTitleAdmin'>Subjects</div>
                  <ul className="subjectListAdmin">
                    No subjects
                  </ul>
                </div>
                <div className="addButtonDivAdmin">
                  <div className='addSubjectAdmin'>Add subject</div>
                </div>
              </div>
              <div className='verificationButtonAdmin'>Verify this teacher</div>
            </div>
            <div className='unverified-teachers'>
              <div className='titleterms'>Unverified users</div>
              <div className='unverified-box' onClick={this.showDetailsUnverified}><img src={profilePic} className="picAdmin"></img>Meshkova Inna</div>
              <div className='unverified-box' onClick={this.showDetailsUnverified}><img src={profilePic} className="picAdmin"></img>Meshkova Inna</div>

            </div>
            <div className='userDetailsAdmin'>
              <div className='profileInfoAdmin'>
                <img src={profilePic} className="profileInfoPicAdmin"></img>
                <div className='profileDetailsAdmin'>
                  <div className='profileInfoNameAdmin'><b>Meshkova Inna</b><div className="verificationCheckmarkAdmin"><img src={checkmark}></img>(verified)</div></div>
                  <div className='birthdayInfoAdmin infoAdmin'><img src={calendar} className="infoIconAdmin"></img>24 July 1989<div className='ageInfoAdmin'>(36 years)</div></div>
                  <div className='phoneInfoAdmin infoAdmin'><img src={phone} className="infoIconAdmin"></img>+380 (97) 234 78 56</div>
                  <div className='emailInfoAdmin infoAdmin'><img src={envelope} className="infoIconAdmin"></img>anna.soloviy@itstep.org</div>
                </div>
              </div>
              <div className="subjectTeacherInfoAdmin">
                <div>
                  <div className='subjectTitleAdmin'>Subjects</div>
                  <ul className="subjectListAdmin">
                    <li>Databases</li>
                    <li>Data storage</li>
                  </ul>
                </div>
                <div className="addButtonDivAdmin">
                  <div className='addSubjectAdmin'>Add subject</div>
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

Teachers.propTypes = {};

Teachers.defaultProps = {};

export default Teachers;
