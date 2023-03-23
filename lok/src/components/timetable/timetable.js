/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './timetable.css';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
import arrowRight from "../../img/arrowRight.png";
import arrowLeft from "../../img/arrowLeft.png"

let teacherSubjects = [
    { name: "WEB programming", description: "Something about the subject..." },
    { name: "Web Design", description: "Something about the subject..." },
    { name: "English", description: "Something about the subject..." },
    { name: "Programming", description: "Something about the subject..." },
    { name: "Programming", description: "Something about the subject..." },
    { name: "Programming", description: "Something about the subject..." }
]

const listItems = teacherSubjects.map((teacherSubjects) =>
    <div className='teacherHomeSubject'>
        <div className='teacherHomeSubjectName'>{teacherSubjects.name}</div>
        <div className='teacherHomeSubjectDescription'>{teacherSubjects.description}</div>
    </div>
);
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();
const dayOfWeek = daysOfWeek[date.getDay()];
const month = monthsOfYear[date.getMonth()];
const day = date.getDate();

const formattedDate = `${dayOfWeek}, ${month} ${day}`;

const now = new Date();
const dayOfWeek2 = now.getDay();
const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOfWeek2);
const endOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOfWeek2 + 6);

const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const formattedWeek = `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;

const data = [
    { dayOfWeek: "Monday", slots: ["", "", <div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", "", <div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", ""] },
    { dayOfWeek: "Tuesday", slots: [<div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", "", "", "", <div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", ""] },
    { dayOfWeek: "Wednesday", slots: [<div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", "", "", "", <div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", ""] },
    { dayOfWeek: "Thursday", slots: [<div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", "", "", "", <div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", ""] },
    { dayOfWeek: "Friday", slots: [<div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", "", "", "", <div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", ""] },
    { dayOfWeek: "Saturday", slots: [<div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", "", "", "", <div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", ""] },
    { dayOfWeek: "Sunday", slots: [<div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", "", "", "", <div><div className='daySlotTitle'>English 4CS-21</div><div className='classroomNumberSlot'>112</div><div className='timeSlot'>12:10-13:30</div></div>, "", "", ""] },

];

const Slot = ({ value }) => {
    const style = {
        backgroundColor: value ? "#FFF4D4" : "#A5A6F3",
        height: value ? "7vh" : "6.5vh",
    };
    return <div style={style} className="timetableWeekdaySlot">{value || ""}</div>;
};

const Table = ({ data }) => {
    return (
        <div className='timetableWeek'>
            {data.map(({ dayOfWeek, slots }, i) => (
                <div key={i} className="weekdayColumn">
                    <div className='weekdayTitle'>{dayOfWeek}</div>
                    {slots.map((slot, j) => (
                        <Slot key={j} value={slot} />
                    ))}
                </div>
            ))}
        </div>
    );
};


class Timetable extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <div className='timetableContainer'>
                    <div className='timetableTitle'>
                        <div className='timetableToday'>
                            {formattedDate}
                        </div>
                        <div className='timetableWeekSwitch'>
                            <img className='leftArrowTimetable' src={arrowLeft}></img>
                            {formattedWeek}
                            <img className='rightArrowTimetable' src={arrowRight}></img>
                        </div>
                    </div>

                    <div className='timetableFullWeek'>
                        <Table data={data} />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }

}

Timetable.propTypes = {};

Timetable.defaultProps = {};

export default Timetable;
