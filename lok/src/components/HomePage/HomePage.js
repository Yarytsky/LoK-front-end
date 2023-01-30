import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import Header from '../header/header';
import Footer from '../footer/footer';

class HomePage extends Component{

  howerCourse1(){
    document.getElementById('course2').style.display="none"
    document.getElementById('course3').style.display="none"
    document.getElementById('course4').style.display="none"
  }
  leaveCourse1(){
    document.getElementById('course2').style.display="block"
    document.getElementById('course3').style.display="block"
    document.getElementById('course4').style.display="block"
  }
  howerCourse2(){
    document.getElementById('course3').style.display="none"
    document.getElementById('course4').style.display="none"
  }
  leaveCourse2(){
    document.getElementById('course3').style.display="block"
    document.getElementById('course4').style.display="block"
  }
  howerCourse3(){
    document.getElementById('course4').style.display="none"
  }
  leaveCourse3(){
    document.getElementById('course4').style.display="block"
  }

  render(){
    return(
      <div>
      <Header></Header>
      <div className='container homeContainer'>
        <div className='row  pad justify-content-center main-bg'>
          <div className='col-4 course-size'>
          <ul className="dropdown " id='course1' onMouseEnter={this.howerCourse1} onMouseLeave={this.leaveCourse1}>
            <li><a href="#">Course 1</a>
              <ul>
                  <li><a href="#">Term 1</a>
                      <ul>
                          <li><a href="">Subject 1</a></li>
                          <li><a href="">Subject 2</a></li>
                          
                      </ul>
                  </li>
                  <li><a href="#">Term 2</a>
                      <ul>
                          <li><a href="">Subject 1</a></li>
                          <li><a href="">Subject 2</a></li>
                          
                      </ul>
                  </li>
              </ul>
            </li>
          </ul>
          <ul className="dropdown " id='course2' onMouseEnter={this.howerCourse2} onMouseLeave={this.leaveCourse2}>
            <li><a href="#">Course 2</a>
              <ul>
                  <li><a href="#">Term 1</a>
                      <ul>
                          <li><a href="">Subject 1</a></li>
                          <li><a href="">Subject 2</a></li>
                          
                      </ul>
                  </li>
                  <li><a href="#">Term 2</a>
                      <ul>
                          <li><a href="">Subject 1</a></li>
                          <li><a href="">Subject 2</a></li>
                          
                      </ul>
                  </li>
              </ul>
            </li>
          </ul>
          <ul className="dropdown " id='course3' onMouseEnter={this.howerCourse3} onMouseLeave={this.leaveCourse3}>
            <li><a href="#">Course 3</a>
              <ul>
                  <li><a href="#">Term 1</a>
                      <ul>
                          <li><a href="">Subject 1</a></li>
                          <li><a href="">Subject 2</a></li>
                          
                      </ul>
                  </li>
                  <li><a href="#">Term 2</a>
                      <ul>
                          <li><a href="">Subject 1</a></li>
                          <li><a href="">Subject 2</a></li>
                          
                      </ul>
                  </li>
              </ul>
            </li>
          </ul>
          <ul className="dropdown " id='course4' >
            <li><a href="#">Course 4</a>
              <ul>
                  <li><a href="#">Term 1</a>
                      <ul>
                          <li><a href="">Subject 1</a></li>
                          <li><a href="">Subject 2</a></li>
                          
                      </ul>
                  </li>
                  <li><a href="#">Term 2</a>
                      <ul>
                          <li><a href="">Subject 1</a></li>
                          <li><a href="">Subject 2</a></li>
                          
                      </ul>
                  </li>
              </ul>
            </li>
          </ul>
          </div>

        </div>

        <div className='row text-center justify-content-center '>
          <div className='proposal-title'>Proposal from partners</div>
        </div>
        <div className='row text-center justify-content-center pad2'>
            <div className='col proposals'>Proposal 1</div>
            <div className='col proposals'>Proposal 2</div>
            <div className='col proposals'>Proposal 3</div>
            <div className='col proposals'>Proposal 4</div>

        </div>

        

      </div>
      <Footer></Footer>
</div>
    )}
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
