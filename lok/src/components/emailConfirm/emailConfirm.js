/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import './emailConfirm.css';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';
import logo from "../../img/Bobrlogo.png";
import verifyEmailPic from '../../img/emailVerify.png';
import lock from "../../img/lockActivationCode.png";
import key from '../../img/keyActivationCode.png'
import check from '../../img/confirmEmailCheck.png'

class EmailConfirm extends React.Component {

    showActivationCodeBlock = (e) => {
        let verifyEmailBlock = document.getElementsByClassName("verifyEmailBlock")[0];
        let activationCodeBlock = document.getElementsByClassName("activationCodeBlock")[0];
        verifyEmailBlock.style.display = 'none';
        activationCodeBlock.style.display = "flex";
    }

    activateAccount = (e) => {
        let confirmSuccessScreen = document.getElementsByClassName("confirmSuccessScreen")[0];
        confirmSuccessScreen.style.display = "flex";
    }

  render() {
    return (
      <div>
        <div className='emailConfirmBackground'>
            <div className = "confirmSuccessScreen">
                <div className='confirmSuccessBlock'>
                    <img src = {check}></img>
                    <p>
                        Success!
                    </p>
                    <p>
                        Your email has been confirmed.
                    </p>
                </div>
            </div>
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
                        <div className='verifyEmailButton' onClick = {this.showActivationCodeBlock}>
                            Confirm email
                        </div>
                    </div>
                </div>
                <div className = "activationCodeBlock">
                    <div className='activationCodePic'>
                        <img src = {key}></img>
                        <img src = {lock}></img>
                    </div>
                    <div className='activationCodeMain'>
                        <div className='activationCodeTitle'>
                            activation code
                        </div>
                        <input className='activationCodeInput'>
                        </input>
                        <div className='activationCodeText'>
                            Copy your activation code and click the button below to activate your account
                        </div>
                        <div className='activationCodeButton' onClick = {this.activateAccount}>
                            Activate your account
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
