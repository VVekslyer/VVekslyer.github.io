import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge';

export default function Experience(props) {
  if (props.resumeExperience && props.resumeBasicInfo) {
    const sectionName = props.resumeBasicInfo.section_name.experience;
    const work = props.resumeExperience.map((work, i) => {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      const mainTech = mainTechnologies.map((technology, i) => (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      ));

      const tech = technologies.map((technology, i) => (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      ));

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#2C5364",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fab fa-python experience-icon"></i>}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px", font: "Nunito Sans" }}>
            {mainTech}
          </div>

          <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
            {work.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });
    
    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#2C5364",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}