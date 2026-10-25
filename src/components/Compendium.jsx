import { useState } from 'react';
import '../styles/compendium.scss';

function numero(i) {
  return String(i + 1).padStart(3, '0');
}

export default function Compendium({ projects }) {
  const [selection, setSelection] = useState(0);
  const projet = projects[selection];

  return (
    <div className="compendium">
      {/* En-tête de la tablette Sheikah */}
      <div className="compendium__header" aria-hidden="true">
        <p className="compendium__heading">Compendium</p>
      </div>

      <div className="compendium__body">
        {/* À gauche : la grille de vignettes */}
        <ul className="compendium__grid">
          {projects.map((p, i) => (
            <li key={p.title}>
              <button
                type="button"
                className={i === selection ? 'entry entry--active' : 'entry'}
                aria-pressed={i === selection}
                onClick={() => setSelection(i)}
              >
                <span className="entry__frame">
                  {/* 🆕 la petite version optimisée */}
                  <img className="entry__image" src={p.vignette} alt="" loading="lazy" />
                  <span className="entry__number">{numero(i)}</span>
                </span>
                <span className="entry__name">{p.title}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* À droite : la fiche */}
        <article className="compendium__detail" key={projet.title} aria-live="polite">
          <div className="compendium__picture">
            {/* 🆕 la grande version optimisée */}
            <img src={projet.grande} alt={`Capture d'écran du projet ${projet.title}`} />
          </div>

          <p className="compendium__number">N° {numero(selection)} · {projet.type}</p>
          <h2 className="compendium__title">{projet.title}</h2>
          <p className="compendium__description">{projet.description}</p>

          <h3 className="compendium__label">Contexte</h3>
          <p>{projet.context}</p>

          <h3 className="compendium__label">Objectif</h3>
          <p>{projet.objective}</p>

          <h3 className="compendium__label">Ce que j'ai appris</h3>
          <p>{projet.learned}</p>

          <ul className="compendium__skills">
            {projet.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <ul className="compendium__links">
            {projet.live && (
              <li><a className="button button--choice" href={projet.live} target="_blank" rel="noopener">Voir le projet</a></li>
            )}
            <li><a className="button button--choice" href={projet.source} target="_blank" rel="noopener">Code source</a></li>
            <li><a className="button button--choice" href={projet.details}>En savoir plus (PDF)</a></li>
          </ul>
        </article>
      </div>

      <p className="compendium__footer">
        Entrées découvertes : {projects.length}/{projects.length}
      </p>
    </div>
  );
}