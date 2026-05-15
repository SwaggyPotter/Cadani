export interface Project {
  slug: string;
  title: string;
  location: string;
  region: string;
  image: string;
  imageAlt: string;
  facts: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'projekt-kaulsdorf',
    title: 'Projekt in Kaulsdorf',
    location: 'Berlin-Kaulsdorf',
    region: 'Berlin',
    image: 'https://cdn1.site-media.eu/images/576/10389652/PHOTO-2024-08-20-19-59-55.jpg',
    imageAlt: 'Photovoltaikanlage in Berlin-Kaulsdorf von Cadani Solar',
    facts: [
      'Fertigstellung einer 23 kWp-Anlage',
      '21 kW Speicher von Huawei',
      'Zwei Wechselrichter von Huawei',
      'Huawei Wallbox mit 22 kW',
      '51 Aiko Solarmodule',
      'Huawei EMMA-A02 Energie-Management-Assistent',
    ],
    featured: true,
  },
  {
    slug: 'projekt-erkner',
    title: 'Projekt in Erkner',
    location: 'Erkner',
    region: 'Brandenburg',
    image: 'https://cdn1.site-media.eu/images/576/10497824/PHOTO-2024-08-28-10-36-05.jpg',
    imageAlt: 'Photovoltaikanlage in Erkner von Cadani Solar',
    facts: [
      'Fertigstellung einer 7 kWp-Anlage',
      '14 kW Speicher von Huawei',
      'Wechselrichter von Huawei',
      '18 Aiko Solarmodule',
    ],
    featured: true,
  },
  {
    slug: 'projekt-schoeneiche',
    title: 'Projekt in Schöneiche',
    location: 'Schöneiche bei Berlin',
    region: 'Brandenburg',
    image: 'https://cdn1.site-media.eu/images/576%2C941x640%2B0%2B53/11000082/IMG_1780.jpg',
    imageAlt: 'Photovoltaikanlage in Schöneiche von Cadani Solar',
    facts: [
      'Fertigstellung einer 8,8 kWp-Anlage',
      '15,4 kW Speicher von Fenecon',
      '20 Aiko 440 Solarmodule',
    ],
    featured: true,
  },
];
