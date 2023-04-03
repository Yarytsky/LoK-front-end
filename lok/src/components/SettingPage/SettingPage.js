import React from 'react';
import PropTypes from 'prop-types';
import './SettingPage.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import check from "../../img/Checkbox.png"
import activecheck from "../../img/activecheck.png"
import women from "../../img/womenst.png"
import men from "../../img/menst.png"
import Form from 'react-bootstrap/Form';
import AuthService from "../../services/auth.service";



const API_URL = "https://localhost:7203/";




class SettingPage extends React.Component {

  constructor(props) {
    super(props)
    this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeGender = this.onChangeGenderMale.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.state = {
      phoneNumber: "",
      firstName: "",
      lastname: "",
      Country: "",
      Gender: "",
      email: "",


    }
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeCountry(e) {
    this.setState({
      Country: e.target.value
    });
  }
  onChangeGenderMale() {
    this.setState({
      Gender: "Male"
    });
  }
  onChangeGenderFemale() {
    this.setState({
      Gender: "Female"
    });
  }
  onChangeAnotherGender(e) {
    this.setState({
      Gender: e.target.value
    });
  }
  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangelastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangephoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }


   handleupdateUser() {
    AuthService.updateUser(
      this.state.email,
      this.state.phoneNumber,
      this.state.firstName,
      this.state.lastname,
      this.state.Gender,
      this.state.Country
    )
  }

  chooseWomen() {
    document.getElementById('womench').src = activecheck
    document.getElementById('mench').src = check
    document.getElementById('anotherch').src = check
    document.getElementById('sett-gend-input').style.display = "none"
    document.getElementById('gender-label-an').style.display = "block"
  }
  chooseMen() {
    document.getElementById('womench').src = check
    document.getElementById('mench').src = activecheck
    document.getElementById('anotherch').src = check
    document.getElementById('sett-gend-input').style.display = "none"
    document.getElementById('gender-label-an').style.display = "block"
  }
  chooseAnother() {
    document.getElementById('womench').src = check
    document.getElementById('mench').src = check
    document.getElementById('anotherch').src = activecheck
    document.getElementById('sett-gend-input').style.display = "block"
    document.getElementById('gender-label-an').style.display = "none"
  }




  render() {
    return (
      <>
        <Header />
        <div className='setting-bg'>
          <div className='setting-title'>My profile</div>
          <div className='center'>
            <hr className='admin-underline underline-setting'></hr>
          </div>
          <div className='center'>
            <div className='sett-container'>
              <div className='settings-inputs'>
                <div>
                  <label className='lable-setting'>First name</label>
                  <input className="set-input" value={this.state.firstName} onChange={this.onChangefirstName}></input>
                </div>
                <div>
                  <label className='lable-setting'>Gmail</label>
                  <input className="set-input" value={this.state.email} onChange={this.onChangeEmail}></input>
                </div>
                <div>
                  <label className='lable-setting'>Language</label>
                  <select className="set-input">
                    <option value="English">English</option>
                    <option value="Ukraine">Ukraine</option>
                  </select>
                </div>
                <div>
                  <label className='lable-setting'>Last name</label>
                  <input className="set-input" value={this.state.lastname} onChange={this.onChangelastname}></input>
                </div>
                <div>
                  <label className='lable-setting'>Phone</label>
                  <input className="set-input" value={this.state.phoneNumber} onChange={this.onChangephoneNumber}></input>
                </div>
                <div>
                  <label className='lable-setting' >Country</label>
                  <select className="set-input" onChange={this.onChangeCountry}>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Poland">Poland</option>
                  </select>
                </div>
              </div>
              <div className='gender-checkboxes'>
                <div className='choose-gender-ch' onClick={this.chooseWomen}><img id='womench' src={check}></img><label className='gender-label'>Female</label><img src={women}></img></div>
                <div className='choose-gender-ch' onClick={this.chooseMen}><img id='mench' src={check}></img><label className='gender-label'>Male</label><img src={men}></img></div>
                <div className='choose-gender-ch'><img id='anotherch' src={check}></img><label id='gender-label-an'>Another gender</label><input id='sett-gend-input' value={this.state.Gender} onChange={this.onChangeAnotherGender}></input></div>

              </div>
              <button className='sett-but' onClick={this.handleupdateUser}>Save</button>

            </div>
          </div>

        </div>





        <Footer />
      </>
    )
  }
}

SettingPage.propTypes = {};

SettingPage.defaultProps = {};

export default SettingPage;
