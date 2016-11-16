import React from 'react';
import * as pageText from './../../regions/regions_root.js';


class BusinessSection4 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let language = this.props.language;
    return(
      <section className="business-section-4">
        <section className="business-section-4-top">
          <span className="business-section-4-super-title">
            CREDITOR PLATFORM
          </span>
          <span className="business-section-4-title">
            {pageText[language].business.section4.title}
          </span>

          <div className="business-section-4-text-super-container">
            <div className="business-section-4-text-half-container">
              <div className="business-section-4-text-container">
                <span className="checkmark">
                  ✓
                </span>
                <span className="business-section-4-subtitle">
                  {pageText[language].business.section4.subtitle_A}
                </span>
                <span className="business-section-4-text">
                  {pageText[language].business.section4.A}
                </span>
              </div>
              <div className="business-section-4-text-container">
                <span className="checkmark">
                  ✓
                </span>
                <span className="business-section-4-subtitle">
                  {pageText[language].business.section4.subtitle_B}
                </span>
                <span className="business-section-4-text">
                  {pageText[language].business.section4.B}
                </span>
              </div>
              <div className="business-section-4-text-container">
                <span className="checkmark">
                  ✓
                </span>
                <span className="business-section-4-subtitle">
                  {pageText[language].business.section4.subtitle_C}
                </span>
                <span className="business-section-4-text">
                  {pageText[language].business.section4.C}
                </span>
              </div>
            </div>
            <div className="business-section-4-text-half-container">
              <div className="business-section-4-text-container">
                <span className="checkmark">
                  ✓
                </span>
                <span className="business-section-4-subtitle">
                  {pageText[language].business.section4.subtitle_D}
                </span>
                <span className="business-section-4-text">
                  {pageText[language].business.section4.D}
                </span>
              </div>
              <div className="business-section-4-text-container">
                <span className="checkmark">
                  ✓
                </span>
                <span className="business-section-4-subtitle">
                  {pageText[language].business.section4.subtitle_E}
                </span>
                <span className="business-section-4-text">
                  {pageText[language].business.section4.E}
                </span>
              </div>
              <div className="business-section-4-text-container">
                <span className="checkmark">
                  ✓
                </span>
                <span className="business-section-4-subtitle">
                  {pageText[language].business.section4.subtitle_F}
                </span>
                <span className="business-section-4-text">
                  {pageText[language].business.section4.F}
                </span>
              </div>
            </div>
          </div>

          <button className="business-section-4-button">
            {pageText[language].business.section4.button}
          </button>
        </section>
        <section className="business-section-4-bottom">

          <span className="business-section-4-final-salutation">
            {pageText[language].business.section4.finalSalutation}
          </span>
          <span className="email-request">
            {pageText[language].business.section4.emailRequest}
          </span>
          <div className="enter-email-container">
            <div className="enter-email">
              {pageText[language].business.section4.enterEmail}
              <button className="submit-email" onClick={this.handleEmail}>
                →
              </button>
            </div>
          </div>
        </section>
      </section>
    );
  }

}//end component

export default BusinessSection4;
