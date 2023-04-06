/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
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
let students = [
    {
        firstName: "Diana", lastname: "Barabash", group: "3CS-21", subjects: [
            { name: "Web Programming", lessons: [{ number: 1, marks: [8, 9] }, { number: 2, marks: [7, 6] }] },
            { name: "Math", lessons: [{ number: 1, marks: [10, 10] }, { number: 2, marks: [9, 8] }] },
            { name: "English", lessons: [{ number: 1, marks: [7, 8] }, { number: 2, marks: [6, 7] }] }
        ]
    },
    {
        firstName: "Inna", lastname: "Meshkova", group: "3CS-22", subjects: [
            { name: "Math", lessons: [{ number: 1, marks: [9, 9] }, { number: 2, marks: [8, 7] }] },
            { name: "English", lessons: [{ number: 1, marks: [8, 7] }, { number: 2, marks: [7, 6] }] },
            { name: "Web Design", lessons: [{ number: 1, marks: [9, 8] }, { number: 2, marks: [8, 7] }] }
        ]
    },
    {
        firstName: "John", lastname: "Doe", group: "3CS-21", subjects: [
            { name: "English", lessons: [{ number: 1, marks: [6, 7] }, { number: 2, marks: [7, 8] }] },
            { name: "Project Management", lessons: [{ number: 1, marks: [8, 8] }, { number: 2, marks: [9, 9] }] }
        ]
    },
    {
        firstName: "Alice", lastname: "Wonderland", group: "3CS-23", subjects: [
            { name: "Programming", lessons: [{ number: 1, marks: [9, 10] }, { number: 2, marks: [8, 9] }] },
            { name: "Math", lessons: [{ number: 1, marks: [10, 10] }, { number: 2, marks: [9, 8] }] }
        ]
    },
    {
        firstName: "Michael", lastName: "Johnson", group: "3CS-21",
        subjects: [
            { name: "Programming", lessons: [{ number: 1, marks: [7, 8] }, { number: 2, marks: [6, 7] }] },
            { name: "Database", lessons: [{ number: 1, marks: [9, 9] }, { number: 2, marks: [8, 8] }] }
        ]
    },
    {
        firstName: "Sarah", lastName: "Lee", group: "3CS-23",
        subjects: [
            { name: "Math", lessons: [{ number: 1, marks: [8, 7] }, { number: 2, marks: [9, 9] }] },
            { name: "Web Programming", lessons: [{ number: 1, marks: [9, 9] }, { number: 2, marks: [7, 8] }] }
        ]
    },
    {
        firstName: "Tom", lastName: "Smith", group: "3CS-22",
        subjects: [
            { name: "English", lessons: [{ number: 1, marks: [9, 8] }, { number: 2, marks: [8, 7] }] },
            { name: "Web Design", lessons: [{ number: 1, marks: [8, 7] }, { number: 2, marks: [7, 6] }] }
        ]
    }
];
function Search() {

    const [filteredList, setFilteredList] = new useState(students);


    const filterByGroup = (event) => {

        // Access selected group value
        const query = chosenGroup;
        // Create copy of item list
        const updatedList = [...students];
        // Include all elements which are in the selected group
        const filteredList = updatedList.filter((item) => {
            if (query === "All groups") {
                return item.group.toUpperCase() !== query;
            }
            else {
                return item.group.toUpperCase() === query;
            }
        });
        // Trigger render with updated values
        setFilteredList(filteredList);
    };


    return (
        <div className="searchStudent">
            <div className="searchHeader">
                <CustomSelectGroup
                    defaultText="All Groups"
                    optionsList={[
                        { id: "", name: "All groups" },
                        { id: "3cs-21", name: "3CS-21" },
                        { id: "3cs-22", name: "3CS-22" },
                        { id: "3cs-23", name: "3CS-23" },
                    ]}
                    onClick={filterByGroup}
                />
            </div>
            <div className="studentListMarks">
                {filteredList.map((item, index) => (
                    <div className='studentMarks'>
                        <div className='studentInfoMarks'>
                            <img className='studentMarksPic' src={profilePic}></img>
                            <div className='studentName'>
                                {item.firstName} {item.lastname}
                            </div>
                        </div>
                        <div className='studentMarksRow'>
                            <div className='studentMarksLesson'>

                            </div>
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
            <div>
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
