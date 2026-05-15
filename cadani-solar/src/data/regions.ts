export type RegionState = 'Berlin' | 'Brandenburg';

export interface RegionLandingPage {
  slug: string;
  city: string;
  state: RegionState;
  title: string;
  description: string;
  href: string;
}

export const regions: RegionLandingPage[] = [
  {
    slug: 'pankow',
    city: 'Berlin',
    state: 'Berlin',
    title: 'Photovoltaik in Berlin-Pankow',
    description: 'Platzhalter fuer regionale Landingpage Berlin-Pankow.',
    href: '/regionen/berlin/pankow/',
  },
  {
    slug: 'potsdam',
    city: 'Potsdam',
    state: 'Brandenburg',
    title: 'Photovoltaik in Potsdam',
    description: 'Platzhalter fuer regionale Landingpage Potsdam.',
    href: '/regionen/brandenburg/potsdam/',
  },
];

export const berlinRegions = regions.filter((region) => region.state === 'Berlin');
export const brandenburgRegions = regions.filter((region) => region.state === 'Brandenburg');
