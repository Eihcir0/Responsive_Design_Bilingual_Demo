# [LIVE DEMO](https://eihcir0.github.io/Responsive_Design_Bilingual_Demo/index.html)

# Responsive Design / Bilingual Demo

This is a demonstration of responsive web design for a bilingual (Danish/English) site.  This demo project consists of a static landing page which contains content from the **FOR BUSINESSES** / **TIL VIRKSOMHEDEN** tab only.  All other tabs including login and "submit email" features are *currently inactive, clicking them will result in a console.log message appearing in the DevTools*.

## Tech Stack

- [React.js](https://github.com/facebook/react) used for easy implementation of bilingual (Danish/English) feature and to allow for future implementation of *React-Router* and *React-Redux*.

- [Webpack](https://github.com/webpack) module bundler is used to generate static assets for module dependencies.  

- [Babel](https://github.com/babel/babel) transpiler is used for cross-browser support as the codebase was written using JavaScript ES6 syntax.

- [AirBNB Style Guide](https://github.com/airbnb/javascript) (adapted) was used throughout the project.

- [Jest](https://github.com/facebook/jest) testing framework was used to write tests for React / JavaScript.

## File Structure
```
responsive_demo
│
├─__tests__
├── assets
│   ├── images
│   └── stylesheets
├── components
│   ├── about
│   ├── business
│   ├── consumers
│   ├── footer
│   └── navbar
└── regions
   ├── dk
   └── us
```
* **\_\_tests\_\_** contains the tests written in Jest.
* **components** contains the React component files.
* **regions** contains the files with Json objects containing text for page contents for each region.

## React Components
- **index.jsx** is the entry component which renders *app.jsx* to the DOM.

  - **app.jsx** wraps the project.  In addition, this component contains the button and logic for language toggling between DK/EN. (NOTE: Putting the language logic here is just a workaround until the full Redux cycle is implemented.  It is not ideal, but it is reasonable and a much better alternative than setting a global variable to the window.)

    - **nav_bar_left.jsx** until the Redux cycle is implemented, only the left side of the bar is contained in this component.

    - **business.jsx** contains the *FOR BUSINESSES* / *TIL VIRKSOMHEDEN* content and is currently the only page in the project.

    - **footer.jsx** contains the footer content.

## Responsive
In accordance with best practices, the site was first designed for smaller mobile device screens (300-330px), then expanded for  larger viewing screens.


Responsiveness on different size devices is accomplished through the use of CSS3 *media-query* to adjust font size and toggle *flex-box* for stacking of elements.

```javascript
@media(min-width: 500px) {
  .nav-bar-button {
    display: inline-block;
  }
}
```
![EXAMPLE](/Screen Shot 2016-11-03 at 2.42.25 AM.png)


Using flex-box the elements rearrange themselves depending on the current width of the screen.

![EXAMPLE](/Screen Shot 2016-11-03 at 2.42.37 AM.png)



## Bilingual feature

The site and its content can be viewed in either English or Danish through a toggle in the nav bar.  

![EXAMPLE](/Screen Shot 2016-11-03 at 2.48.26 AM.png)

This button and the onClick callback function are contained in the App component for now.  Although this is not ideal, this is a suitable workaround until the Redux cycle is implemented -- see *Future Direction for the Project* below.

The button invokes the switchLanguage() function which sets the correct language in the state and also calls the setFlagUrl() function which updates state with the correct image of the flag for the language, causing a portion of the navbar to be rerendered to display the proper language and flag.

The language is passed down to the children through props.  The text for the content is stored in a Json object written in vanilla JavaScript:

```javascript
// ./regions/dk/tekst.js
export const dk = {
  navbar: {
    A: "TIL FORBRUGEREN",
    B: "TIL VIRKSOMHEDEN",
    C: "OM DEMO"
  }
  section1: {
    A: For forbrugeren er det dyrt og besværligt at betale regninger. Det går ud over likviditeten og administrationsomkostningerne hos kreditorer som dig.
  ...

```

The child component renders the appropriate text from the object:

```javascript

// When the language is set to DK, the {pageText[this.props.language].navbar.A} will render "TIL FORBRUGEREN" per the object above.
<div className="nav-bar-left-side">
  <button className="nav-bar-button" onClick={this.goConsumers}>
    {pageText[this.props.language].navbar.A}
  </button>

```

Which results in the left side of the navbar appearing like this:

![EXAMPLE](/Screen Shot 2016-11-03 at 2.50.13 AM.png)



## Testing

This demo was tested with [Jest](https://github.com/facebook/jest).  Because of the limited scope of the demo, there weren't a lot of tests to be run.  However, the skeleton is now in place for adding additional tests after future implementations.  Currently, there only two tests in place which check if NavBar correctly renders based on language selected and passed through props.


```
PASS  __tests__/test1.js
 ✓ button switches language (17ms)
 ✓ button switches language (3ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   2 passed, 2 total
Time:        5.465s
Ran all test suites.
```

Additionally, this demo was QA'd on the following screens:
  - Viewsonic 22" computer monitor
  - Sumsung A8
  - iPhone 6s
  - HP LV2311 19" computer monitor
  - iPad Air 2

And the following browsers:
  - Chrome ver 54.0.2840.71
  - Safari ver 9.1.2


## Future Direction

When building out the full site, the following will be implemented:

1) React-Router for creation of a true single page app and real-time navigation between tabs.

2) Internet Explorer cross-browser support (if required)

3) Buildout of all tabs in English/Danish:
  - For consumers
  - About
  - Privacy Policy
  - Cookies
  - Legal
  - Features
  - Jobs
  - For Businesses (section 3)
  - Login feature


4) Re-visit CSS styling and implement color gradients per designer.

5) Implementation of Redux cycle as follows:

  - Implement Redux-Store
  - Create reducers including:
      - receiveLanguage
      - Auths as necessary for login
  - Implement action creators including:
      - toggleLanguage
      - postUserEmailAddress
      - Auths actions
  - Implement middleware to handle API calls for login and email list
  - Refactor components to dispatch actions and receive state through props

6) Implement / polish up the following which were not completed due to time constraints:
  - Use additional font-weights - only standard and bold were provided
  - Incorporate color gradients per designer
  - Convert all graphics to SVG for speedy loading
  - Refactor CSS styling base
