// import logo from './logo.svg';
import './App.css';
import ReactGA from "react-ga";
import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
// import {ssAlertBoxes, ssBackToTop, ssLightbox, ssMobileMenu, ssMoveHeader, ssParallax, ssPreloader, ssScrollSpy, ssSwiper}  from './js'

const initializeReactGA = () => {
  ReactGA.initialize("G-191ZQR05LM");
  ReactGA.pageview('/');
};
class App extends Component {
  componentDidMount() {
    initializeReactGA();
  }
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/> 
      </div>
    );
  }
}
export default App;