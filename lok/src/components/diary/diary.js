import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Component } from 'react';
import "./diary.css"
import CustomSelect from "./customSelect";
import Footer from "../footer/footer";
import Header from "../header/header";



let projectManagement = [
    { id: 1, name: "Topics: 4" },
    { id: 2, name: "Practical tasks: 2" },
    { id: 3, name: "Video: 2" },
    { id: 4, name: "Tests: 5" }
]



class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
            defaultSelectText: "Please select an option",
            countryList: [
                { id: 1, name: "Australia" },
                { id: 2, name: "Brazil" },
                { id: 3, name: "China" },
                { id: 4, name: "Denmark" },
                { id: 5, name: "Egypt" },
            ]
        };
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container-fluid background diaryContainer">
                    <div>
                        <div className='text-center diaryTitle'>Diary</div>
                        <div className="center">
                            <hr className='diaryLine'></hr>

                        </div>
                    </div>

                    <div className='subjectBlock'>
                        <div className='subjectBlockTitle'>
                            Semester subject
                        </div>
                        <div className='subjectList'>
                            <div className="subjectItem">
                                <div className='subjectTitle'>1 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div>
                            <div className="subjectItem">
                                <div className='subjectTitle'>2 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div>
                            <div className="subjectItem">
                                <div className='subjectTitle'>3 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>4 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>5 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>6 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>7 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>8 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='subjectBlock'>
                        <div className='subjectBlockTitle'>
                            Selected proposals from partners
                        </div>
                        <div className='subjectList'>
                            <div className="subjectItem">
                                <div className='subjectTitle'>1 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div>
                            <div className="subjectItem">
                                <div className='subjectTitle'>2 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div>
                            <div className="subjectItem">
                                <div className='subjectTitle'>3 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>4 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>5 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>6 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>7 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div><div className="subjectItem">
                                <div className='subjectTitle'>8 sub</div>
                                <div className='subjectSelect'>
                                    <CustomSelect
                                        defaultText="Project management"
                                        optionsList={projectManagement}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        )

    }
}

export default Diary;
