# Portfolio · Margaux Blanvilin

Portfolio de développeuse web, inspiré de la direction artistique de *The Legend of Zelda: Breath of the Wild*.

🔗 **En ligne : https://margaux13b.github.io**

## Le concept

Le site est pensé comme la tablette Sheikah du jeu :
- **Accueil** : une tête en 3D qui tourne pour présenter chaque projet, avec des dialogues façon PNJ ;
- **Projets** : un « Compendium » des projets (contexte, objectif, compétences, liens) ;
- **Parcours** : un « Journal d'aventure » avec les quêtes accomplies et en cours ;
- **Expériences** : un album de « Souvenirs » ;
- **Contact** : coordonnées et formulaire.

## Technologies

| Outil | Rôle |
| --- | --- |
| [Astro](https://astro.build) | Générateur de site statique : une page = un fichier HTML (bon pour le SEO) |
| React | Composants interactifs (tête 3D, Compendium, journal, souvenirs) |
| Three.js + React Three Fiber | Affichage et animation de la tête 3D |
| Sass (SCSS) + BEM | Préprocesseur CSS, classes nommées selon la convention BEM |
| Formspree | Envoi du formulaire de contact sans backend |
| GitHub Actions + GitHub Pages | Publication automatique |

## Lancer le projet en local

Prérequis : Node.js 22 ou plus.

```bash
npm install       # installe les dépendances
npm run dev       # lance le site sur http://localhost:4321
npm run build     # construit la version finale dans dist/
npm run preview   # prévisualise la version finale
```

## Structure du projet

```
.github/workflows/deploy.yml   Publication automatique sur GitHub Pages
public/                        Fichiers servis tels quels
├── models/tete.glb            Modèle 3D de la tête (exporté depuis Blender)
├── docs/                      Fiches PDF détaillées des projets
├── demos/cv/                  Démo en ligne du projet « CV »
└── cv-margaux.pdf             CV téléchargeable
src/
├── pages/                     Une page = un fichier = une URL
├── layouts/Layout.astro       Squelette commun (head, SEO, header, fond)
├── components/                Composants Astro et React
├── data/                      Contenu du site (projets, quêtes, souvenirs)
├── assets/                    Images optimisées automatiquement par Astro
└── styles/                    SCSS : un fichier par bloc BEM + mixins
```

Le **contenu** (textes, liens) est séparé du **code** : pour modifier un projet, il suffit d'éditer `src/data/projects.js`.

## Publication

Chaque `git push` sur la branche `main` déclenche le workflow `.github/workflows/deploy.yml`, qui :
1. installe les dépendances avec Node.js 22 ;
2. construit le site (`npm run build`) ;
3. publie le dossier `dist/` sur GitHub Pages.

Aucune étape manuelle n'est nécessaire.

## Qualité

Audit Lighthouse / PageSpeed Insights :

| Performance | Accessibilité | Bonnes pratiques | SEO |
| --- | --- | --- | --- |
| 88 | 100 | 100 | 100 |

Accessibilité : navigation au clavier (flèches ← →, Tab), textes alternatifs, structure de titres, annonces pour les lecteurs d'écran (`aria-live`), respect de `prefers-reduced-motion`.

## Crédits

- Polices : [Cinzel](https://fonts.google.com/specimen/Cinzel) et [Nunito](https://fonts.google.com/specimen/Nunito), sous licence SIL Open Font License.
- Direction artistique inspirée de *The Legend of Zelda: Breath of the Wild* (Nintendo). Aucun élément du jeu (logo, police, image) n'est utilisé : ornements, fond et effets sont réalisés en CSS et SVG.
- Modèle 3D : à compléter.
- Photos : personnelles.