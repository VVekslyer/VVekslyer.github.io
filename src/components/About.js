import React from 'react';
import { Icon } from '@iconify/react';
import pythonIcon from '@iconify/icons-logos/python';
import tensorflowIcon from '@iconify/icons-logos/tensorflow';
import unityIcon from '@iconify/icons-logos/unity';

export default function About(props) {
  let profilepic = "";
  let sectionName = "";
  let hello = "";

  if (props.sharedBasicInfo) {
    profilepic = "images/" + props.sharedBasicInfo.image;
  }
  if (props.resumeBasicInfo) {
    sectionName = props.resumeBasicInfo.section_name.about;
    hello = props.resumeBasicInfo.description_header;
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
                <Icon
                  icon="vscode-icons:file-type-matlab"
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div
                className="card"
                style={{ backgroundColor: '#262626', borderRadius: '7px' }}
              >
                <div
                  className="card-header"
                  style={{
                    backgroundColor: '#333333',
                    borderTopLeftRadius: '7px',
                    borderTopRightRadius: '7px',
                  }}
                >
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
                    <p>I am studying engineering physics @ Simon Fraser University.
                    I am looking to gain experience as an engineer by creating and collaborating on projects.</p>
                    <p>Feel free to contact me through <a href="https://www.linkedin.com/in/vitaliy-veksler-2aa32b198/"><span className="highlight-in">LinkedIn.</span></a></p>
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
