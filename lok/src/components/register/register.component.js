import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "./register.css"
import AuthService from "../../services/auth.service";
import logo from "../../img/Bobrlogo.png"
import avatar from "../../img/icons/Vector.png"
import counrty from "../../img/icons/country.png"
import gender from "../../img/icons/gender.png"
import phoneicon from "../../img/icons/phone.png"
import password from "../../img/icons/password.png"
import emailicon from "../../img/icons/email.png"
import books1 from "../../img/img1.png"
import books2 from "../../img/img2.png"
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.invalidCheckConfirmPassword = this.invalidCheckConfirmPassword.bind(this);

    this.state = {
      Email: "",
      Password: "",
      PhoneNumber: "",
      FirstName: "",
      Lastname: "",
      Country: "",
      Gender: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      UserName: e.target.value
    });
  }
  onChangeCountry(e) {
    this.setState({
      Country: e.target.value
    });
  }
  onChangeGender(e) {
    this.setState({
      Gender: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  }
  onChangefirstName(e) {
    this.setState({
      FirstName: e.target.value
    });
  }
  onChangelastname(e) {
    this.setState({
      Lastname: e.target.value
    });
  }
  onChangephoneNumber(e) {
    this.setState({
      PhoneNumber: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }

  invalidCheckName(e) {
    if (!e.target.value || e.target.value.length < 3 || e.target.value.length > 20 || !(e.target.value.match(/^[a-zA-Z]+$/) || e.target.value.match(/^[а-яА-ЯіІ]+$/))) {
      document.getElementById("FirstName").style.borderColor = "#F35B04";
      document.getElementById("basic-addon1").style.display = "block";
    }
    else {
      document.getElementById("FirstName").style.borderColor = "#ced4da";
      document.getElementById("basic-addon1").style.display = "none";

    }
  }

  invalidCheckLastName(e) {
    if (!e.target.value || e.target.value.length < 3 || e.target.value.length > 20 || !(e.target.value.match(/^[a-zA-Z]+$/) || e.target.value.match(/^[а-яА-ЯіІ]+$/))) {
      document.getElementById("lastname").style.borderColor = "#F35B04";
      document.getElementById("basic-addon4").style.display = "block";
    }
    else {
      document.getElementById("lastname").style.borderColor = "#ced4da";
      document.getElementById("basic-addon4").style.display = "none";

    }
  }

  invalidCheckEmail(e) {
    if (!e.target.value || !e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      document.getElementById("email").style.borderColor = "#F35B04";
      document.getElementById("basic-addon3").style.display = "block";

    }
    else {
      document.getElementById("email").style.borderColor = "#ced4da";
      document.getElementById("basic-addon3").style.display = "none";

    }
  }

  invalidCheckPhone(e) {
    if (!e.target.value || !e.target.value.match(/^[0-9,+]+$/)) {
      document.getElementById("phone").style.borderColor = "#F35B04";
      document.getElementById("basic-addon2").style.display = "block";
    }
    else {
      document.getElementById("phone").style.borderColor = "#ced4da";
      document.getElementById("basic-addon2").style.display = "none";
    }
  }

  invalidCheckPassword(e) {
    if (!e.target.value || !(e.target.value.match(/[A-Z]+/) && e.target.value.match(/[a-z]+/) && e.target.value.match(/[0-9]+/)) || e.target.value.length < 6 || e.target.value.length > 40) {
      document.getElementById("password").style.borderColor = "#F35B04";
      document.getElementById("basic-addon5").style.display = "block";
    }
    else {
      document.getElementById("password").style.borderColor = "#ced4da";
      document.getElementById("basic-addon5").style.display = "none";
    }
  }

  invalidCheckConfirmPassword(e) {
    if (e.target.value !== this.state.Password) {
      document.getElementById("confPassword").style.borderColor = "#F35B04";
      document.getElementById("basic-addon6").style.display = "block";
    }
    else {
      document.getElementById("confPassword").style.borderColor = "#ced4da";
      document.getElementById("basic-addon6").style.display = "none";
    }
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.Email,
        this.state.Password,
        this.state.PhoneNumber,
        this.state.FirstName,
        this.state.Lastname,
        this.state.Gender,
        this.state.Country

      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (

      <div className="background ">
        <div className="justify-content-center logoRow">

          <img src={logo} className="logo" />
        </div>
        <div className="row">
          <div className="card form-bg col-md-10 col-10 card-container">
            <div className="row text-center justify-content-center title">Create your account</div>

            <Form
              onSubmit={this.handleRegister}
              ref={c => {
                this.form = c;
              }}
            >
              {!this.state.successful && (
                <div id="formBlock">
                  <div className="reg-form">
                    <div className="col-12 col-md-6 col-sm-6">
                      <div className="regLeft">
                        <div className="input-group col-12" >
                          <img className="icons" src={avatar} />
                          <div id="FirstnameValidator" onBlur={this.invalidCheckName}>
                            <Input
                              type="text"
                              className="form-control"
                              id="FirstName"
                              placeholder="Name"
                              value={this.state.FirstName}
                              onChange={this.onChangefirstName}
                              aria-label="Name"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <span className="input-group-text" id="basic-addon1">Invalid</span>
                        </div>

                        <div className="input-group col-12">
                          <img className="icons" src={counrty} />
                          <Select
                            list="Country"
                            type="text"
                            className="form-control dropdown-reg"
                            name="username"
                            placeholder="Country"
                            value={this.state.Country}
                            onChange={this.onChangeCountry}
                          >
                            <option value="Ukraine">Ukraine</option>
                            <option value="Poland">Poland</option>
                          </Select>
                        </div>


                        <div className="input-group col-12">
                          <img className="icons" src={phoneicon} />

                          <div id="PhoneValidator" onBlur={this.invalidCheckPhone}>
                            <Input
                              type="text"
                              className="form-control"
                              name="Phone"
                              placeholder="Phone"
                              value={this.state.PhoneNumber}
                              onChange={this.onChangephoneNumber}
                              aria-label="Phone"
                              aria-describedby="basic-addon2"
                              id="phone"
                            />
                          </div>
                          <span className="input-group-text" id="basic-addon2">Invalid</span>
                        </div>

                        <div className="input-group col-12">
                          <img className="icons" src={emailicon} />

                          <div id="EmailValidator" onBlur={this.invalidCheckEmail}>
                            <Input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              value={this.state.Email}
                              onChange={this.onChangeEmail}
                              id="email"
                            />
                          </div>
                          <span className="input-group-text" id="basic-addon3">Invalid</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6">
                      <div className="regRight">
                        <div className="input-group  col-12">
                          <img className="icons" src={avatar} />

                          <div id="LastnameValidator" onBlur={this.invalidCheckLastName}>
                            <Input
                              type="text"
                              className="form-control"
                              name="Lastname"
                              placeholder="Lastname"
                              value={this.state.Lastname}
                              onChange={this.onChangelastname}
                              id="lastname"
                            />
                          </div>
                          <span className="input-group-text" id="basic-addon4">Invalid</span>
                        </div>

                        <div className="input-group  col-12">
                          <img className="icons" src={gender} />

                          <Select
                            type="text"
                            className="form-control dropdown-reg"
                            name="gender"
                            placeholder="Gender"
                            value={this.state.Gender}
                            onChange={this.onChangeGender}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </Select>
                        </div>
                        <div className="input-group  col-12">
                          <img className="icons" src={password} />

                          <div id="PasswordValidator" onBlur={this.invalidCheckPassword}>
                            <Input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              value={this.state.Password}
                              onChange={this.onChangePassword}
                              id="password"
                            />
                          </div>
                          <span className="input-group-text" id="basic-addon5">Invalid</span>
                        </div>
                        <div className="input-group  col-12">
                          <img className="icons" src={password} />

                          <div id="FirstnameValidator" onBlur={this.invalidCheckConfirmPassword}>
                            <Input
                              type="password"
                              className="form-control"
                              name="Confirm Password"
                              placeholder="Confirm Password"
                              validations={[]}
                              id="confPassword"
                            />
                          </div>
                          <span className="input-group-text" id="basic-addon6">Invalid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="signup-btn">
                      <button className="signup-btn1">Sign Up</button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row text-center"><Link to={"/"} className="col-12 link">If you have an account</Link></div>
                </div>
              )}

              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
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