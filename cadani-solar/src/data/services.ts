export interface Service {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const services: Service[] = [
  {
    slug: 'photovoltaik',
    title: 'Photovoltaik',
    description: 'Platzhalter fuer Photovoltaik-Leistung.',
    href: '/photovoltaik/',
  },
  {
    slug: 'stromspeicher',
    title: 'Stromspeicher',
    description: 'Platzhalter fuer Stromspeicher-Leistung.',
    href: '/stromspeicher/',
  },
  {
    slug: 'wallbox',
    title: 'Wallbox',
    description: 'Platzhalter fuer Wallbox-Leistung.',
    href: '/wallbox/',
  },
  {
    slug: 'beratung',
    title: 'Beratung',
    description: 'Platzhalter fuer Beratungsleistung.',
    href: '/beratung/',
  },
  {
    slug: 'installation',
    title: 'Installation',
    description: 'Platzhalter fuer Installationsleistung.',
    href: '/leistungen/',
  },
  {
    slug: 'wartung',
    title: 'Wartung',
    description: 'Platzhalter fuer Wartungsleistung.',
    href: '/leistungen/',
  },
];
