export default function Projects(props) {
  if (props.resumeProjects && props.resumeBasicInfo) {
    const sectionName = props.resumeBasicInfo.section_name.projects;
    const projects = props.resumeProjects.map((project) => {
      const image = project?.images?.[0];
      const technologies = (project?.technologies || [])
        .map((t) => t?.name)
        .filter(Boolean);
      const url = project?.url;

      return (
        <article className="project-post" key={project.title}>
          <div className="row">
            {image ? (
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <img
                  className="project-post__image"
                  src={image}
                  alt={`${project.title} screenshot`}
                />
              </div>
            ) : null}
            <div className={image ? "col-12 col-md-8" : "col-12"}>
              <div className="project-post__titleRow">
                <div className="project-post__title">{project.title}</div>
                {project.startDate ? (
                  <div className="project-post__meta">{project.startDate}</div>
                ) : null}
              </div>

              {project.description ? (
                <p className="project-post__description">{project.description}</p>
              ) : null}

              {technologies.length ? (
                <ul className="project-post__tags">
                  {technologies.map((name) => (
                    <li className="project-post__tag" key={name}>
                      {name}
                    </li>
                  ))}
                </ul>
              ) : null}

              {url ? (
                <div className="project-post__links">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    View link
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </article>
      );
    });

    return (
      <section id="projects">
        <div className="col-md-12">
          <h1 className="section-title">
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-10 mx-auto projects-list">{projects}</div>
        </div>
      </section>
    );
    
  }
}
