import React from 'react';
import * as pageText from './../../regions/regions_root.js';
import BusinessSection1 from './business_section_1.jsx';
import BusinessSection2 from './business_section_2.jsx';
import BusinessSection3 from './business_section_3.jsx';
import BusinessSection4 from './business_section_4.jsx';
class Business extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <section className="business-tab">
        <BusinessSection1 language={this.props.language}/>
        <BusinessSection2 language={this.props.language}/>
        <BusinessSection3 language={this.props.language}/>
        <BusinessSection4 language={this.props.language}/>
      </section>
    );
  }

}//end component

export default Business;
