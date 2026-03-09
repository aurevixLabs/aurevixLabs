import type {Project} from "./data";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({projects}: ProjectsSectionProps) {
  return (
    <section className="section-wrap" id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <a href="#" className="section-link">
          View All
        </a>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`project-card fade-up fade-delay-${index + 2}`}
          >
            <p className="project-type">{project.type}</p>
            <p className="project-status">{project.status}</p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <a href={project.href} aria-label={`View ${project.name}`}>
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
