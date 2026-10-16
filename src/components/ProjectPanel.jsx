import '../styles/dialog.scss';

export default function ProjectPanel({ project, position, total }) {
  return (
    <article className="dialog">
      <p className="dialog__step">Projet {position} / {total}</p>
      <h2 className="dialog__title">{project.title}</h2>
      <p>{project.description}</p>

      <ul className="dialog__skills">
        {project.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <ul className="dialog__choices">
        <li>
          <a className="button button--choice" href={project.live} target="_blank" rel="noopener">
            Voir le projet
          </a>
        </li>
        <li>
          <a className="button button--choice" href={project.details}>
            En savoir plus (PDF)
          </a>
        </li>
      </ul>
    </article>
  );
}