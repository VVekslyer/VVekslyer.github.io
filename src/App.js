import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import SidebarNav from "./components/SidebarNav";

export default function App() {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});

  useEffect(() => {
    loadResumeFromPath("resume.json");
    loadSharedData();
  }, []);

  const loadResumeFromPath = (path) => {
    fetch(path)
      .then((result) => result.json())
      .then((result) => {
        setResumeData(result);
      });
  };

  const loadSharedData = () => {
    fetch("about_me.json")
      .then((result) => result.json())
      .then((result) => {
        setSharedData(result);
      });
  };

  return (
    <div className="app-shell">
      <SidebarNav sharedBasicInfo={sharedData.basic_info} />
      <main className="app-main">
        <Header sharedData={sharedData.basic_info} />
        <About
          resumeBasicInfo={resumeData.basic_info}
          sharedBasicInfo={sharedData.basic_info}
        />
        <Experience
          resumeExperience={resumeData.experience}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Education
          resumeEducation={resumeData.education}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Projects
          resumeProjects={resumeData.projects}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Footer sharedBasicInfo={sharedData.basic_info} />
      </main>
    </div>
  );
}
