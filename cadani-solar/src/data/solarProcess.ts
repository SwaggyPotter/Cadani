export interface SolarProcessStep {
  number: number;
  iconEmoji: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export const solarProcessSteps: SolarProcessStep[] = [
  {
    number: 1,
    iconEmoji: '☀️',
    title: 'Anfrage & Erstkontakt',
    text: 'Sie melden sich bei uns – per Mail, Telefon oder über unser Online-Formular. Wir sprechen kurz über Ihr Vorhaben und prüfen, ob Ihr Dach grundsätzlich für eine Photovoltaikanlage geeignet ist.',
    image: 'https://cdn1.site-media.eu/images/1024/18105416/AdobeStock_566677395-w87VSgGCrUtFLyFGyW_O9w.jpeg',
    imageAlt: 'Solaranlagenplanung und Umsetzung durch Cadani Solarinstallation',
    imagePosition: 'left',
  },
  {
    number: 2,
    iconEmoji: '📍',
    title: 'Vor-Ort-Termin mit Beratung & Drohnenflug',
    text: 'Wir kommen persönlich bei Ihnen vorbei – inklusive Drohnenflug für eine präzise Dachvermessung. Zusätzlich prüfen wir den Zählerschrank und die Gegebenheiten vor Ort. Sie erhalten eine ehrliche Einschätzung ohne Verkaufsgeschwurbel.',
    image: 'https://cdn1.site-media.eu/images/1024/18105444/AdobeStock_1281992900-ND9yPSBmKlvrF9TxxPzPaA.jpeg',
    imageAlt: 'Vor-Ort-Beratung für eine Solaranlage',
    imagePosition: 'right',
  },
  {
    number: 3,
    iconEmoji: '📐',
    title: 'Planung & Angebot',
    text: 'Wir planen Ihre Anlage individuell – basierend auf Ihrem Dach, Ihrem Stromverbrauch und Ihren Wünschen. Anschließend erhalten Sie ein transparentes Festpreis-Angebot inklusive Wirtschaftlichkeitsrechnung.',
    image: 'https://cdn1.site-media.eu/images/1024/18105463/AdobeStock_848313616-SV_KiFJ5RQbufcN59Z-Qhw.jpeg',
    imageAlt: 'Beratung Planung und Solarinstallation aus einer Hand',
    imagePosition: 'left',
  },
  {
    number: 4,
    iconEmoji: '🔧',
    title: 'Montage Ihrer Solaranlage',
    text: 'Unser Montageteam installiert Ihre Anlage fachgerecht mit hochwertigen Materialien, zum Beispiel K2 oder Novotegra. Saubere Arbeit, feste Termine und eine normgerechte Umsetzung stehen dabei im Mittelpunkt.',
    image: 'https://cdn1.site-media.eu/images/1024/16451333/PHOTO-2025-05-23-18-47-45-YXTfefKZgo9K7LgBJ1OShQ.jpg',
    imageAlt: 'Montage einer Photovoltaikanlage auf einem Dach',
    imagePosition: 'right',
  },
  {
    number: 5,
    iconEmoji: '⚡',
    title: 'Elektrik & Inbetriebnahme',
    text: 'Unsere Elektrofachkraft schließt Wechselrichter, Speicher, Wallbox und Smartmeter fachgerecht an. Sobald das System in Betrieb ist, produziert Ihre Anlage eigenen Sonnenstrom.',
    image: 'https://cdn1.site-media.eu/images/1024/18105501/AdobeStock_382953867-NJca-6I6Wz2jpzQwY6fdmQ.jpeg',
    imageAlt: 'Elektrische Inbetriebnahme einer Photovoltaikanlage',
    imagePosition: 'left',
  },
  {
    number: 6,
    iconEmoji: '📄',
    title: 'Netzbetreiber & MaStR-Anmeldung',
    text: 'Nach der Installation melden wir Ihre Anlage beim Netzbetreiber und im Marktstammdatenregister an. Auch Fördermittelanträge, zum Beispiel SolarPLUS, erledigen wir auf Wunsch für Sie.',
    image: 'https://cdn1.site-media.eu/images/1024/18105505/AdobeStock_401361742-gRGGaLF2eG6Fg6j610_nxw.jpeg',
    imageAlt: 'Anmeldung und Dokumentation einer Solaranlage',
    imagePosition: 'right',
  },
  {
    number: 7,
    iconEmoji: '💬',
    title: 'Übergabe & Einweisung',
    text: 'Sie erhalten eine verständliche Einweisung, zum Beispiel in App und Monitoring, sowie alle wichtigen Unterlagen per Mail und als Ausdruck. Auch nach dem Bau bleiben wir für Sie erreichbar.',
    image: 'https://cdn1.site-media.eu/images/1024/18105549/AdobeStock_1427013137-TyCb9V5AxndXieq5Nf3lNQ.jpeg',
    imageAlt: 'Übergabe und Einweisung nach Installation einer Solaranlage',
    imagePosition: 'left',
  },
  {
    number: 8,
    iconEmoji: '📈',
    title: 'Optional: Monitoring & Service',
    text: 'Wenn Sie möchten, behalten wir die Technik im Blick und unterstützen bei Wartung oder Reinigung. Ohne Abo und ohne Zwang – einfach optionaler Service auf Zuruf.',
    image: 'https://cdn1.site-media.eu/images/1024/11779694/AdobeStock_513005164.jpeg',
    imageAlt: 'Monitoring und Service für Photovoltaikanlagen',
    imagePosition: 'right',
  },
];
