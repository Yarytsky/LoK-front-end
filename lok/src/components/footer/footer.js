import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css';
import facebook from '../../img/facebook.png'
import instagram from '../../img/Instagram.png'
import youtube from '../../img/youtube.png'



class Footer extends Component {


  render() {
    return (
      <div className="footer-bg text-center foote11 z-1">
        <div className="foote11">
          <div className=" social  footer-font-color">We are on social networks:</div>
        </div>
        <div className=" footer-margin">
            <a className='social-media-icons'><img src={facebook}></img></a>
            <a className='social-media-icons'><img src={instagram}></img></a>
            <a className='social-media-icons'><img src={youtube}></img></a>
        </div>
        <div className=' footer-margin contacts'>
          <div className='footer-font-color'>Сontacts:</div>
          <div className='contact-phone'>+38096536760</div>
        </div>
        <div className=' footer-margin contacts'>
          <div className='footer-font-color footer-creat'>Year of creation:</div>
          <div className='year'>2022</div>
        </div>
    </div>

    )}
}


export default Footer;
