/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import './teacherHomepage.css';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import logo from "../../img/Bobrlogo.png";
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
import TeacherHeader from '../TeacherHeader/TeacherHeader';

let teacherSubjects = [
    {name: "WEB programming", description: "Something about the subject..."},
    {name: "Web Design", description: "Something about the subject..."},
    {name: "English", description: "Something about the subject..."},
    {name: "Programming", description: "Something about the subject..."},
    {name: "Programming", description: "Something about the subject..."},
    {name: "Programming", description: "Something about the subject..."}
]

const listItems = teacherSubjects.map((teacherSubjects) =>
    <div className='teacherHomeSubject'>
        <div className='teacherHomeSubjectName'>{teacherSubjects.name}</div>
        <div className='teacherHomeSubjectDescription'>{teacherSubjects.description}</div>
    </div>
);
class TeacherHomepage extends React.Component {


    render() {
        return (
            <div>
                <TeacherHeader />
                <div className='teacherHomeContainer'>
                    <div className="teacherHomeTitle">
                        Teacher's subjects
                    </div>
                    <div className='teacherHomeSubjects'>
                        <div className='teacherHomeSubtitle'>
                            Subjects
                        </div>
                        <div className='teacherHomeSubjectList'>
                            {listItems}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }

}

TeacherHomepage.propTypes = {};

TeacherHomepage.defaultProps = {};

export default TeacherHomepage;
