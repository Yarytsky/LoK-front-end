/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './groupMarks.css';
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


function Search() {

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
            console.log(item);
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

    const getMarks = (student, subjectName, lessonNumber) => {
        const subject = student.subjects.find((subject) => subject.name === subjectName);
        if (!subject) return null;
        const lesson = subject.lessons.find((lesson) => lesson.number === lessonNumber);
        if (!lesson) return null;
        return lesson.marks;
    };


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
            <div className='studentMarksLegend'>
                <div className='studentMarksExp'>
                    <img src={purple}></img>
                    <div>Homework Assignments</div>
                </div>
                <div className='studentMarksExp'>
                    <img src={orange}></img>
                    <div>Classwork</div>
                </div>
            </div>
            <div className="studentListMarks">
                <div className='studentListLabelMarks'>
                    <div className='studentNameLabelMarks'>Student's full name</div>
                    <div className='studentLessonLabelsMarks'>
                        <div className='studentLessonLabelMarks'>
                            <div>02/03/2023</div>
                            <div>(1 session)</div>
                            <div>№1</div>
                        </div>
                        <div className='studentLessonLabelMarks'>
                            <div>04/03/2023</div>
                            <div>(2 session)</div>
                            <div>№2</div>
                        </div>
                        <div className='studentLessonLabelMarks'>
                            <div>05/03/2023</div>
                            <div>(3 session)</div>
                            <div>№3</div>
                        </div>
                        <div className='studentLessonLabelMarks'>
                            <div>06/03/2023</div>
                            <div>(4 session)</div>
                            <div>№4</div>
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
                        <div className='studentMarksRow'>
                            {item.subjects.map((subject, index) => {
                                if (subject.name === chosenSubject) {
                                    return subject.lessons.map((lesson, index) => {
                                        if (lesson.marks.length === 0) {
                                            return (
                                                <div className='studentMarksLesson' key={index}>
                                                    <div className='marksSmallBlock'>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className='studentMarksLesson' key={index}>
                                                    <div className='marksSmallBlock'>
                                                        <div className='homeworkMark'>{lesson.marks[0]}</div>
                                                        <div className='classworkMark'>{lesson.marks[1]}</div>
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



class GroupMarks extends React.Component {


    render() {
        return (
            <div className='fullPageMarks'>
                <Header />
                <div className='studentPageContainer'>
                    <div className="studentPageTitle">
                        Group marks
                    </div>
                    <div className='studentsBlock'>
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

GroupMarks.propTypes = {};

GroupMarks.defaultProps = {};

export default GroupMarks;
