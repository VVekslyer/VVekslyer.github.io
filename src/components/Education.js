export default function Education(props) {
  const education = props.resumeEducation || [];
  const sectionName =
    props.resumeBasicInfo?.section_name?.education || "Education";

  if (!education.length) {
    return null;
  }

  return (
    <section id="education" className="pb-5">
      <div className="col-md-12">
        <h1 className="section-title">
          <span>{sectionName}</span>
        </h1>
      </div>
      <div className="col-md-10 mx-auto education-list">
        {education.map((edu, i) => (
          <article
            className="education-item"
            key={`${edu.institution}-${edu.program}-${i}`}
          >
            <div className="education-item__top">
              <div className="education-item__left">
                <span className="education-item__program">{edu.program}</span>
                <span className="education-item__sep">—</span>
                <span className="education-item__school">{edu.institution}</span>
                {edu.location ? (
                  <span className="education-item__location">{edu.location}</span>
                ) : null}
              </div>
              <div className="education-item__dates">{edu.years}</div>
            </div>
            {edu.details ? (
              <div className="education-item__details">{edu.details}</div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
