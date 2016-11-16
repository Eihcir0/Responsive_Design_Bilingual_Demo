import React from 'react';
import * as pageText from './../../regions/regions_root.js';

class Footer extends React.Component {
  constructor() {
    super();
    this.goCookies = this.goCookies.bind(this);
    this.goPrivacyPolicy = this.goPrivacyPolicy.bind(this);
    this.goLegal = this.goLegal.bind(this);
    this.goConsumers = this.goConsumers.bind(this);
    this.goBusiness = this.goBusiness.bind(this);
    this.goFeatures = this.goFeatures.bind(this);
    this.goAbout=this.goAbout.bind(this);
    this.goJobs=this.goJobs.bind(this);
  }

  goCookies() {
    console.log("Cookies");
  }

  goPrivacyPolicy() {
    console.log("Privacy policy");
  }

  goLegal() {
    console.log(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
  }

  goBusiness() {
    console.log("Business");
  }
  goConsumers() {
    console.log("Consumers");
  }
  goAbout() {
    console.log("About");
  }
  goFeatures() {
    console.log("Features");
  }

  goJobs() {
    console.log("Sorry, the front-end developer role is no longer available. ;) ");
  }
  render() {
    return(
      <section className="footer-section">

        <div className="footer-top-bar">
          <div className="footer-top-bar-left">
            {pageText[this.props.language].footer.copyright}
          </div>
          <div className="footer-top-bar-right">
            <a onClick={this.goCookies}>
              {pageText[this.props.language].footer.cookies}
            </a>
            <a onClick={this.goPrivacyPolicy}>
              {pageText[this.props.language].footer.privacyPolicy}
            </a>
            <a onClick={this.goLegal}>
              {pageText[this.props.language].footer.legal}
            </a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-bottom-bar-left">
            <a onClick={this.goConsumers}>
              {pageText[this.props.language].footer.forConsumers}
            </a>
            <a onClick={this.goBusiness}>
              {pageText[this.props.language].footer.forBusinesses}
            </a>
            <a onClick={this.goFeatures}>
              {pageText[this.props.language].footer.features}
            </a>
            <a onClick={this.goAbout}>
              {pageText[this.props.language].footer.about}
            </a>
            <a onClick={this.goJobs}>
              {pageText[this.props.language].footer.jobs}
            </a>
          </div>
          <div className="footer-bottom-bar-right">
            <img  className={"footer-icon"}
              src="./assets/images/visa_logo_grey@2x.png"/>

            <img  className={"footer-icon"}
              src="./assets/images/mastercard_logo_grey@2x.png"/>

          </div>
        </div>

      </section>
    );
  }

}//end component

export default Footer;
