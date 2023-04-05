/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import AuthService from "../../services/auth.service";
import logo from "../../img/Bobrlogo.png"
import { withRouter } from '../../common/with-router';
import "./login.css"
import startRefreshTokenTimer from "../../services/refresh";

import avatar from "../../img/icons/Vector.png"
import password from "../../img/icons/password.png"
import books1 from "../../img/img1.png"
import books2 from "../../img/img2.png"
import facebookLogo from "../../img/facebookLogo.png"



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      PhoneOrEmail: "",
      Password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      PhoneOrEmail: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.PhoneOrEmail, this.state.Password).then(
        (e) => {
          if (!(e === undefined)) {
            this.props.router.navigate("/homepage");
            window.location.reload();
            
          }
          else{
            window.location.reload();
            alert("You entered wrong e-mail/phone number or password!")
          }
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="background ">
        <div className="justify-content-center logoRow">
          <img src={logo} className="logo" />
        </div>
        <div className="row">
          <div className="card form-bg  col-10 card-container loginCard">
            <div className="row text-center justify-content-center title">Log in</div>

            <Form
              onSubmit={this.handleLogin}
              ref={c => {
                this.form = c;
              }}
            >
              <div className="justify-content-center inputsLogin">

                <div className="loginInput">
                  <Input
                    type="text"
                    className="formLogin"
                    placeholder="e-mail/phonenumber"
                    name="username"
                    value={this.state.PhoneOrEmail}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                  />
                </div>

                <div className="loginInput">
                  <Input
                    type="password"
                    className="formLogin"
                    name="password"
                    placeholder="password"
                    value={this.state.Password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>
                <div className="end">
                <a className="login_link">forgot your password?</a>
              </div>
              </div>
             
              <div className="row justify-content-center">
                <button
                  className="btn btn-primary btn-block login-btn"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>

                  )}
                  <span>Continue</span>
                </button>
              </div>

              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />
            </Form>
            <hr className="lineLogin"></hr>
            <div className="center">
              <a className="col6 login_link">YOU CAN ALSO SIGN IN USING THE APP</a>
            </div>
            <div className="row justify-content-center">
              <button className="facebookButton"><img src={facebookLogo} className="imgFacebook"></img>Facebook(in progress)</button></div>
            <div className="center">
              <Link to={"/register"} className="col6 link">If you don't have an account</Link>
            </div>
          </div>

        </div>
       

        <div className="books">
          <img className="book2" src={books2}></img>
          <img className="book1" src={books1}></img>
        </div>


      </div>
    );
  }
}

export default withRouter(Login);