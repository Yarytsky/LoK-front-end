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


function Search() {
    let indexDot = 2;
    let row = 0;

    const [filteredList, setFilteredList] = new useState(students);



    const filter = (event) => {
        const querySubject = chosenSubject;
        const queryGroup = chosenGroup;
        console.log(chosenSubject);
        const updatedList = [...students];
        const filteredList = updatedList.filter((item) => {
            const isSubjectPresent = item.subjects.some((subject) => {
                return subject.name.includes(querySubject);
            });
            return isSubjectPresent;

        });
        const filteredList2 = filteredList.filter((item) => {
            if (queryGroup === "All groups") {
                return item.group.toUpperCase() !== queryGroup;
            }
            else {
                return item.group.toUpperCase() === queryGroup;
            }
        });
        setFilteredList(filteredList2);
    }

    useEffect(() => {
        filter();
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



    return (
        <div className="searchStudent">
            <div className="searchHeader">
                <CustomSelectGroup
                    defaultText="All groups"
                    optionsList={[
                        { id: "", name: "All groups" },
                        { id: "3cs-21", name: "3CS-21" },
                        { id: "3cs-22", name: "3CS-22" },
                        { id: "3cs-23", name: "3CS-23" },
                    ]}
                    onClick={filter}
                    context="Group"
                />
                <CustomSelectGroup
                    defaultText="Web Programming"
                    optionsList={[
                        { id: "Web Programming", name: "Web Programming" },
                        { id: "Math", name: "Math" },
                        { id: "Web Design", name: "Web Design" },
                        { id: "English", name: "English" },
                    ]}
                    onClick={filter}
                    context="Subject"
                />
            </div>
            <div className="attendanceLabels">
                <div className='attandanceLabel'>Full name</div>
                <div className='attandanceLabel'>Visited last time</div>
                <div className='attandanceLabel'>Class work</div>
                <div className='attandanceLabel'>Attendance</div>
                <div className='attandanceLabel'>Comments</div>
            </div>
            {filteredList.map((item, index) => (
                <div className='studentMarks'>
                    <div className='studentInfoMarks'>
                        <img className='studentMarksPic' src={profilePic}></img>
                        <div className='studentName'>
                            {item.firstName} {item.lastname}
                        </div>
                    </div>
                    <div className='lastVisitAttendance'>
                        {item.lastVisit}
                    </div>
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
                        Group marks
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
