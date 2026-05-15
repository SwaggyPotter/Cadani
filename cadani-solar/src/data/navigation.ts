export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Leistungen',
    href: '/leistungen/',
    children: [
      { label: 'Photovoltaik', href: '/photovoltaik/' },
      { label: 'Stromspeicher', href: '/stromspeicher/' },
      { label: 'Wallbox', href: '/wallbox/' },
      { label: 'Beratung', href: '/beratung/' },
    ],
  },
  { label: 'Referenzen', href: '/referenzen/' },
  { label: 'Wissen', href: '/wissen/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const footerNavigation: NavigationItem[] = [
  { label: 'FAQ', href: '/faq/' },
  { label: 'Foerderung', href: '/foerderung/' },
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];
