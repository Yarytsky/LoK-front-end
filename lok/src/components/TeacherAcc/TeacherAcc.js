/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from '../../common/with-router';
import profilePic from "../../img/profilePic.jpg";
import "./TeacherAcc.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Footer from "../footer/footer";
import axios from "axios";
import TeacherHeader from "../TeacherHeader/TeacherHeader";

const dataAttendance = [{ name: 'May', att: "21" }, { name: "Jun", att: "45" }, { name: "Jul", att: "65" }, { name: "Aug", att: "85" }, { name: "Sep", att: "84" }, { name: "Oct", att: "100" }, { name: "Nov", att: "65" }];
const dataProgress = [{ name: 'May', gpa: "2" }, { name: "Jun", gpa: "4.5" }, { name: "Jul", gpa: "9" }, { name: "Aug", gpa: "8" }, { name: "Sep", gpa: "8" }, { name: "Oct", gpa: "8" }, { name: "Nov", gpa: "8" }];
class TeacherAccount extends Component {
    
    render() {
        return (
            <div>
                <TeacherHeader/>
                <div className="containerAccount t-acc">
                    <div className="accountPageTitle">
                        Profile
                    </div>
                    <div className="accountInfoBlock">
                        <img className="accountPic" src={profilePic}></img>
                        <div className="accountAllInfo">
                            <div className="accountSepInfo">
                                <div className="accountInfoText accountNameRole">
                                    <div className="accountName">{this.props.userdata.user.lastname} {this.props.userdata.user.firstName}</div>
                                    <div className="accountRole">({this.props.userdata.user.role})</div>
                                </div>
                                <div className="accountInfoText accountRegisterDate">Registration date: {this.props.userdata.user.creationDate}</div></div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">Phone number:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.user.phoneNumber}</div>
                            </div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">E-mail:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.user.email}</div>
                            </div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">Country:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.user.country}</div>
                            </div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">Gender:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.user.gender}</div>
                            </div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">Absence:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.user.attendance}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default withRouter(TeacherAccount);