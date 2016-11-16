import React from 'react';
import * as pageText from './../../regions/regions_root.js';

class BusinessSection1 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <section className="business-section-1">
        <div className="business-section-1-top">
          <div className="business-section-1-top-container">
            <span className="business-section-1-top-title">
              {pageText[this.props.language].business.section1.top.title}
            </span>
            <span className="business-section-1-top-text">
              {pageText[this.props.language].business.section1.top.A}
            </span>
          </div>
          <img  className = "purple-line-graph"
                src="./assets/images/purple_tops.svg"/>
        </div>
      </section>
    );
  }

}//end component end component again here

export default BusinessSection1;
