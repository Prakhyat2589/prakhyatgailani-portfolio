import React, { Component } from "react";
import Emailform from "./emailForm";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" className="s-contact target-section">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg>
        <div className="row s-contact__header">
          <div className="column large-12">
            <h3 className="section-header-allcaps">Say Hello</h3>
          </div>
        </div>
        <div className="row s-contact__content">
          <div className="column large-7 medium-12">
            <h4 className="huge-text">
              Have a new project in mind? Let's collaborate and build something
              awesome. Let's turn that idea to an even greater product :)
            </h4>
            <Emailform />
          </div>
          <div className="column large-4 medium-12">
            <div className="row contact-infos">
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <h5 className="contact-block__header">Email</h5>
                  <p className="contact-block__content">
                    <a
                      className="mailtoui"
                      href={`mailto: ${resumeData.email}`}
                    >
                      <nobr>{resumeData.email}</nobr>
                    </a>
                  </p>
                </div>{" "}
                {/* end contact-block */}
              </div>
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <h5 className="contact-block__header">Phone</h5>
                  <p className="contact-block__content">
                    <span>UK: </span>
                    <a href={`tel: ${resumeData.telephoneUK}`}>
                      <nobr>{resumeData.telephoneUK}</nobr>
                    </a>
                  </p>
                  <p>
                    <span>India: </span>
                    <a href={`tel: ${resumeData.telephoneIndia}`}>
                      <nobr>{resumeData.telephoneIndia}</nobr>
                    </a>
                  </p>
                </div>{" "}
                {/* end contact-block */}
              </div>
              <div className="column large-12 medium-6 tab-12">
                <a
                  href={`mailto: ${resumeData.email}`}
                  className="mailtoui btn btn--primary h-full-width"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
