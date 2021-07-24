import React, { Component } from "react";
import handleViewport from "react-in-viewport";

class MySkillsBlock extends Component {
  getStyle() {
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: "width 1s ease-in-out" };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: "none", width: "0" };
    } else {
      return {};
    }
  }

  getDisplay() {
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
      <section>
        <div className="content">
          <h3 className="ltHeader" style={this.getDisplay()}>
            Languages I speak
          </h3>
          <ul className="skill-bars-fat">
            {resumeData.skills &&
              resumeData.skills.map((skill, index) => {
                return (
                  <li key={index}>
                    <div className={`progress per${skill.number}`} />
                    <div
                      className={`progress-bar percent${skill.number}`}
                      style={this.getStyle()}
                    />
                    <strong>{skill.skillName}</strong>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}
const MySkills = handleViewport(MySkillsBlock, { rootMargin: "-1.0px" });

export default MySkills;
