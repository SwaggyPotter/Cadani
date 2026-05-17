export interface ReferenceImage {
  src: string;
  alt: string;
  title?: string;
  location?: string;
  power?: string;
  width: number;
  height: number;
}

export const references: ReferenceImage[] = [
  // --- Frühe Projekte 2024 (Januar) ---
  {
    src: 'https://cdn1.site-media.eu/images/1200/7536048/PHOTO-2024-01-26-15-14-48.jpg',
    alt: 'Photovoltaikanlage von Cadani Solar in Berlin und Brandenburg',
    title: 'Solarinstallation',
    location: 'Berlin',
    width: 1200,
    height: 900,
  },

  // --- Projekte Mai 2024 ---
  {
    src: 'https://cdn1.site-media.eu/images/863/9042674/PHOTO-2024-05-29-22-42-03.jpg',
    alt: 'Solaranlage auf Dach, installiert von Cadani Solar',
    title: 'Dachmontage',
    location: 'Berlin',
    width: 863,
    height: 1150,
  },
  {
    src: 'https://cdn1.site-media.eu/images/1200/9042677/PHOTO-2024-05-29-22-42-032.jpg',
    alt: 'Photovoltaikmodule auf einem Hausdach in Berlin',
    title: 'Photovoltaikanlage',
    location: 'Berlin',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://cdn1.site-media.eu/images/1200/9042672/PHOTO-2024-05-29-22-42-042.jpg',
    alt: 'Neue Solaranlage von Cadani Solarinstallation',
    title: 'Solarprojekt',
    location: 'Berlin',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://cdn1.site-media.eu/images/1179/9042667/PHOTO-2024-05-29-22-42-06.jpg',
    alt: 'Solarmodule auf einem Dach in Berlin und Brandenburg',
    title: 'Solaranlage',
    location: 'Berlin',
    width: 1179,
    height: 786,
  },
  {
    src: 'https://cdn1.site-media.eu/images/1200/9042665/PHOTO-2024-05-29-22-45-37.jpg',
    alt: 'Jenko Solarmodule 440, Huawei Speicher 10 kW, Huawei Wechselrichter',
    title: '10 kW Speicher',
    location: 'Berlin',
    width: 1200,
    height: 900,
  },
  {
    src: 'https://cdn1.site-media.eu/images/1200/9072882/PHOTO-2024-05-31-19-46-19.jpg',
    alt: 'Photovoltaikanlage nach Fertigstellung in Berlin',
    title: 'Fertiggestellte Anlage',
    location: 'Berlin',
    width: 1200,
    height: 800,
  },

  // --- Frühe Projekte (Sonstige 2024) ---
  {
    src: 'https://cdn1.site-media.eu/images/1200/8176314/IMG_0191.JPEG',
    alt: 'Solaranlage auf einem Wohnhaus, installiert von Cadani Solar',
    title: 'Wohnhausanlage',
    location: 'Berlin',
    width: 1200,
    height: 900,
  },
  {
    src: 'https://cdn1.site-media.eu/images/900/8176718/fd574df6-5182-4e6c-9d46-d144b76b209b.JPEG',
    alt: 'Solarinstallation Detailaufnahme von Cadani Solar',
    title: 'Detailmontage',
    location: 'Berlin',
    width: 900,
    height: 1200,
  },
  {
    src: 'https://cdn1.site-media.eu/images/1200/8176721/7da77587-7244-4d0a-b4c3-77c23bfde76e.JPEG',
    alt: 'Photovoltaikanlage Übersicht auf einem Berliner Dach',
    title: 'Dachübersicht',
    location: 'Berlin',
    width: 1200,
    height: 900,
  },

  // --- Projekt Kaulsdorf (August 2024) ---
  {
    src: 'https://cdn1.site-media.eu/images/1200/10497820/PHOTO-2024-08-20-19-59-552.jpg',
    alt: 'Photovoltaikanlage in Berlin-Kaulsdorf von Cadani Solar',
    title: '23 kWp Anlage',
    location: 'Berlin-Kaulsdorf',
    power: '23 kWp',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://cdn1.site-media.eu/images/576/10389652/PHOTO-2024-08-20-19-59-55.jpg',
    alt: 'Kaulsdorf Solaranlage Detailansicht von Cadani Solar',
    title: '23 kWp Anlage',
    location: 'Berlin-Kaulsdorf',
    power: '23 kWp',
    width: 576,
    height: 768,
  },

  // --- Projekt Erkner (August 2024) ---
  {
    src: 'https://cdn1.site-media.eu/images/1200/10497824/PHOTO-2024-08-28-10-36-05.jpg',
    alt: 'Photovoltaikanlage in Erkner von Cadani Solar',
    title: '7 kWp Anlage',
    location: 'Erkner',
    power: '7 kWp',
    width: 1200,
    height: 900,
  },

  // --- Projekt Schöneiche ---
  {
    src: 'https://cdn1.site-media.eu/images/576%2C941x640%2B0%2B53/11000082/IMG_1780.jpg',
    alt: 'Photovoltaikanlage in Schöneiche von Cadani Solar',
    title: '8,8 kWp Anlage',
    location: 'Schöneiche bei Berlin',
    power: '8,8 kWp',
    width: 941,
    height: 640,
  },

  // --- Dachinstallation (Referenzfoto) ---
  {
    src: 'https://cdn1.site-media.eu/images/1200/11578691/Dachinstallation.png',
    alt: 'Dachinstallation einer Photovoltaikanlage durch Cadani Solar',
    title: 'Dachinstallation',
    location: 'Berlin und Brandenburg',
    width: 1200,
    height: 800,
  },

  // --- Dachmontage Mai 2025 ---
  {
    src: 'https://cdn1.site-media.eu/images/1024/16451333/PHOTO-2025-05-23-18-47-45-YXTfefKZgo9K7LgBJ1OShQ.jpg',
    alt: 'Montierte Photovoltaikmodule auf einem Dach in Berlin und Brandenburg',
    title: 'Dachmontage',
    location: 'Berlin und Brandenburg',
    width: 1024,
    height: 683,
  },
  {
    src: 'https://cdn1.site-media.eu/images/1599/16451368/PHOTO-2025-05-23-18-47-44-Qegf4BbTSCvNRyvrOapcug.jpg',
    alt: 'Photovoltaikmodule auf einem Dach als Referenzanlage',
    title: 'Referenzanlage',
    location: 'Brandenburg',
    width: 1599,
    height: 1066,
  },

  // --- Neue Referenzfotos August 2025 ---
  {
    src: 'https://cdn1.site-media.eu/images/1200/18767022/PHOTO-2025-08-27-11-46-104-GESXpwWwsJA8VaxT2aYwxQ.jpg',
    alt: 'Photovoltaikanlage von Cadani Solar, August 2025',
    title: 'Solarinstallation',
    location: 'Berlin und Brandenburg',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://cdn1.site-media.eu/images/900/18767005/PHOTO-2025-08-27-11-46-085-qYSqSJxV05mJ1H7QqQ1Nww.jpg',
    alt: 'Solaranlage Detailaufnahme von Cadani Solar, August 2025',
    title: 'Detailmontage',
    location: 'Berlin und Brandenburg',
    width: 900,
    height: 1200,
  },
  {
    src: 'https://cdn1.site-media.eu/images/1200/18767008/PHOTO-2025-08-27-11-46-087-9q9c4PeC0HAQ4se-g-eMUQ.jpg',
    alt: 'Photovoltaikanlage auf einem Hausdach, August 2025',
    title: 'Solaranlage',
    location: 'Berlin und Brandenburg',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://cdn1.site-media.eu/images/900/18767006/PHOTO-2025-08-27-11-46-069-mNSQmkYpMFUu96qkzrcesA.jpg',
    alt: 'Cadani Solar Installationsdetail, August 2025',
    title: 'Montagedetail',
    location: 'Berlin und Brandenburg',
    width: 900,
    height: 1200,
  },

  // TODO: Weitere Fotos vom August 2025 hier ergänzen.
  // Bitte CDN-URLs aus dem CMS kopieren (IDs: 18766xxx, 21727xxx).
  // Format: { src: 'https://cdn1.site-media.eu/images/1200/{ID}/{FILENAME}.jpg', alt: '...', title: '...', location: '...', width: 1200, height: 800 }
];
