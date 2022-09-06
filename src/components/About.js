import React, { Component } from "react";
import { Icon } from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import tensorflowIcon from "@iconify/icons-logos/tensorflow";
import unityIcon from "@iconify/icons-logos/unity";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "white" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="100%"
                    width="100%"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "400%", margin: "9% 0 0 5%" }}
                  />
                  <Icon
                    icon={tensorflowIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <i 
                    className="devicon-numpy-original colored"
                    style={{fontSize: "400%", position: "relative", top: "30px"}}
                 />
                  <Icon
                    icon={unityIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card" style = {{backgroundColor: '#262626', borderRadius: '7px'}}>
                  <div className="card-header" style = {{backgroundColor: '#333333', borderTopLeftRadius: '7px', borderTopRightRadius: '7px'}}>
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      color: 'white',
                      fontSize: "132%",
                      lineHeight: "auto",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} </span>
                    <br />
                    <br />
                    <span className="description">
                    <p>My name is Vitaliy Vekslyer.</p>
                    <p>I'm building projects with the newest and most exciting technologies such as <br/>
                    <span className="highlight-ml">Machine Learning</span> &nbsp; and &nbsp; <span className="highlight-bci">Brain Computer Interfaces.</span></p>
                    <p>I've recently graduated from &nbsp; <span className="highlight-cs">Computing Science</span> &nbsp; @ Douglas College
                    and I'm looking for work as a &nbsp; <span className="highlight-swe">Software Developer.</span></p>
                    <p>Feel free to contact me through <a href="https://www.linkedin.com/in/vitaliy-veksler-2aa32b198/"><span className="highlight-in">LinkedIn.</span></a></p>
                    <p>I am always looking for new projects to collaborate on and to gain experience from. :)</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
