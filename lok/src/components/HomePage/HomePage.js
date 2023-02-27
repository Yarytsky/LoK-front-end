import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import Header from '../header/header';
import Footer from '../footer/footer';


class HomePage extends Component {

  howerCourse1() {
    document.getElementById('course2').style.display = "none"
    document.getElementById('course3').style.display = "none"
    document.getElementById('course4').style.display = "none"
  }
  leaveCourse1() {
    document.getElementById('course2').style.display = "block"
    document.getElementById('course3').style.display = "block"
    document.getElementById('course4').style.display = "block"
  }
  howerCourse2() {
    document.getElementById('course3').style.display = "none"
    document.getElementById('course4').style.display = "none"
  }
  leaveCourse2() {
    document.getElementById('course3').style.display = "block"
    document.getElementById('course4').style.display = "block"
  }
  howerCourse3() {
    document.getElementById('course4').style.display = "none"
  }
  leaveCourse3() {
    document.getElementById('course4').style.display = "block"
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className='container homeContainer'>
          <div className='cont-cours pad main-bg'>
            
            <div className='course-size course-choose'>
              <ul className="dropdown " id='course1' >
                <li><a href="#">Course 1</a>
                  <ul className='z'>
                    <li className='z'><a href="#">Term 1</a>
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
              <ul className="dropdown " id='course2' >
                <li><a href="#">Course 2</a>
                  <ul className='z'>
                    <li><a href="#">Term 1</a>
                      <ul className='z'>
                        <li><a href="">Subject 1</a></li>
                        <li><a href="">Subject 2</a></li>

                      </ul>
                    </li>
                    <li><a href="#">Term 2</a>
                      <ul className='z'>
                        <li><a href="">Subject 1</a></li>
                        <li><a href="">Subject 2</a></li>

                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="dropdown " id='course3' >
                <li><a href="#">Course 3</a>
                  <ul className='z'>
                    <li><a href="#">Term 1</a>
                      <ul className='z'>
                        <li><a href="">Subject 1</a></li>
                        <li><a href="">Subject 2</a></li>

                      </ul>
                    </li>
                    <li><a href="#">Term 2</a>
                      <ul className='z'>
                        <li><a href="">Subject 1</a></li>
                        <li><a href="">Subject 2</a></li>

                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="dropdown " id='course4' >
                <li><a href="#">Course 4</a>
                  <ul className='z'>
                    <li><a href="#">Term 1</a>
                      <ul className='z'>
                        <li><a href="">Subject 1</a></li>
                        <li><a href="">Subject 2</a></li>

                      </ul>
                    </li>
                    <li><a href="#">Term 2</a>
                      <ul className='z'>
                        <li><a href="">Subject 1</a></li>
                        <li><a href="">Subject 2</a></li>

                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='cor'>

            </div>
          </div>

          <div className='row text-center justify-content-center '>
            <div className='proposal-title'>Proposal from partners</div>
          </div>
          <div className='text-center pad2 proposals-container'>
            <div className='col proposals'>Proposal 1</div>
            <div className='col proposals'>Proposal 2</div>
            <div className='col proposals'>Proposal 3</div>
            <div className='col proposals'>Proposal 4</div>

          </div>



        </div>
        <Footer></Footer>
      </div>
    )
  }
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
