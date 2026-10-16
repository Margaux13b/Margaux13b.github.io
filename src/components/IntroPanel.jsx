import '../styles/dialog.scss';

export default function IntroPanel() {
  return (
    <div className="dialog">
      <p className="dialog__speaker">Margaux</p>
      <p className="dialog__text">
        Je suis <strong className="dialog__highlight">développeuse web</strong> et je crée des sites qui racontent une histoire.
      </p>
      <p className="dialog__hint">
        Utilise les flèches <kbd>←</kbd> <kbd>→</kbd> pour découvrir mes projets.
      </p>
    </div>
  );
}