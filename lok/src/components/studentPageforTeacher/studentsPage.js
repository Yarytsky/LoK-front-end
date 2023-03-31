/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './studentsPage.css';
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

function Search() {

    let students = [
        { firstName: "Diana", lastname: "Barabash", photo: profilePic, age: "18", email: "dianabarabash@gmail.com", phoneNumber: "+380975216483", attendance: "85%", group: "3CS-21", averageScore: "10", lastLogin: "23.01.2023" },
        { firstName: "Inna", lastname: "Meshkova", photo: profilePic, age: "18", email: "dianabarabash@gmail.com", phoneNumber: "+380975216483", attendance: "85%", group: "3CS-22", averageScore: "10", lastLogin: "23.01.2023" },
        { firstName: "John", lastname: "Doe", photo: profilePic, age: "18", email: "johndoe@gmail.com", phoneNumber: "+380975216483", attendance: "85%", group: "3CS-21", averageScore: "9", lastLogin: "23.01.2023" },
        { firstName: "Alice", lastname: "Wonderland", photo: profilePic, age: "18", email: "alicewonderland@gmail.com", phoneNumber: "+380975216483", attendance: "85%", group: "3CS-23", averageScore: "10", lastLogin: "23.01.2023" },
    ];

    const [filteredList, setFilteredList] = new useState(students);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value.toLowerCase();
        // Create copy of item list
        const updatedList = [...students];
        // Include all elements which includes the search query in either first name, last name, or group
        const filteredList = updatedList.filter((item) => {
            const fullName = `${item.firstName} ${item.lastname}`.toLowerCase();
            return fullName.includes(query) ;
        });
        // Trigger render with updated values
        setFilteredList(filteredList);
    };

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

    const filterAll = (event) => {
        filterBySearch(event);
        filterByGroup()
    }

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
                <input class="studentSearch" onChange={filterBySearch} placeholder="Student search" />
            </div>
            <div className="studentList">
                {filteredList.map((item, index) => (
                    <div className='studentCard'>
                        <div className='mainStudentInfo'>
                            <img className='mainStudentInfoPic' src={profilePic}></img>
                            <div className='mainStudentInfoText'>
                                <div className='studentName'>
                                    {item.firstName} {item.lastname}
                                </div>
                                <div className='studentGroup'>Group: {item.group}</div>
                                <div className='studentSubject'>Web programming</div>
                            </div>
                        </div>
                        <div className='studentAverageScore'><div>{item.averageScore}</div> Average score</div>
                        <div className='studentAttendance'><div>{item.attendance}</div> Attendance</div>
                        <div className='studentSubInfo'><img src={age}></img>Age: {item.age} years</div>
                        <div className='studentSubInfo'><img src={envelope}></img>{item.email}</div>
                        <div className='studentSubInfo'><img src={phone}></img>{item.phoneNumber}</div>
                        <div className='studentSubInfo'><img src={door}></img>Attended LOK: {item.lastLogin}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}



class StudentsPage extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <div className='studentPageContainer'>
                    <div className="studentPageTitle">
                        Students
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

StudentsPage.propTypes = {};

StudentsPage.defaultProps = {};

export default StudentsPage;
