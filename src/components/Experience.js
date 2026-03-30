export default function Experience(props) {
  if (props.resumeBasicInfo && props.resumeExperience) {
    const sectionName = props.resumeBasicInfo.section_name.experience;
    const experience = props.resumeExperience || [];

    const renderMetaLine = (left, right, key) => (
      <div className="experience-item__top" key={key}>
        <div className="experience-item__left">{left}</div>
        <div className="experience-item__dates">{right}</div>
      </div>
    );

    const workItems = experience.map((work, i) => {
      const highlights = (work.highlights || []).filter(Boolean);
      const tech = Array.from(
        new Set([...(work.mainTech || []), ...(work.technologies || [])].filter(Boolean))
      );

      return (
        <article className="experience-item" key={`${work.company}-${work.title}-${i}`}>
          {renderMetaLine(
            <>
              <span className="experience-item__role">{work.title}</span>
              <span className="experience-item__sep">—</span>
              <span className="experience-item__company">{work.company}</span>
              {work.location ? (
                <span className="experience-item__location">{work.location}</span>
              ) : null}
            </>,
            work.years,
            'work'
          )}

          {highlights.length ? (
            <ul className="experience-item__highlights">
              {highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : null}

          {tech.length ? (
            <div className="experience-item__tech">{tech.join(' · ')}</div>
          ) : null}
        </article>
      );
    });

    return (
      <section id="experience" className="pb-5">
        <div className="col-md-12">
          <h1 className="section-title">
            <span>{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-10 mx-auto experience-list">
          {workItems}
        </div>
      </section>
    );
  }
}
