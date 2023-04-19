/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './attendance.css';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import logo from "../../img/Bobrlogo.png";
import Header from '../header/header';
import Footer from "../footer/footer";
import profilePic from "../../img/profilePic.jpg";
import age from "../../img/age.png";
import phone from "../../img/blackPhone.png";
import envelope from "../../img/blackEnvelope.png";
import door from "../../img/door.png";
import CustomSelectGroup from './CustomSelectGroup';
import { chosenGroup } from './CustomSelectGroup';
import { chosenSubject } from './CustomSelectGroup';
import { students } from './studentsListExample';
import purple from "../../img/purple.png";
import orange from "../../img/orange.png";
import comment from "../../img/comment.png";
import pencil from "../../img/pencil.png";


function Search() {
    let indexDot = 2;
    let row = 0;



    useEffect(() => {
    }, []);

    const selectRow = (e) => {
        row = e.currentTarget;
        const dots = row.children;
        for (let i = 0; i < dots.length; i++) {
            if (i === indexDot) {
                dots[i].classList.add("activeDot");
            } else {
                dots[i].classList.remove("activeDot");
            }
        }
    }


    const changeDot = (index) => {
        indexDot = index;
    }

    const changeTab = (e) => {
        let selectedTab = e.target;
        let allTabs = document.getElementsByClassName("lessonTab");
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].classList.remove("activeTab");
        }
        selectedTab.classList.add("activeTab");
    }



    return (
        <div className="searchStudent">
            <div className="searchHeaderAttendance">
                <div className='buttonsAttendance'>
                    <CustomSelectGroup
                        defaultText="April 20, 2023"
                        optionsList={[
                            { id: "", name: "April 17, 2023" },
                            { id: "", name: "April 18, 2023" },
                            { id: "", name: "April 19, 2023" },
                            { id: "", name: "April 20, 2023" },
                        ]}
                    />
                    <Link className="addTaskAttendance" to="/homework">
                        Add a task
                    </Link>
                </div>
                <div className='lessonTopicAttendance'>
                    <img src={pencil}></img>
                    <input className='lessonTopicInput' type="text" placeholder='Topic Of The Lesson'></input>
                </div>
            </div>
            <div className='lessonTabsAttendance'>
                <div className='lessonTab activeTab' onClick={changeTab}>1 lesson</div>
                <div className='lessonTab' onClick={changeTab}>2 lesson</div>
                <div className='lessonTab' onClick={changeTab}>3 lesson</div>
                <div className='lessonTab' onClick={changeTab}>4 lesson</div>
                <div className='lessonTab' onClick={changeTab}>5 lesson</div>
                <div className='lessonTab' onClick={changeTab}>6 lesson</div>
            </div>
            <div className="attendanceLabels">
                <div className='attendanceLabel'>Full name</div>
                <div className='attendanceLabel'>Visited last time</div>
                <div className='attendanceLabel'>Class work</div>
                <div className='attendanceLabel'>Attendance</div>
                <div className='attendanceLabel'>Comments</div>
            </div>
            {students.map((item, index) => (
                <div className='studentAttendance'>
                    <div className='studentInfoAttendance'>
                        <img className='studentMarksPic' src={profilePic}></img>
                        <div className='studentName'>
                            {item.firstName} {item.lastname}
                        </div>
                    </div>
                    <div className='lastVisitAttendance'>
                        {item.lastVisit}
                    </div>
                    <div className='attendanceMarkContainer'>
                        <select className='attendanceMark'>
                            <option>10</option>
                            <option>9</option>
                            <option>8</option>
                            <option>7</option>
                            <option>6</option>
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>
                    </div>

                    <div className='attendanceDots' onClick={selectRow}>
                        <div className={`attendanceDot green`} onClick={() => changeDot(0)}></div>
                        <div className={`attendanceDot yellow`} onClick={() => changeDot(1)}></div>
                        <div className={`attendanceDot red activeDot`} onClick={() => changeDot(2)}></div>
                    </div>
                    <div className='commentAttendance'>
                        <img src={comment}></img>
                    </div>
                </div>
            ))}
        </div>
    );
}



class Attendance extends React.Component {




    render() {
        return (
            <div className='fullPageMarks'>
                <Header />
                <div className='studentPageContainer'>
                    <div className="studentPageTitle">
                        attendance
                    </div>
                    <div className='attendanceBlock'>
                        <div className='studentGroupSelect'></div>
                        <div className='studentSearch'></div>
                        <Search />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }

}

Attendance.propTypes = {};

Attendance.defaultProps = {};

export default Attendance;
