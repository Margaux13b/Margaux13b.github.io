import { useState } from 'react';
import '../styles/souvenirs.scss';

export default function Souvenirs({ souvenirs }) {
  const [selection, setSelection] = useState(0);
  const souvenir = souvenirs[selection];

  return (
    <div className="souvenirs">
      {/* En-tête de la tablette Sheikah */}
      <div className="souvenirs__header" aria-hidden="true">
        <p className="souvenirs__heading">Souvenirs</p>
      </div>

      {/* L'album : les photos sépia */}
      <ul className="souvenirs__album">
        {souvenirs.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              className={i === selection ? 'memory memory--active' : 'memory'}
              aria-pressed={i === selection}
              onClick={() => setSelection(i)}
            >
              <span className="memory__frame">
                {/* 🆕 la petite version optimisée */}
                <img className="memory__image" src={s.vignette} alt="" loading="lazy" />
              </span>
              <span className="memory__title">{s.titre}</span>
              <span className="memory__date">{s.date}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Le souvenir sélectionné */}
      <article className="souvenirs__detail" key={souvenir.id} aria-live="polite">
        <div className="souvenirs__picture">
          {/* 🆕 la grande version optimisée */}
          <img src={souvenir.grande} alt={souvenir.alt} />
        </div>

        <div>
          <p className="souvenirs__place">{souvenir.lieu} · {souvenir.date}</p>
          <h2 className="souvenirs__title">{souvenir.titre}</h2>
          <p className="souvenirs__story">{souvenir.texte}</p>

          <h3 className="souvenirs__label">Ce que j'en retiens</h3>
          <ul className="souvenirs__skills">
            {souvenir.acquis.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </article>

      <p className="souvenirs__footer">
        Souvenirs retrouvés : {souvenirs.length}/{souvenirs.length}
      </p>
    </div>
  );
}