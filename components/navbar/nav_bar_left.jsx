import React from 'react';
import * as pageText from './../../regions/regions_root.js';
class NavBarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.goConsumers = this.goConsumers.bind(this);
    this.goBusiness = this.goBusiness.bind(this);
    this.goAbout = this.goAbout.bind(this);
  }

  goConsumers() {
    console.log("consumers");
  }

  goBusiness() {
    console.log("business");
  }

  goAbout() {
    console.log("about");
  }


  render() {
    let consumerClass = "nav-bar-button";
    let businessClass = "nav-bar-button";
    let aboutClass = "nav-bar-button";

    //logic to render selected tab differently
    switch (this.props.currentTab) {
      case "consumer":
        consumerClass = "nav-bar-button selected";
        break;
      case "business":
        businessClass = "nav-bar-button selected";
        break;
      case "about":
        aboutClass = "nav-bar-button selected";
        break;
      default:
        break;
    }
    return(
      <section className="nav-bar-left">
          <div className="nav-bar-left-side">
            <button className={consumerClass} onClick={this.goConsumers}>
              {pageText[this.props.language].navbar.A}
            </button>
            <button className={businessClass} onClick={this.goBusiness}>
              {pageText[this.props.language].navbar.B}
            </button>
            <button className={aboutClass} onClick={this.goAbout}>
              {pageText[this.props.language].navbar.C}
            </button>

          </div>
      </section>
    );
  }

}//end component

export default NavBarLeft;
