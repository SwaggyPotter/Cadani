export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export const footerLinks: FooterLink[] = [
  {
    label: 'Jobs',
    href: 'https://heyflow.id/cadani-vertrieb',
    external: true,
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Regionen',
    href: '/regionen',
  },
  {
    label: 'Wissen',
    href: '/wissen',
  },
  {
    label: 'Impressum',
    href: '/impressum',
  },
  {
    label: 'Datenschutz',
    href: '/datenschutz',
  },
  {
    label: 'AGB',
    href: '/agb',
  },
  {
    label: 'Barrierefreiheit',
    href: '/barrierefreiheit',
  },
];
