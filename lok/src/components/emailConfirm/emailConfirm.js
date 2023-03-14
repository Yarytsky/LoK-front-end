/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import './emailConfirm.css';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
import logo from "../../img/Bobrlogo.png"
import verifyEmailPic from '../../img/verifyEmailPic.svg'


class EmailConfirm extends React.Component {

 

  render() {
    return (
      <div>
        <div className='emailConfirmBackground'>
            <div className='emailConfirmContainer'>
                <div className = "confirmLogo"><img src = {logo}></img></div>
                <div className = "verifyEmailBlock">
                    <div className='verifyEmailPic'>
                        <img src = {verifyEmailPic}></img>
                    </div>
                    <div className='verifyEmailMain'>
                        <div className='verifyEmailTitle'>
                            Verify your email address
                        </div>
                        <div className='verifyEmailText1'>
                            We have sent a confirmation code to your email
                        </div>
                        <div className='verifyEmailText2'>
                            Please click the button below to confirm your email address
                        </div>
                        <div className='verifyEmailButton'>
                            Confirm email
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    )
  }

}

EmailConfirm.propTypes = {};

EmailConfirm.defaultProps = {};

export default EmailConfirm;
