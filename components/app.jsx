import React from 'react';
import Footer from './footer/footer.jsx';
import NavBarLeft from './navbar/nav_bar_left.jsx';
import Business from './business/business.jsx';

//The language, flag, and login logic will be moved to a full navbar component upon implementation of Redux cycle.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "US",
      currentTab: "business",
      flagUrl: "./assets/images/flags/us.png"
    };
    this.switchLanguage = this.switchLanguage.bind(this);
  }

  switchLanguage()  {
    if (this.state.language === "US") {
      this.setState({language: "DK"});
      this.setState({flagUrl: "./assets/images/flags/dk.png"});
    } else {
      this.setState({language: "US"});
      this.setState({flagUrl: "./assets/images/flags/us.png"});
    }
  }


  handleLogin() {
    console.log("LOGIN");
  }

  render() {
  return (
  <section>

    <div className="nav-bar">
      <NavBarLeft currentTab={this.state.currentTab}
                  language={this.state.language} />
      <img className="icon"
        src="./assets/images/roger_icon@2x.png"/>
      <div className="nav-bar-right">
        <div className="language-selector top">
          <img  className="img-flag"
                src={this.state.flagUrl}
                onClick={this.switchLanguage}/>
          <button className="lang-button"
                  onClick={this.switchLanguage}>
            {this.state.language}
          </button>
        </div>
        <button className="login-button"
                onClick={this.handleLogin}>
          <img  src="./assets/images/lock_icon@2x.png"
                className="login-button-img"/>
          LOGIN
        </button>
      </div>
    </div>

    <Business language={this.state.language} />

    <Footer language={this.state.language} />
      <div className="language-selector bottom">
        <img  className="img-flag"
              src={this.state.flagUrl}
              onClick={this.switchLanguage}/>
        <button className="lang-button"
                onClick={this.switchLanguage}>
          {this.state.language}
        </button>
      </div>
  </section>
  );}

} // end component

export default App;
