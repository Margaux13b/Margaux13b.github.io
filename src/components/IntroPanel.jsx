import '../styles/dialog.scss';

export default function IntroPanel() {
  return (
    <div className="dialog">
      <p className="dialog__speaker">Margaux Blanvilin</p>
      <p className="dialog__text">
        Bienvenue sur mon <strong className="dialog__highlight">portfolio</strong> ! Je t'invite à découvrir mes projets d'études !
      </p>
      <p className="dialog__hint">
        Utilise les flèches <kbd>←</kbd> <kbd>→</kbd> pour découvrir mes projets.
      </p>
    </div>
  );
}