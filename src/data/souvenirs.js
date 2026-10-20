import imgHotel from '../assets/souvenirs/hotel.jpg';
import imgHandball from '../assets/souvenirs/handball.jpg';
import imgVoyage from '../assets/souvenirs/voyage.jpg';

export const souvenirs = [
  {
    id: 'hotel',
    titre: "L'hôtellerie en alternance",
    lieu: 'Bordeaux · Latresne',
    date: '2022 – 2024',
    texte: "Pendant mon BTS Tourisme, j'ai travaillé deux ans en alternance dans un hôtel à Latresne. Accueillir les clients, répondre à leurs demandes et gérer les imprévus m'ont appris à rester calme et à l'écoute en toutes circonstances. J'y ai aussi découvert les bases du marketing et amélioré mon [anglais / espagnol…] au quotidien.",
    acquis: ['Relation client', 'Organisation', 'Marketing', 'Langues étrangères'],
    image: imgHotel,
    alt: "Mes colluèges et moi qui nettoyons la cuisine de l'hotel après le service du petit-déjeuner, en tenue de travail.",
  },
  {
    id: 'handball',
    titre: 'Dix ans de handball',
    lieu: 'HBC Le Barp',
    date: '2016 – 2026',
    texte: "J'ai joué au handball pendant dix ans au HBC Le Barp. Grâce à mes coéquipières, j'ai appris qu'il fallait communiquer en permanence, s'adapter à la stratégie de l'équipe et se faire confiance entre nous. C'est ce même état d'esprit que je retrouve aujourd'hui dans les projets de groupe.",
    acquis: ["Esprit d'équipe", 'Communication', 'Stratégie', 'Persévérance'],
    image: imgHandball,
    alt: "Photo de fin de match de handball.",
  },
  {
    id: 'voyage',
    titre: "Trois mois en Asie de l'Est",
    lieu: 'Chine · Corée du Sud · Japon',
    date: 'Février – avril 2026',
    texte: "Avant de me lancer dans le développement web, je suis partie trois mois en Chine, en Corée du Sud et au Japon. Organiser mon itinéraire, me débrouiller sans parler la langue et m'adapter à des cultures très différentes m'a rendue plus autonome et plus ouverte. Ce voyage a aussi été un vrai moment de réflexion sur ce que je voulais faire ensuite.",
    acquis: ['Autonomie', 'Adaptabilité', 'Ouverture culturelle'],
    image: imgVoyage,
    alt: "Photo de mon amie et moi sur la muraille de Chine.",
  },
];