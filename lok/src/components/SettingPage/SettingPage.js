import React from 'react';
import PropTypes from 'prop-types';
import './SettingPage.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import check from "../../img/Checkbox.png"
import activecheck from "../../img/activecheck.png"
import women from "../../img/womenst.png"
import men from "../../img/menst.png"







class SettingPage extends React.Component {

  chooseWomen(){
    document.getElementById('womench').src=activecheck
    document.getElementById('mench').src=check
    document.getElementById('anotherch').src=check
    document.getElementById('sett-gend-input').style.display="none"
    document.getElementById('gender-label-an').style.display="block"
  }
  chooseMen(){
    document.getElementById('womench').src=check
    document.getElementById('mench').src=activecheck
    document.getElementById('anotherch').src=check
    document.getElementById('sett-gend-input').style.display="none"
    document.getElementById('gender-label-an').style.display="block"
  } 
  chooseAnother(){
    document.getElementById('womench').src=check
    document.getElementById('mench').src=check
    document.getElementById('anotherch').src=activecheck
    document.getElementById('sett-gend-input').style.display="block"
    document.getElementById('gender-label-an').style.display="none"
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
                  <input className="set-input"></input>
                </div>
                <div>
                  <label className='lable-setting'>Gmail</label>
                  <input className="set-input"></input>
                </div>
                <div>
                  <label className='lable-setting'>Language</label>
                  <input className="set-input"></input>
                </div>
                <div>
                  <label className='lable-setting'>Last name</label>
                  <input className="set-input"></input>
                </div>
                <div>
                  <label className='lable-setting'>Phone</label>
                  <input className="set-input"></input>
                </div>
                <div>
                  <label className='lable-setting'>Country</label>
                  <input className="set-input"></input>
                </div>
              </div>
              <div className='gender-checkboxes'>
                    <div className='choose-gender-ch' onClick={this.chooseWomen}><img id='womench' src={check}></img><label className='gender-label'>women</label><img src={women}></img></div>
                    <div className='choose-gender-ch' onClick={this.chooseMen}><img id='mench' src={check}></img><label className='gender-label'>men</label><img src={men}></img></div>
                    <div className='choose-gender-ch' onClick={this.chooseAnother}><img id='anotherch' src={check}></img><label id='gender-label-an'>Another gender</label><input id='sett-gend-input'></input></div>

              </div>    
              <button className='sett-but'>Save</button>

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
