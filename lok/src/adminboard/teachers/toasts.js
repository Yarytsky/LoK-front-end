import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import profilePic from "../../img/profilePic.jpg";

function TeacherDetail() {


    const [showDetails, setshowDetails] = useState(true)

    const toggleshowDetails = () => setshowDetails(!showDetails)


    return (

        <>
        <button className='studentbox' onClick={toggleshowDetails}><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></button>

            <Toast show={showDetails} onClose={toggleshowDetails} position="middle-center">
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </>


    )
}

export default TeacherDetail