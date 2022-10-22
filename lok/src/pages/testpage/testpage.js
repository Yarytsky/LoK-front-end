import React from 'react';
import PropTypes from 'prop-types';
import './testpage.css';
import axios from 'axios';
import Logintest from '../../components/logintest/logintest';


class Testpage extends React.Component {

  render(){
    <div className="testpage">
    Testpage Component
    <Logintest></Logintest>
  </div>
  }
 
}

export default Testpage;

