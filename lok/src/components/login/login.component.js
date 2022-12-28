import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services/auth.service";
import logo from "../../img/Bobrlogo.png"
import { withRouter } from '../../common/with-router';
import "./login.css"

import avatar from "../../img/icons/Vector.png"
import password from "../../img/icons/password.png"
import books1 from "../../img/img1.png"
import books2 from "../../img/img2.png"




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
      UserName: "",
      Password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      Username: e.target.value
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
      AuthService.login(this.state.UserName, this.state.Password).then(
        () => {
          // this.props.router.navigate("/profile");
          // window.location.reload();
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
      <div className="container-fluid background ">   
     <div className="justify-content-center logoRow">
        <img src={logo} className="logo"/>
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
                value={this.state.UserName}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="loginInput">
              <Input
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                value={this.state.Password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
           
          </div>
            <div className="row justify-content-end">
                <a className="login_link">forgot your password?</a>
                <div className="col-3"></div>
              </div>
            <div  className="form-group  row justify-content-center">
              <button
                className="btn btn-primary btn-block col-2"
               
              >
               
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
          <hr></hr>
          <div className="row justify-content-center">
            <a className="col6 login_link">YOU CAN ALSO SIGN IN USING THE APP</a>
          </div>
          <div className="row justify-content-center">
            <a className="col6 link">If you dont  have an account</a>
          </div>
        </div>

      </div>
      <div className="row justify-content-start">
          <img className="book1 float-start" src={books2}></img>
        </div>


        <div className="row justify-content-end">
          <img className="book2" src={books1}></img>
        </div>
          
              
            

      
    </div>
    );
  }
}

export default withRouter(Login);