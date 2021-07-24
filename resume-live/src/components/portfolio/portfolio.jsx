import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
          <div className="column large-12">
            <h3 className="section-header-allcaps">My Recent Work</h3>
          </div>
        </div>
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
          {resumeData.portfolio &&
            resumeData.portfolio.map((item, index) => {
              return (
                <div key={index} className="column folio-item">
                  <a href={`#${item.id}`} className="folio-item__thumb">
                    <img src={`${item.imgurl}`} className="item-img" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        {/* <h5>{item.name}</h5>
                        <p>{item.description}</p> */}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>

        {/* Modal Templates Popup */}

        {resumeData.portfolio &&
          resumeData.portfolio.map((projectDetail, index) => {
            return (
              <div key={index} id={`${projectDetail.id}`} hidden>
                <div className="modal-popup">
                  <img src={`${projectDetail.bigimgurl}`} alt="" />

                  <div className="modal-popup__desc">
                    <h5>{projectDetail.name}</h5>
                    <p>{projectDetail.description}</p>
                    <div className="modal-footer">
                      <ul className="modal-popup__cat">
                        {projectDetail.tags &&
                          projectDetail.tags.map((tag, i) => {
                            return <li key={i}>{tag}</li>;
                          })}
                        ;
                      </ul>
                      {projectDetail.url && (
                        <a
                          href={`${projectDetail.url}`}
                          className="modal-popup__details btn btn--primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    );
  }
}
