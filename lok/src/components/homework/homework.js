/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './homework.css';
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
import loadFile from "../../img/loadFile.png";
import pdfIcon from "../../img/pdfIcon.png";


function Search() {

    let indexHomework = -1;
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

    const showModalHomework = (e) => {
        let row = e.currentTarget;
        let homeworkButtons = row.children;
        homeworkButtons[1].style.display = "flex";
    }

    const getIndex = (index) => {
        indexHomework = index;
    }

    const hideModal = (e) => {
        e.stopPropagation();
        let target = e.target;
        if (target.className === "homeworkModal") {
            let allModals = document.getElementsByClassName("homeworkModal");
            for (let i = 0; i < allModals.length; i++) {
                allModals[i].style.display = "none";
            }
        }
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
            <div className="studentListMarks">
                <div className='studentListLabelMarks'>
                    <div className='studentNameLabelMarks'>Student's full name</div>
                    <div className='studentHomeworkLabelsMarks'>
                        <div className='studentHomeworkLabelMarks'>
                            <div>Topic 1</div>
                        </div>
                        <div className='studentHomeworkLabelMarks'>
                            <div>Topic 2</div>
                        </div>
                        <div className='studentHomeworkLabelMarks'>
                            <div>Topic 3</div>
                        </div>
                        <div className='studentHomeworkLabelMarks'>
                            <div>Topic 4</div>
                        </div>
                    </div>
                </div>
                {filteredList.map((item, index) => (
                    <div className='studentMarks'>
                        <div className='studentInfoMarks'>
                            <img className='studentMarksPic' src={profilePic}></img>
                            <div className='studentName'>
                                {item.firstName} {item.lastname}
                            </div>
                        </div>
                        <div className='studentHomeworkRow'>
                            {item.subjects.map((subject, index) => {
                                if (subject.name === chosenSubject) {
                                    return subject.lessons.map((lesson, index) => {
                                        if (lesson.marks.length === 0) {
                                            return (
                                                <div className='homeworkContainer' onClick={showModalHomework}>
                                                    <div className='homeworkButton' onClick={getIndex(index)}>
                                                        <img className='homeworkIcon' src={loadFile}></img>
                                                        <div className='homeworkMark'></div>
                                                    </div>
                                                    <div className='homeworkModal' onClick={hideModal}>
                                                        <div className='homeworkModalMain'>
                                                            <div className='homeworkModalTitle'>Homework</div>
                                                            <div className='homeworkModalFile'>Downloaded file: <img src={pdfIcon}></img></div>
                                                            <div className='homeworkModalMark'>Mark:
                                                                <select>
                                                                    
                                                                </select>
                                                                {lesson.marks[0]}</div>
                                                            <div className='homeworkModalComment'>Comment: Task description...</div>
                                                            <div className='homeworkModalSubtext'>
                                                                <div>Task added date: Tuesday 21 January 2023  02:00 AM</div>
                                                                <div>Deadline: Wednesday 27 January 2023 01:00 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className='homeworkContainer' onClick={showModalHomework}>
                                                    <div className='homeworkButton' onClick={getIndex(index)}>
                                                        <img className='homeworkIcon' src={loadFile}></img>
                                                        <div className='homeworkMark'>{lesson.marks[0]}</div>
                                                    </div>
                                                    <div className='homeworkModal' onClick={hideModal}>
                                                        <div className='homeworkModalMain'>
                                                            <div className='homeworkModalTitle'>Homework</div>
                                                            <div className='homeworkModalFile'>Downloaded file: <img src={pdfIcon}></img></div>
                                                            <div className='homeworkModalMark'>Mark: {lesson.marks[0]}</div>
                                                            <div className='homeworkModalComment'>Comment: Task description...</div>
                                                            <div className='homeworkModalSubtext'>
                                                                <div>Task added date: Tuesday 21 January 2023  02:00 AM</div>
                                                                <div>Deadline: Wednesday 27 January 2023 01:00 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    });
                                }
                                return null;
                            })}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



class Homework extends React.Component {


    render() {
        return (
            <div className='fullPageMarks'>
                <Header />
                <div className='studentPageContainer'>
                    <div className="studentPageTitle">
                        homework
                    </div>
                    <div className='studentsBlock'>
                        <Search />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }

}

Homework.propTypes = {};

Homework.defaultProps = {};

export default Homework;
