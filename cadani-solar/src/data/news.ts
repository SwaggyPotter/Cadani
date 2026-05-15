export type NewsCategory =
  | 'Photovoltaik Wissen'
  | 'Batteriespeicher'
  | 'Planung'
  | 'Wirtschaftlichkeit'
  | 'Installation'
  | 'Smart Home'
  | 'Unternehmen';

export interface NewsPost {
  title: string;
  slug: string;
  category: NewsCategory;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const newsCategories = [
  'Alle',
  'Photovoltaik Wissen',
  'Batteriespeicher',
  'Planung',
  'Wirtschaftlichkeit',
  'Installation',
  'Smart Home',
  'Unternehmen',
] as const;

const roofImage = '/images/sections/solar-faq-background.jpg';
const checkImage = '/images/sections/solar-check-hero.png';

export const newsPosts: NewsPost[] = [
  {
    title: 'Die Solaranlage und Smart Home',
    slug: 'die-solaranlage-und-smarthome',
    category: 'Smart Home',
    date: '2025-08-26',
    description:
      'Eine Solaranlage und Smart Home - wie laesst sich das kombinieren? Wir erklaeren, wie Photovoltaik, Speicher, Wallbox und intelligente Steuerung zusammenspielen.',
    image: checkImage,
    imageAlt: 'Smart Home Steuerung einer Solaranlage mit Photovoltaik und Batteriespeicher',
  },
  {
    title: 'Welche Batteriespeicher sind gut?',
    slug: 'welche-batteriespeicher-sind-gut',
    category: 'Batteriespeicher',
    date: '2025-08-11',
    description:
      'Welche Batteriespeicher passen zu einer Solaranlage und worauf sollte man achten? Wir zeigen wichtige Unterschiede bei Effizienz, Lebensdauer und Wirtschaftlichkeit.',
    image: roofImage,
    imageAlt: 'Moderner Batteriespeicher fuer eine Photovoltaikanlage im Hausanschlussraum',
  },
  {
    title: 'Aktuelle Wetterlage: Wolken, Regen und Solar',
    slug: 'aktuelle-wetterlage-wolken-regen-und-solar',
    category: 'Photovoltaik Wissen',
    date: '2025-08-03',
    description:
      'Was bringt eine Solaranlage bei Regen, Wolken und diffusem Licht? Wir erklaeren, wie Photovoltaik auch bei wechselhaftem Wetter Strom erzeugt.',
    image: roofImage,
    imageAlt: 'Photovoltaikanlage auf einem Dach bei bewoelktem Himmel',
  },
  {
    title: 'Cadani Solar bietet jetzt auch Dachreinigung',
    slug: 'cadani-solar-bietet-jetzt-auch-dachreinigung',
    category: 'Unternehmen',
    date: '2025-07-30',
    description:
      'Cadani Solar erweitert das Leistungsspektrum um Dachreinigung und Dachpflege - ideal zur Vorbereitung und Werterhaltung von Dachflaechen.',
    image: checkImage,
    imageAlt: 'Dachreinigung als Vorbereitung fuer eine Solaranlage',
  },
  {
    title: 'Amortisation einer Solaranlage',
    slug: 'amortisation-einer-solaranlage',
    category: 'Wirtschaftlichkeit',
    date: '2025-07-25',
    description:
      'Wie lange dauert es, bis sich eine Photovoltaikanlage amortisiert? Wir erklaeren die wichtigsten Faktoren fuer Wirtschaftlichkeit und Eigenverbrauch.',
    image: roofImage,
    imageAlt: 'Photovoltaikanlage auf Einfamilienhaus zur Berechnung der Amortisation',
  },
  {
    title: 'Brauche ich eine Baugenehmigung fuer meine Solaranlage?',
    slug: 'brauche-ich-eine-baugenehmigung-fuer-meine-solaranlage',
    category: 'Planung',
    date: '2025-07-16',
    description:
      'Viele Hausbesitzer fragen sich, ob eine Solaranlage genehmigungspflichtig ist. Wir erklaeren, worauf Sie bei Planung und Montage achten sollten.',
    image: checkImage,
    imageAlt: 'Solarmodule auf einem Wohnhausdach waehrend der Planung einer PV-Anlage',
  },
  {
    title: 'Wir bauen Ihre Solaranlage schnell und zuverlaessig',
    slug: 'wir-bauen-ihre-solaranlage-schnell-und-zuverlaessig',
    category: 'Installation',
    date: '2025-07-09',
    description:
      'Von der Beratung bis zur Montage: Cadani Solar begleitet Hausbesitzer bei der schnellen und zuverlaessigen Installation ihrer Solaranlage.',
    image: roofImage,
    imageAlt: 'Montage einer Solaranlage durch ein Installationsteam auf einem Hausdach',
  },
  {
    title: 'Neu bei Cadani: Gebaeudeservice & Solartechnik aus einer Hand',
    slug: 'neu-bei-cadani-gebaeudeservice-solartechnik-aus-einer-hand',
    category: 'Unternehmen',
    date: '2025-06-23',
    description:
      'Cadani Solar erweitert das Angebot um professionellen Gebaeudeservice und verbindet Solartechnik mit praktischen Leistungen rund ums Gebaeude.',
    image: checkImage,
    imageAlt: 'Gebaeudeservice und Solartechnik fuer Hausbesitzer in Berlin und Brandenburg',
  },
  {
    title: 'Photovoltaik fuer Doppelhaushaelften und Reihenhaeuser - was ist moeglich?',
    slug: 'photovoltaik-fuer-doppelhaushaelften-und-reihenhaeuser-was-ist-moeglich',
    category: 'Planung',
    date: '2025-06-11',
    description:
      'Auch Doppelhaushaelften und Reihenhaeuser eignen sich oft fuer Photovoltaik. Wir zeigen, worauf es bei Dachflaeche, Verschattung und Planung ankommt.',
    image: roofImage,
    imageAlt: 'Photovoltaikanlage auf Reihenhaus oder Doppelhaushaelfte',
  },
];

export function getNewsPostBySlug(slug: string | undefined) {
  return newsPosts.find((post) => post.slug === slug);
}

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}
