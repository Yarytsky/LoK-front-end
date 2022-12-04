import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css';
import facebook from '../../img/facebook.png'
import instagram from '../../img/Instagram.png'
import youtube from '../../img/youtube.png'



class Footer extends Component {


  render() {
    return (
      <div className="container footer-bg text-center ">
        <div className="row ">
          <div className="col-12 social  align-self-center footer-font-color">We are on social networks:</div>
        </div>
        <div className="row justify-content-center footer-margin">
            <a className='social-media-icons'><img src={facebook}></img></a>
            <a className='social-media-icons'><img src={instagram}></img></a>
            <a className='social-media-icons'><img src={youtube}></img></a>
        </div>
        <div className='row justify-content-center footer-margin'>
          <div className='footer-font-color'>Сontacts:</div>
          <div className='contact-phone align-self-center'>+38096536760</div>
        </div>
        <div className='row justify-content-center footer-margin'>
          <div className='footer-font-color footer-creat'>Year of creation:</div>
          <div className='year'>2022</div>
        </div>
    </div>

    )}
}


export default Footer;
