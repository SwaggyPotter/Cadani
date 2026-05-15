export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Über Cadani',
    href: '/ueber-uns',
    children: [{ label: 'Zertifikate', href: '/zertifikate' }],
  },
  { label: 'Konfigurator', href: '/angebot-solaranlage' },
  { label: 'Strom & Gas', href: '/strom-gas' },
  { label: 'Check', href: '/check' },
  { label: 'Produkte', href: '/produkte' },
  { label: 'News', href: '/news' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export const footerNavigation: NavigationItem[] = [
  { label: 'FAQ', href: '/faq/' },
  { label: 'Foerderung', href: '/foerderung/' },
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];
