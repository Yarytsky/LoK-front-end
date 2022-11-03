import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "./register.css"
import AuthService from "../../services/auth.service";
import logo from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/Bobrlogo.png"
import avatar from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/icons/Vector.png"
import counrty from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/icons/country.png"
import gender from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/icons/gender.png"
import phoneicon from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/icons/phone.png"
import password from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/icons/password.png"
import emailicon from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/icons/email.png"
import books1 from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/img1.png"
import books2 from "/Users/roman/Projects/LOK/LoK-front-end/lok/src/components/register/img/img2.png"



const phone = value => {
  if (!value) {
  document.getElementById("PhoneValidator").style.borderColor="#F35B04";
  document.getElementById("basic-addon2").style.display="block";

    
  }
  else {
    document.getElementById("PhoneValidator").style.borderColor="black";
    document.getElementById("basic-addon2").style.display="none";

  }
};

const email = value => {
  if (!isEmail(value)) {
    document.getElementById("EmailValidator").style.borderColor="#F35B04";
    document.getElementById("basic-addon3").style.display="block";  
  
  }
  else {
    document.getElementById("EmailValidator").style.borderColor="black";
    document.getElementById("basic-addon3").style.display="none";

  }
};

const fusername = value => {
  if (value.length < 3 || value.length > 20) {
    document.getElementById("FirstName").style.borderColor="#F35B04";
    document.getElementById("basic-addon1").style.display="block";
  }
  else {
    document.getElementById("FirstName").style.borderColor="black";
    document.getElementById("basic-addon1").style.display="none";

  }
};
const lastname = value => {
  if (value.length < 3 || value.length > 20) {
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
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
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
      UserName: "",
      Email: "",
      Password: "",
      PhoneNumber: "",
      FirstName: "",
      Lastname: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      UserName: e.target.value
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
        this.state.Lastname
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
        <div className="row justify-content-center">

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
            <div >
            <div className="row  justify-content-center ">
              <div className="col-12 col-md-6 ">  
                <div className="input-group ">
                  <img className="icons"  src={avatar}/>
                  <div id="FirstnameValidator">
                  <Input
                    type="text"
                    className="form-control"
                    id="FirstName"
                    placeholder="Name"
                    value={this.state.FirstName}
                    onChange={this.onChangefirstName}
                    validations={[fusername]}
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                  </div>
                    <span class="input-group-text" id="basic-addon1">Invalid</span>
                </div>

                <div className="input-group">
                <img className="icons"  src={counrty}/>
                  <select
                    list="Country"
                    type="text"
                    className="form-control dropdown"
                    name="username"
                    placeholder="Country"
                    >   
                  <option>Ukraine</option>
                  <option>Poland</option>
                  </select>            
                </div>


                <div className="input-group ">
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
                  <span class="input-group-text" id="basic-addon2">Invalid</span>
                </div>

                <div className="input-group">
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
                  <span class="input-group-text" id="basic-addon3">Invalid</span>
                </div>
              </div>  
              <div className="col-12 col-md-6">
                <div className="input-group">
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
                  <span class="input-group-text" id="basic-addon4">Invalid</span>                  
                </div>

                <div className="input-group">
                <img className="icons"  src={gender}/>

                <div id="FirstnameValidator">
                  <select
                    type="text"
                    className="form-control dropdown"
                    name="gender"
                    placeholder="Gender"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Batle Helicopter MI-26</option>
                  </select>
                  </div>
                </div>
                <div className="input-group">
                <img className="icons"  src={password}/>

                <div id="FirstnameValidator">
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
                </div>
                <div className="input-group">
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
              <img className="book1 float-start"  src={books2}></img>
         
              
             
              <img className="book2 float-end" src={books1}></img>
            
    </div>
    );
  }
}