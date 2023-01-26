import React from 'react';
import PropTypes from 'prop-types';
import './ProposalsPage.css';
import { Component } from 'react';

import Proposal1 from "../../img/proposals/prop1.png"
import Proposal2 from "../../img/proposals/prop2.png"
import Proposal3 from "../../img/proposals/prop3.png"
import sigmalogo from "../../img/proposals/sigmalogo.png"
import softservelogo from "../../img/proposals/softserve.png"
import ubisoftlogo from "../../img/proposals/ubisoft.png"
import Footer from '../footer/footer';
import Header from '../header/header';

class ProposalsPage extends Component {


  render() {
    return (
      <div>
        <Header></Header>
        <div className="container-fluid background ">
          <div className='text-center proposals-title'>Proposals from partners</div>
          <hr className='col-4 underline-proposals'></hr>
          <div className='row justify-content-center'>


            <div className="card proposal-card col-12 col-md-3 col-xxl-2">
              <img src={Proposal1} className="card-img-top" alt="..." />
              <div className="card-body">
                <img src={sigmalogo} className="mx-auto d-block p-logo" alt="..." />
                <p className="card-text">
                  Your idea turned into a live product adjusted to the market needs & generating revenue.

                  We use a lean product development approach shortening your product time-to-market.
                </p>
                <div className="row justify-content-center">
                  <a href="#" className="btn col-6 btn-primary proposal-btn">More</a>
                </div>
              </div>
            </div>

            <div className="card proposal-card col-12 col-md-3 col-xxl-2">
              <img src={Proposal2} className="card-img-top" alt="..." />
              <div className="card-body">
                <img src={softservelogo} className="mx-auto d-block p-logo" alt="..." />
                <p className="card-text">
                  Reinforce your product with cutting-edge technologies to unlock its potential.

                  Our R&D experts regularly generate innovative concepts for customers’ business.
                </p>
                <div className="row justify-content-center">
                  <a href="#" className="btn col-6 btn-primary proposal-btn">More</a>
                </div>
              </div>
            </div>

            <div className="card proposal-card col-12 col-md-3 col-xxl-2">
              <img src={Proposal3} className="card-img-top" alt="..." />
              <div className="card-body">
                <img src={ubisoftlogo} className="mx-auto d-block p-logo" alt="..." />
                <p className="card-text">

                  Involve niche professionals when needed within an established collaboration setup.

                  We complement our services with Product Strategy, UX, CTO, and InfoSec consulting.
                </p>
                <div className="row justify-content-center">
                  <a href="#" className="btn col-6 btn-primary proposal-btn">More</a>
                </div>
              </div>
            </div>

          </div>

        </div>
        <Footer></Footer>
      </div>
    )

  }
}




export default ProposalsPage;
