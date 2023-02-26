/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import PropTypes from 'prop-types';
import './subjects.css';
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
import CustomSelectSubject from './CustomSelectSubject';




function Search() {
    
    const itemList = [
      "Data storage",
      "Orange",
      "Banana",
      "Cherry",
      "Milk",
      "Peanuts",
      "Butter",
      "Tomato"
    ];
  
    const [filteredList, setFilteredList] = new useState(itemList);
  
    const filterBySearch = (event) => {
      // Access input value
      const query = event.target.value;
      // Create copy of item list
      var updatedList = [...itemList];
      // Include all elements which includes the search query
      updatedList = updatedList.filter((item) => {
        return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      // Trigger render with updated values
      setFilteredList(updatedList);
    };
    const showDetailsVerified = (e) => {
        x += 1;
        let verifiedTeachers = document.getElementsByClassName("verified-teachers")[0];
        let unverifiedTeachers = document.getElementsByClassName("unverified-teachers")[0];
        let userDetailsAdmin = document.getElementsByClassName("subjectDetailsAdmin")[0];
        let editStudentMenuAdmin = document.getElementsByClassName("editStudentMenuAdmin")[0];
        target = e.target;
        if (x % 2 === 1) {
            verifiedTeachers.style = "flex-grow: 0; width: 35vw";
            unverifiedTeachers.style.display = "none";
            userDetailsAdmin.style.display = "flex";
            target.style = "background-color: #A5A6F3; border: 3px solid #A5A6F3";
        }
        else {
            verifiedTeachers.style = "flex-grow: 1;";
            unverifiedTeachers.style.display = "flex";
            userDetailsAdmin.style.display = "none";
            target.style = "background-color: #D2D3F9; border: none";
            editStudentMenuAdmin.style.display = "none";
        }
    }
    return (
      <div className="searchSubject">
        <div className="search-header">
          <input id="search-box" onChange={filterBySearch} placeholder = "Search"/>
        </div>
        <div id="item-list">
          <ol>
            {filteredList.map((item, index) => (
              <div className='studentbox subjectNameAdmin' key={index} onClick={showDetailsVerified}>{item}</div>
            ))}
          </ol>
        </div>
      </div>
    );
  }

let courseSelect = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" }
]

let mainGroup = [
    { id: 1, name: "3CS-21" },
    { id: 2, name: "4CS-21" },
    { id: 3, name: "4CS-22" }
]

let x = 0;
let y = 0;
let target;
class Subjects extends React.Component {

    
    showDetailsUnverified = (e) => {
        y += 1;
        let verifiedTeachers = document.getElementsByClassName("verified-teachers")[0];
        let unverifiedTeachers = document.getElementsByClassName("unverified-teachers")[0];
        let userDetailsAdmin = document.getElementsByClassName("subjectDetailsAdmin")[0];
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
        let userDetailsAdminVer = document.getElementsByClassName("subjectDetailsAdmin")[0];
        let verticalLineAdmin = document.getElementsByClassName("verticalLineAdmin")[0];
        let editStudentMenuAdmin = document.getElementsByClassName("editStudentMenuAdmin")[0];
        if (userDetailsAdminVer.style.display !== "none") {
            if (y % 2 === 1) {
                y += 1;
                unverifiedTeachers.style = "flex-grow: 1;";
                unverifiedTeachers.style.display = "flex";
                verifiedTeachers.style.display = "flex";
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
                editStudentMenuAdmin.style.display = "none";
            }
        }
    }

    tableOptionChange = (e) => {
        let option = e.target;
        let allOptions = document.getElementsByClassName("tableOptionAdmin");
        for (var i = 0; i < allOptions.length; i++) {
            if (allOptions[i].style.backgroundColor === "rgb(210, 211, 249)") {
                allOptions[i].style.backgroundColor = "white";
            }
        }
        option.style = "background-color: #D2D3F9;";
    }

    showEditMenu = (e) => {
        let editStudentMenuAdmin = document.getElementsByClassName("editStudentMenuAdmin")[0];
        editStudentMenuAdmin.style.display = "flex";
    }

    changeSubgroupType = (e) => {
        let subgroupType = e.target;
        let allSubgroupTypes = document.getElementsByClassName("subgroupType");
        for (var i = 0; i < allSubgroupTypes.length; i++) {
            if (allSubgroupTypes[i].style.fontWeight === "600") {
                allSubgroupTypes[i].style.fontWeight = "400";
            }
            if (allSubgroupTypes[i] === subgroupType) {
                for (var j = 0; j < allSubgroupTypes.length; j++) {
                    if (document.getElementsByClassName("subgroupChoiceTable")[j].style.display === "flex") {
                        document.getElementsByClassName("subgroupChoiceTable")[j].style.display = "none";
                    }
                }
                document.getElementsByClassName("subgroupChoiceTable")[i].style.display = "flex";
            }
        }
        subgroupType.style.fontWeight = "600";
    }

    saveGroups = (e) => {
        let course = document.getElementsByClassName("selected-textAdmin")[0].innerHTML;
        let mainGroup = document.getElementsByClassName("selected-textAdmin")[1].innerHTML;
        let allOptionsSub = document.getElementsByClassName("tableOptionAdmin");
        let subgroup;
        for (var i = 0; i < allOptionsSub.length; i++) {
            if (allOptionsSub[i].style.backgroundColor === "rgb(210, 211, 249)") {
                subgroup = allOptionsSub[i].innerHTML;
            }
        }

        let studentDetailAdmin = document.getElementsByClassName("subjectDetailsAdmin");
        studentDetailAdmin[3].innerHTML = 'Course: <div>' + course + '</div>';
        studentDetailAdmin[4].innerHTML = 'Main group: <div>' + mainGroup + '</div>';
        studentDetailAdmin[5].innerHTML = 'Subgroup: <div>' + subgroup + '</div>';
        let editStudentMenuAdmin = document.getElementsByClassName("editStudentMenuAdmin")[0];
        editStudentMenuAdmin.style.display = "none";
    }

    cancelEditing = (e) => {
        let editStudentMenuAdmin = document.getElementsByClassName("editStudentMenuAdmin")[0];
        editStudentMenuAdmin.style.display = "none";
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
                        <div className='verified-teachers subjectsListAdmin'>
                            <div className='center'>

                                <div className='titleterms'>Subjects</div>
                            </div>
                            <hr className='admin-underline'></hr>
                            <Search/>

                        </div>
                        <div className='verticalLineAdmin'></div>
                        <div>
                            <div className='subjectDetailsAdmin'>
                                <div className='subjectInfoAdmin'>
                                    <div className='subjectTitleAdmin'>Data storage</div>
                                    <div className='studentDetailsTitleAdmin'>Details</div>
                                    <div>
                                        <div className='contSubAdmin'>
                                            <div className="subjectDetailAdmin">Teacher: <div><img src={profilePic}></img>Anna Soloviy</div></div>
                                        </div>
                                        <div className='contSubAdmin'>
                                            <div className="subjectDetailAdmin groupNameSubjectAdmin">Group name: <div>DS</div></div></div>
                                        <div className="subjectDetailAdmin groupsSubjectAdmin">Groups: <div>4CS-31</div><div>4CS-32</div></div></div>
                                    <div className="addButtonDivAdmin editSubjectAdmin">
                                        <div className='editGroupAdmin' onClick={this.showEditMenu}>Edit</div>
                                    </div>
                                </div>
                            </div>
                            <div className='editStudentMenuAdmin'>
                                <div className='editMenuTitle'>Edit details</div>
                                <div className='editMenuChoicesAdmin'>
                                    <div className='editMenuChoiceAdmin'>Course: <div className='editStudentDropdown courseDropdown'><CustomSelectSubject defaultText="1" optionsList={courseSelect}></CustomSelectSubject></div></div>
                                    <div className='editMenuChoiceAdmin'>Main group: <div className='editStudentDropdown groupDropdown'><CustomSelectSubject defaultText="3CS-21" optionsList={mainGroup}></CustomSelectSubject></div></div>

                                    <div className='editMenuChoiceAdmin subgroupsMenu'>Subgroups: <div className='subgroupTypeChoice'><div className='subgroupType' onClick={this.changeSubgroupType}>Design</div><div className='subgroupType' onClick={this.changeSubgroupType}>Management</div><div className='subgroupType' onClick={this.changeSubgroupType}>Programming</div><div className='subgroupType' onClick={this.changeSubgroupType}>Other</div></div>
                                        <div className='subgroupChoiceTable subChoiceDesign'>
                                            <div className='tableRowAdmin'><div className="tableOptionAdmin" onClick={this.tableOptionChange}>3DD-11</div>
                                                <div className="tableOptionAdmin" onClick={this.tableOptionChange}>3DD-11</div>
                                                <div className="tableOptionAdmin" onClick={this.tableOptionChange}>3DD-11</div></div>
                                        </div>
                                        <div className='subgroupChoiceTable subChoiceManagement'>
                                            <div className='tableRowAdmin'><div className="tableOptionAdmin" onClick={this.tableOptionChange}>3M-11</div>
                                                <div className="tableOptionAdmin" onClick={this.tableOptionChange}>3M-11</div>
                                                <div className="tableOptionAdmin" onClick={this.tableOptionChange}>3DD-11</div></div>
                                        </div>
                                        <div className='subgroupChoiceTable subChoiceProgramming'>
                                            <div className='tableRowAdmin'><div className="tableOptionAdmin" onClick={this.tableOptionChange}>AT</div>
                                                <div className="tableOptionAdmin" onClick={this.tableOptionChange}>3DD-11</div>
                                                <div className="tableOptionAdmin" onClick={this.tableOptionChange}>3DD-11</div></div>
                                        </div>
                                        <div className='subgroupChoiceTable subChoiceOther'>
                                            <div className='tableRowAdmin'><div className="tableOptionAdmin" onClick={this.tableOptionChange}>HZ</div>
                                                <div className="tableOptionAdmin" onClick={this.tableOptionChange}>3DD-11</div>
                                                <div className="tableOptionAdmin" onClick={this.tableOptionChange}>3DD-11</div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='editMenuButtonsAdmin'>
                                    <div className='editMenuButton' onClick={this.saveGroups}>Save</div>
                                    <div className='editMenuButton' onClick={this.cancelEditing}>Cancel</div>
                                </div>
                            </div>
                        </div>
                        <div className='unverified-teachers'>
                            <div className='titleterms'>Teachers</div>
                            <div className='unverified-box' ><img src={profilePic} className="picAdmin"></img>Meshkova Inna</div>
                            <div className='unverified-box'><img src={profilePic} className="picAdmin"></img>Meshkova Inna</div>

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        )
    }

}

Subjects.propTypes = {};

Subjects.defaultProps = {};

export default Subjects;
