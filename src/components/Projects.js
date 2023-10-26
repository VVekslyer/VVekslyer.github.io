import React, { useState } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function Projects(props) {
  const [deps, setDeps] = useState({});
  const [showModal, setShowModal] = useState(false);

  const detailsModalShowHandler = (data) => {
    setShowModal(true);
    setDeps(data);
  };

  const detailsModalCloseHandler = () => {
    setShowModal(false);
  };

  if (props.resumeProjects && props.resumeBasicInfo) {
    const sectionName = props.resumeBasicInfo.section_name.projects;
    const projects = props.resumeProjects.map((project) => {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={project.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div
              className="foto"
              onClick={() => detailsModalShowHandler(project)}
            >
              <div>
                <img
                  src={project.images[0]}
                  alt="projectImages"
                  height="230"
                  style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{project.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });

    return (
      <section id="projects">
        <div className="col-md-12">
          <h1 className="section-title">
            <span>{sectionName}</span>
            <p className="note">Click on project to view</p>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto justify-content-center"> {/* Add 'justify-content-center' */}
              <>{projects[0]}</>
              <>{projects[1]}</>
              <>{projects[2]}</>
              <>{projects[3]}</>
              <>{projects[4]}</>
            </div>
          </div>
          <ProjectDetailsModal
            show={showModal}
            onHide={detailsModalCloseHandler}
            data={deps}
          />
        </div>
      </section>
    );
    
  }
}
