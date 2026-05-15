export interface SocialLink {
  label: string;
  href: string;
}

export const company = {
  name: 'Cadani Solar',
  phone: '+49 30 00000000',
  email: 'kontakt@cadani-solar.de',
  address: {
    street: 'Strasse Platzhalter',
    postalCode: '00000',
    city: 'Berlin',
    country: 'Deutschland',
  },
  serviceRegions: ['Berlin', 'Brandenburg'],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: '#',
    },
    {
      label: 'Instagram',
      href: '#',
    },
  ] satisfies SocialLink[],
} as const;
