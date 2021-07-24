import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import {
  ssParallax,
  ssMobileMenu,
  ssMoveHeader,
  ssScrollSpy,
  ssBackToTop,
  ssLightbox,
  ssPreloader,
} from "../../js";

export default class Header extends Component {
  componentDidMount() {
    ssPreloader();
    ssMobileMenu();
    ssMoveHeader();
    ssScrollSpy();
    ssParallax();
    ssBackToTop();
    ssLightbox();
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <div id="preloader">
          <div id="loader"></div>
        </div>
        <header className="s-header">
          <div className="row s-header__nav-wrap">
            <nav className="s-header__nav">
              <ul>
                <li className="current">
                  <AnchorLink className="smoothscroll" href="#hero">
                    Home
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink className="smoothscroll" href="#about">
                    About
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink className="smoothscroll" href="#resume">
                    Resume
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink className="smoothscroll" href="#portfolio">
                    Works
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink className="smoothscroll" href="#contact">
                    Say Hello
                  </AnchorLink>
                </li>
              </ul>
            </nav>
          </div>

          <a className="s-header__menu-toggle" href="#0" title="Menu">
            <span className="s-header__menu-icon"></span>
          </a>
        </header>

        <section id="hero" className="s-hero target-section">
          <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1>
                  I'm <br />
                  {resumeData.name}
                </h1>

                <h3>
                  I am a {resumeData.role}. {resumeData.roleDescription}
                  <AnchorLink className="smoothscroll" href="#about">
                    Let's start scrolling&nbsp;
                  </AnchorLink>
                  and learn more&nbsp;
                  <AnchorLink className="smoothscroll" href="#about">
                    about me
                  </AnchorLink>
                  .
                </h3>

                <ul className="social">
                  {resumeData.socialLinks &&
                    resumeData.socialLinks.map((item) => {
                      return (
                        <li key={item.name}>
                          <a
                            rel="noopener noreferrer"
                            href={`${item.url}`}
                            target="_blank"
                          >
                            <i className={item.className}></i>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>

          <div className="s-hero__scroll">
            <AnchorLink
              href="#about"
              className="s-hero__scroll-link smoothscroll"
            >
              <span className="scroll-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M18.707 12.707l-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z" />
                </svg>
              </span>
              <span className="scroll-text">Scroll Down</span>
            </AnchorLink>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
