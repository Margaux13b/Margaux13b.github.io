import imgPendu from '../assets/projets/pendu.png';
import imgCv from '../assets/projets/cv.png';
import imgJobBoard from '../assets/projets/job-board.png';

export const projects = [
  {
    title: 'Le Pendu',
    type: 'Projet individuel',
    description: 'Premier projet réalisé en cours en Python. Le but était de savoir utiliser ce langage à travers un jeu simple. Évidemment il n\'est pas parfait, mais il fonctionne et j\'en suis fière !',
    skills: ['Python', 'Git' ],
    live: '#',
    details: '/docs/projet-pendu.pdf',
    image: imgPendu,
    context: 'Premier projet réalisé en cours en langage Python.',
    objective: 'Apprendre à utiliser le langage Python en créant un jeu simple.',
    learned: 'Je me suis familiarisée avec le monde du codage et j\'ai appris à utiliser le langage Python. J\'ai aussi appris à utiliser Git pour gérer les versions de mon projet.',
  },
  {
    title: 'Mon CV en ligne',
    type: 'Projet individuel',
    description: 'Premier site web réalisé en cours avec HTML et CSS. Il fallait faire son CV en ligne, avec un design qui nous représente. ',
    skills: ['HTML', 'CSS'],
    live: '#',
    details: '/docs/projet-cv.pdf',
    image: imgCv,
    context: 'Premier site web réalisé en cours avec HTML et CSS.',
    objective: 'Apprendre à créer un site web.',
    learned: 'J\'ai appris à utiliser HTML et CSS pour créer un site web responsive et esthétique qui me ressemble pour mon CV.',
  },
  {
    title: 'Job Board',
    type: 'Projet de groupe',
    description: 'Premier projet de groupe qui consistait à créer un site web de recherche d\'emploi. Ce projet m\'a permis de découvrir le travail en équipe et la gestion de projet.',
    skills: ['React', 'SQL', 'JavaScript', 'Express', 'Git', 'Node.js'],
    live: '#',
    details: '/docs/projet-job-board.pdf',
    image: imgJobBoard,
    context: 'Premier projet de groupe afin de créer un site web de recherche d\'emploi.',
    objective: 'Apprendre à travailler en équipe et à gérer un projet.',
    learned: 'J\'ai appris à utiliser davantage de langages et frameworks pour créer un site web complet. J\'ai aussi appris à travailler en équipe et donc à essayer de tirer le meilleur de chacun pour que le projet avance et soit réussi.',
  },
];