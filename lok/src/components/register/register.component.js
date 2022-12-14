import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
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



const phone = value => {
  if (!value||!value.match(/^[0-9,+]+$/)) {
  document.getElementById("PhoneValidator").style.borderColor="#F35B04";
  document.getElementById("basic-addon2").style.display="block";

    
  }
  else {
    document.getElementById("PhoneValidator").style.borderColor="black";
    document.getElementById("basic-addon2").style.display="none";

  }
};

const email = value => {
  if (!value) {
    document.getElementById("EmailValidator").style.borderColor="#F35B04";
    document.getElementById("basic-addon3").style.display="block";  
  
  }
  else {
    document.getElementById("EmailValidator").style.borderColor="black";
    document.getElementById("basic-addon3").style.display="none";

  }
};

const fusername = value => {
  if (!value||value.length < 3 || value.length > 20||!value.match(/^[a-zA-Z]+$/)) {
    document.getElementById("FirstName").style.borderColor="#F35B04";
    document.getElementById("basic-addon1").style.display="block";
  }
  else {
    document.getElementById("FirstName").style.borderColor="black";
    document.getElementById("basic-addon1").style.display="none";

  }
};
const lastname = value => {
  if (!value||value.length < 3 || value.length > 20||!value.match(/^[a-zA-Z]+$/)) {
    document.getElementById("LastnameValidator").style.borderColor="#F35B04";
    document.getElementById("basic-addon4").style.display="block";
  }
  else {
    document.getElementById("LastnameValidator").style.borderColor="black";
    document.getElementById("basic-addon4").style.display="none";

  }
};
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
      document.getElementById("PasswordValidator").style.borderColor="#F35B04";
      document.getElementById("basic-addon5").style.display="block";
    
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangephoneNumber= this.onChangephoneNumber.bind(this);
    this.onChangefirstName= this.onChangefirstName.bind(this);
    this.onChangelastname= this.onChangelastname.bind(this);


    this.state = {
      // UserName: "Ivan",
      Email: "",
      Password: "",
      PhoneNumber: "",
      FirstName: "",
      Lastname: "",
      Country:"",
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
  }  onChangelastname(e) {
    this.setState({
      Lastname: e.target.value
    });
  }  onChangephoneNumber(e) {
    this.setState({
      PhoneNumber: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
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
        this.state.UserName,
        this.state.Email,
        this.state.Password,
        this.state.PhoneNumber,
        this.state.FirstName,
        this.state.Lastname,
        this.state.Country,
        this.state.Gender
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

      <div className="container-fluid background ">
        <div className="justify-content-center logoRow">

        <img src={logo} className="logo"/>
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
            <div className="row  justify-content-center ">
              <div className="col-12 col-md-6 ">
                <div className="row regLeft justify-content-center">
                  <div className="input-group col-8">
                    <img className="icons" src={avatar} />
                    <div id="FirstnameValidator col-12">
                      <Input
                      type="text"
                      className="form-control"
                      id="FirstName"
                      placeholder="Name"
                      value={this.state.FirstName}
                      o nChange={this.onChangefirstName}
                      validations={[fusername]}
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                      />
                  </div>
                    <span className="input-group-text" id="basic-addon1">Invalid</span>
                </div>

                <div className="input-group col-8">
                <img className="icons"  src={counrty}/>
                  <select
                    list="Country"
                    type="text"
                    className="form-control dropdown-reg"
                    name="username"
                    placeholder="Country"
                    value={this.state.Country}
                    onChange={this.onChangeCountry}
                    >   
                  <option>Ukraine</option>
                  <option>Poland</option>
                  </select>            
                </div>


                <div className="input-group col-8">
                <img className="icons"  src={phoneicon}/>

                <div id="PhoneValidator">
                  <Input
                    type="text"
                    className="form-control"
                    name="Phone"
                    placeholder="Phone"
                    value={this.state.PhoneNumber}
                    onChange={this.onChangephoneNumber}
                    validations={[phone]}
                    aria-label="Phone"
                    aria-describedby="basic-addon2"
                  />
                  </div>
                  <span className="input-group-text" id="basic-addon2">Invalid</span>
                </div>

                <div className="input-group col-8">
                <img className="icons"  src={emailicon}/>

                <div id="EmailValidator">
                  <Input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={this.state.Email}
                    onChange={this.onChangeEmail}
                    validations={[email]}
                  />
                  </div>
                  <span className="input-group-text" id="basic-addon3">Invalid</span>
                </div>
              </div>
              </div>  
              <div className="col-12 col-md-6">
                <div className="row justify-content-center">
                <div className="input-group col-8">
                  <img className="icons"  src={avatar}/>

                <div id="LastnameValidator">
                  <Input
                    type="text"
                    className="form-control"
                    name="Lastname"
                    placeholder="Lastname"
                    value={this.state.Lastname}
                    onChange={this.onChangelastname}
                    validations={[lastname]}
                  />
                  </div>
                  <span className="input-group-text" id="basic-addon4">Invalid</span>                  
                </div>

                <div className="input-group  col-8">
                <img className="icons"  src={gender}/>

                <div >
                  <select
                    type="text"
                    className="form-control dropdown-reg"
                    name="gender"
                    placeholder="Gender"
                    value={this.state.Gender}
                    onChange={this.onChangeGender}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  </div>
                </div>
                <div className="input-group  col-8">
                <img className="icons"  src={password}/>

                <div id="PasswordValidator">
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={this.state.Password}
                    onChange={this.onChangePassword}
                    validations={[vpassword]}
                  />
                  </div>
                  <span className="input-group-text" id="basic-addon5">Invalid</span>
                </div>
                <div className="input-group  col-8">
                <img className="icons"  src={password}/>

                <div id="FirstnameValidator">
                  <Input
                    type="password"
                    className="form-control"
                    name="Confirm Password"
                    placeholder="Confirm Password"
                    validations={[]}
                  />
                  </div>
                </div>

               
              </div>
              </div>
            </div>
            <div className="row justify-content-center">
            <div className="form-group col-3 ">
                  <button className="btn btn-primary btn-block">Sign Up</button>
            </div>
            </div>
           <hr></hr>
           <div className="row text-center"><a className="col-12 link">If you have account</a></div>
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
        <img className="book1" src={books2}></img>
        <img className="book2" src={books1}></img>
    </div>
    
    );
  }
}