import { useState } from 'react';
import { quetes } from '../data/quetes.js';
import '../styles/quest-log.scss';

const groupes = [
  { titre: 'Quêtes accomplies', categorie: 'accomplie' },
  { titre: 'Quêtes en cours', categorie: 'en-cours' },
];

export default function QuestLog() {
  const [selection, setSelection] = useState(0);
  const quete = quetes[selection];
  const nbAccomplies = quetes.filter((q) => q.categorie === 'accomplie').length;

  return (
    <div className="quest-log">
      {/* À gauche : la liste des quêtes */}
      <div className="quest-log__list">
        {groupes.map((groupe) => (
          <div key={groupe.categorie}>
            <h3 className="quest-log__group">{groupe.titre}</h3>
            <ul>
              {quetes.map((q, i) =>
                q.categorie !== groupe.categorie ? null : (
                  <li key={q.id}>
                    <button
                      type="button"
                      className={i === selection ? 'quest quest--active' : 'quest'}
                      aria-pressed={i === selection}
                      onClick={() => setSelection(i)}
                    >
                      <span className="quest__icon" aria-hidden="true">
                        {q.categorie === 'accomplie' ? '✓' : '!'}
                      </span>
                      <span className="quest__title">{q.titre}</span>
                      <span className="quest__place">{q.lieu}</span>
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* À droite : le détail de la quête sélectionnée */}
      <article className="quest-log__detail" key={quete.id} aria-live="polite">
        <h3 className="quest-log__title">{quete.titre}</h3>
        <p className="quest-log__place">{quete.lieu}</p>
        <p className="quest-log__text">{quete.texte}</p>

        <p className={`quest-log__stamp quest-log__stamp--${quete.categorie}`}>
                {quete.categorie === 'accomplie' ? <span lang="en">Complete</span> : 'En cours'}
        </p>

        <p className="quest-log__counter">
          Quêtes accomplies : {nbAccomplies}/{quetes.length}
        </p>
      </article>
    </div>
  );
}