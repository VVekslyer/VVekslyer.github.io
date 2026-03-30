import React from 'react';

export default function About(props) {
  let sectionName = "";
  let descriptionHeader = "";
  let description = "";
  let name = "";

  const social = props.sharedBasicInfo?.social || [];
  const linkedin = social.find((x) => x?.name?.toLowerCase() === 'linkedin');

  if (props.resumeBasicInfo) {
    sectionName = props.resumeBasicInfo.section_name.about;
    descriptionHeader = props.resumeBasicInfo.description_header;
    description = props.resumeBasicInfo.description;
  }
  if (props.sharedBasicInfo) {
    name = props.sharedBasicInfo.name;
  }

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 className="section-title">
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-10 mx-auto about-minimal">
          <p className="about-minimal__lede">
            {descriptionHeader || (name ? `Hi, I'm ${name}.` : '')}
          </p>
          {description ? <p className="about-minimal__body">{description}</p> : null}
          <div className="about-minimal__links">
            {linkedin ? (
              <a href={linkedin.url} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
