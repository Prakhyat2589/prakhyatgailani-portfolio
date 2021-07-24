import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import MySkills from "./skills";
import MylanguageTools from "./languagesTools";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-12 tab-12 s-about__content">
            <h3 className="section-header-allcaps">About Me</h3>
            <div className="column tab-12">
              <img
                className="s-about__pic"
                src="images/avatars/avator-1.jpeg"
                alt=""
              />
            </div>
            <div
              id="aboutMeQualities-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.aboutmeQualities &&
                resumeData.aboutmeQualities.map((item, index) => {
                  return (
                    <div key={index} className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <i className={item.className}></i>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <p>{item.name}</p>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="skillsBlockWrapper">
            <div className="skillsBlock column large-12 tab-12">
              <MylanguageTools resumeData={resumeData} />
              <MySkills resumeData={resumeData} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
