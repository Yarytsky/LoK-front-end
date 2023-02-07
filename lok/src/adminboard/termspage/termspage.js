import React from 'react';
import Footer from '../../components/footer/footer';
import './termspage.css';
import Header from '../../components/header/header';

import profilePic from "../../img/profilePic.jpg";


class Termspage extends React.Component {


  render() {
    return (
      <div>
        <Header />

        <div className='center'>
          <div className='adminboard-container'>
            <div className='center margin-adm'>
              <div className='adminboard-title'>ADMIN CENTER</div>
            </div>
            <hr className='admin-underline'></hr>
            <div className='term-container'>
              <div className='terms-sidebar'>
                <div className='center'>
                  <div className='titleterms'>Terms</div>
                </div>
                <hr className='admin-underline'></hr>
                <div className='course-block'>
                  <div className='course-title'>1 course</div>
                  <div className='term-item'><p>Term 1</p></div>
                  <div className='term-item'><p>Term 2</p></div>
                </div>
                <div className='course-block'>
                  <div className='course-title'>2 course</div>
                  <div className='term-item'><p>Term 3</p></div>
                  <div className='term-item'><p>Term 4</p></div>
                </div>
                <div className='course-block'>
                  <div className='course-title'>3 course</div>
                  <div className='term-item'><p>Term 5</p></div>
                  <div className='term-item'><p>Term 6</p></div>
                </div>
                <div className='course-block'>
                  <div className='course-title'>4 course</div>
                  <div className='term-item'><p>Term 7</p></div>
                  <div className='term-item'><p>Term 8</p></div>
                </div>

              </div>
              <div className='students-sidebar'>
                <div className='titlestudents'>Students</div>
                <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>
                <div className='studentbox'><img src={profilePic} className="pic"></img><p>Meshkova Inna</p></div>

              </div>


            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

Termspage.propTypes = {};

Termspage.defaultProps = {};

export default Termspage;
