/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from '../../common/with-router';
import profilePic from "../../img/profilePic.jpg";
import "./account.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Footer from "../footer/footer";
import Header from "../header/header";
import axios from "axios";

const dataAttendance = [{ name: 'May', att: "21" }, { name: "Jun", att: "45" }, { name: "Jul", att: "65" }, { name: "Aug", att: "85" }, { name: "Sep", att: "84" }, { name: "Oct", att: "100" }, { name: "Nov", att: "65" }];
const dataProgress = [{ name: 'May', gpa: "2" }, { name: "Jun", gpa: "4.5" }, { name: "Jul", gpa: "9" }, { name: "Aug", gpa: "8" }, { name: "Sep", gpa: "8" }, { name: "Oct", gpa: "8" }, { name: "Nov", gpa: "8" }];
const API_URL = "https://localhost:7203/";
class Account extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="containerAccount">
                    <div className="accountPageTitle">
                        Profile
                    </div>
                    <div className="accountInfoBlock">
                        <img className="accountPic" src={profilePic}></img>
                        <div className="accountAllInfo">
                            <div className="accountSepInfo">
                                <div className="accountInfoText accountNameRole">
                                    <div className="accountName">{this.props.userdata.lastname} {this.props.userdata.firstName}</div>
                                    <div className="accountRole">({this.props.userdata.role})</div>
                                </div>
                                <div className="accountInfoText accountRegisterDate">Registration date: {this.props.userdata.creationDate}</div></div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">Phone number:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.phoneNumber}</div>
                            </div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">E-mail:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.email}</div>
                            </div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">Country:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.country}</div>
                            </div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">Gender:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.gender}</div>
                            </div>
                            <div className="accountInfoText">
                                <div className="accountSubinfoTitle">Absence:</div>
                                <div className="accountSubinfoMain">{this.props.userdata.attendance}</div>
                            </div>
                        </div>
                    </div>
                    <div className="accountGraphBlock">
                        <div className="accountGraphTitle">Attendance chart</div>
                        <div className="accountGraphMain">
                            <div className="accountGraphInfo">
                                <div className="accountNumbers">80%</div>attendance
                            </div>
                            <div className="accountGraph">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart width={600} height={300} data={dataAttendance}>
                                        <Line type="monotone" dataKey="att" stroke="#8884d8" strokeWidth={4} />
                                        <CartesianGrid stroke="#ccc" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="accountGraphBlock">
                        <div className="accountGraphTitle">Progress</div>
                        <div className="accountGraphMain">
                            <div className="accountGraphInfo">
                                <div className="accountNumbers">10</div>GPA
                            </div>
                            <div className="accountGraph">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart width={600} height={300} data={dataProgress}>
                                        <Line type="monotone" dataKey="gpa" stroke="#F7B801" strokeWidth={4} />
                                        <CartesianGrid stroke="#ccc" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default withRouter(Account);