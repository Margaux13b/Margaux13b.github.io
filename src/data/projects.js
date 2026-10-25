import imgPendu from '../assets/projets/pendu.png';
import imgCv from '../assets/projets/cv.png';
import imgJobBoard from '../assets/projets/job-board.png';

export const projects = [
  {
    title: 'Le Pendu',
    type: 'Projet individuel',
    description: 'Premier projet réalisé en cours en Python. Le but était de savoir utiliser ce langage à travers un jeu simple. Évidemment il n\'est pas parfait, mais il fonctionne et j\'en suis fière !',
    skills: ['Python', 'Git' ],
    source: 'https://github.com/Margaux13b/hangman',
    details: '/docs/projet-pendu.pdf',
    image: imgPendu,
    context: 'Projet individuel réalisé en 2 jours lors de ma première piscine Python.',
    objective: 'Apprendre à utiliser le langage Python en créant un jeu simple.',
    learned: 'Je me suis familiarisée avec le monde du codage et j\'ai appris à utiliser le langage Python. J\'ai aussi appris à utiliser Git pour gérer les versions de mon projet.',
  },
  {
    title: 'Mon CV en ligne',
    type: 'Projet individuel',
    description: 'Premier site web réalisé en cours avec HTML et CSS. Il fallait faire son CV en ligne, avec un design qui nous représente.',
    skills: ['HTML', 'CSS'],
    live: '/demos/cv/resume.html',
    source: 'https://github.com/EpitechMscProPromo2029/T-WEB-500-BDX-5-1-webd04-2',
    details: '/docs/projet-cv.pdf',
    image: imgCv,
    context: 'Projet individuel de la piscine web, réalisé en 4 jours.',
    objective: 'Concevoir un CV en ligne responsive, avec un design personnel, en HTML et CSS uniquement.',
    learned: 'J\'ai appris à utiliser HTML et CSS pour créer un site web responsive et esthétique qui me ressemble pour mon CV.',
  },
  {
    title: 'Job Board',
    type: 'Projet de groupe',
    description: 'Premier projet de groupe qui consistait à créer un site web de recherche d\'emploi. Ce projet m\'a permis de découvrir le travail en équipe et la gestion de projet.',
    skills: ['React', 'SQL', 'JavaScript', 'Express', 'Git', 'Node.js'],
    source: 'https://github.com/EpitechMscProPromo2029/T-WEB-501-BDX-5-1-job_board-1',
    details: '/docs/projet-job-board.pdf',
    image: imgJobBoard,
    context: 'Projet réalisé à 3 personnes en 2 semaines. Nous avons réalisé le backend ensemble et j\'ai fait le frontend de l\'onglet "Mes Likes".',
    objective: 'Développer un site d’offres d’emploi complet : publication d’annonces, comptes utilisateurs et système de likes.',
    learned: 'J’ai découvert React pour l’interface, Express et Node.js pour le serveur, et SQL pour la base de données. J\'ai aussi appris à travailler en équipe et donc à essayer de tirer le meilleur de chacun pour que le projet avance et soit réussi.',
  },
];