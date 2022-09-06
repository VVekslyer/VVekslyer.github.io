import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      error: null,
      resumeData: {},
      sharedData: {},
    };
    this.loadResumeFromPath('resume.json');
  }

  componentDidMount() {
    this.loadSharedData();
  }

  loadResumeFromPath(path) {
    fetch(path)
      .then(result => result.json())
      .then(result => {
        this.setState({
          resumeData: result
        })
      })
    }


  loadSharedData() {
    fetch('about_me.json')
      .then(result => result.json())
      .then(result => {
        this.setState({
          sharedData: result
        });
      }
    )
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;

