import React, { Component } from "react";
import resumePDF from "../resume/Prakhyat-Gailani-Resume-Front-End-engineer.pdf";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
          <div className="column tab-12">
            <h3 className="section-header-allcaps">Career Overview</h3>
          </div>
          <div className="column tab-12">
            {resumeData.languages &&
              resumeData.workDetails.map((workDetail, index) => {
                return (
                  <div key={index} className="resume-block">
                    <div className="resume-block__header">
                      <h4 className="h3">{workDetail.client}</h4>
                      <p className="resume-block__header-meta">
                        <span>{workDetail.role}</span>
                        <span className="resume-block__header-date">
                          {workDetail.timeline}
                        </span>
                      </p>
                    </div>
                    <p>{workDetail.responsibility}</p>
                  </div>
                );
              })}

            {/* end resume-block */}
          </div>
        </div>
        <h4>Please download CV for detailed information about my career</h4>

        <div className="row s-about__content-bottom">
          <div className="column w-1000-stack">
            <a
              href={resumePDF}
              className="btn btn--download"
              download={resumePDF}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "",
                  msFilter: "",
                }}
              >
                <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
}
