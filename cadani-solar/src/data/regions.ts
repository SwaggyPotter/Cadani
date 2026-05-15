export type RegionState = 'Berlin' | 'Brandenburg';

export interface RegionLandingPage {
  slug: string;
  city: string;
  state: RegionState;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  seoText: string;
  href: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  references: Array<{
    title: string;
    location?: string;
    href?: string;
  }>;
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

export const regions: RegionLandingPage[] = [
  {
    slug: 'pankow',
    city: 'Berlin',
    state: 'Berlin',
    title: 'Photovoltaik in Berlin-Pankow',
    description: 'Platzhalter fuer regionale Landingpage Berlin-Pankow.',
    metaTitle: 'Photovoltaik Berlin-Pankow | Cadani Solar',
    metaDescription: 'Meta Description Platzhalter fuer Photovoltaik in Berlin-Pankow.',
    h1: 'Photovoltaik in Berlin-Pankow',
    seoText: 'Individueller SEO-Text Platzhalter fuer Berlin-Pankow.',
    href: '/regionen/berlin/pankow/',
    faq: [
      {
        question: 'FAQ Platzhalter fuer Berlin-Pankow',
        answer: 'Individuelle Antwort Platzhalter fuer Berlin-Pankow.',
      },
    ],
    references: [
      {
        title: 'Referenz Platzhalter Berlin-Pankow',
        location: 'Berlin-Pankow',
      },
    ],
    cta: {
      title: 'Beratung fuer Berlin-Pankow anfragen',
      text: 'CTA-Text Platzhalter fuer Berlin-Pankow.',
      buttonLabel: 'Kontakt aufnehmen',
      buttonHref: '/kontakt/',
    },
  },
  {
    slug: 'potsdam',
    city: 'Potsdam',
    state: 'Brandenburg',
    title: 'Photovoltaik in Potsdam',
    description: 'Platzhalter fuer regionale Landingpage Potsdam.',
    metaTitle: 'Photovoltaik Potsdam | Cadani Solar',
    metaDescription: 'Meta Description Platzhalter fuer Photovoltaik in Potsdam.',
    h1: 'Photovoltaik in Potsdam',
    seoText: 'Individueller SEO-Text Platzhalter fuer Potsdam.',
    href: '/regionen/brandenburg/potsdam/',
    faq: [
      {
        question: 'FAQ Platzhalter fuer Potsdam',
        answer: 'Individuelle Antwort Platzhalter fuer Potsdam.',
      },
    ],
    references: [
      {
        title: 'Referenz Platzhalter Potsdam',
        location: 'Potsdam',
      },
    ],
    cta: {
      title: 'Beratung fuer Potsdam anfragen',
      text: 'CTA-Text Platzhalter fuer Potsdam.',
      buttonLabel: 'Kontakt aufnehmen',
      buttonHref: '/kontakt/',
    },
  },
];

export const berlinRegions = regions.filter((region) => region.state === 'Berlin');
export const brandenburgRegions = regions.filter((region) => region.state === 'Brandenburg');
