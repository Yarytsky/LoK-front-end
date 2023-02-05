import React from 'react';
import Footer from '../../components/footer/footer';
import './termspage.css';
import Header from '../../components/header/header';
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
                <div>Terms</div>
                </div>
                  <hr className='admin-underline'></hr>
              <div className='course-block'>
              <div className='course-title'>1 course</div>
              <div className='term-item'>Term 1</div>
              </div>
               
                
              </div>
              <div className='students-sidebar'>
                  <div>Students</div>
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
