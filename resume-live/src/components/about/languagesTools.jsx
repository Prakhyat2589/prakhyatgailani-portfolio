import React, { Component } from "react";
import handleViewport from "react-in-viewport";

class MylanguageTools extends Component {
  getStyle() {
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: "opacity 1.5s ease-in-out" };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: "none", opacity: "0" };
    } else {
      return {};
    }
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section style={this.getStyle()}>
        <div className="ltWrapHead">
          {/* <div className="ltWrap tab1">
            <h3 className="ltHeader">Languages I speak</h3>
            <ul className="languagesList">
              {resumeData.languages &&
                resumeData.languages.map((language, index) => {
                  return <li key={index}>{language.languageName}</li>;
                })}
            </ul>
          </div> */}
          <div className="ltWrap tab2">
            <h3 className="ltHeader">Tools I use</h3>
            <ul className="toolsList">
              {resumeData.tools &&
                resumeData.tools.map((tool, index) => {
                  return <li key={index}>{tool.toolName}</li>;
                })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default MylanguageTools = handleViewport(MylanguageTools, {
  rootMargin: "-1.0px",
});

// export default MylanguageTools;
