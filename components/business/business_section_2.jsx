import React from 'react';
import * as pageText from './../../regions/regions_root.js';

class BusinessSection2 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <section className="business-section-2">
        <div className="business-section-2-middle-box">
          <p className="business-section-2-counter">
            {pageText[this.props.language].business.section2.middle.stat_A}
          </p>
          <p className="business-section-2-middle-text">
            {pageText[this.props.language].business.section2.middle.A}
          </p>
        </div>
          <div className="business-section-2-bottom">

            <div className="pie-chart-container">
              <img  className="pie-chart-img"
                    src="./assets/images/piechart-1.png"/>
                  <p className="pie-chart-stat">
                {pageText[this.props.language].business.section2.bottom.stat_A}
              </p>
              <p className="pie-chart-text">
                {pageText[this.props.language].business.section2.bottom.A}
              </p>
            </div>
            <div className="pie-chart-container">
              <img  className="pie-chart-img"
                    src="./assets/images/piechart-2.png"/>
              <p className="pie-chart-stat">
                {pageText[this.props.language].business.section2.bottom.stat_B}
              </p>
              <p className="pie-chart-text">
                {pageText[this.props.language].business.section2.bottom.B}
              </p>
            </div>
            <div className="pie-chart-container">
              <img  className="pie-chart-img"
                src="./assets/images/piechart-3.png"/>
              <p className="pie-chart-stat">
                {pageText[this.props.language].business.section2.bottom.stat_C}
              </p>
              <p className="pie-chart-text">
                {pageText[this.props.language].business.section2.bottom.C}
              </p>
            </div>
          </div>
      </section>
    );
  }

}//end component

export default BusinessSection2;
