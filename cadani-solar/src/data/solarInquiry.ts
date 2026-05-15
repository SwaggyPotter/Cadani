export interface SolarInquiryOption {
  label: string;
  value: string;
  image?: string;
  imageAlt?: string;
}

export interface SolarInquiryStep {
  id: string;
  title: string;
  question: string;
  type: 'options' | 'fields';
  options?: SolarInquiryOption[];
}

export const solarInquirySteps: SolarInquiryStep[] = [
  {
    id: 'roofType',
    title: 'Ihre Dachart',
    question: 'Bitte wählen Sie Ihre Dachart aus',
    type: 'options',
    options: [
      {
        label: 'Walmdach',
        value: 'walmdach',
        image:
          'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/8638669a-e7d0-4532-992d-a599449940a8/Illustration-04.svg',
        imageAlt: 'Illustration Walmdach',
      },
      {
        label: 'Pultdach',
        value: 'pultdach',
        image:
          'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/a83358cb-ebe2-49b5-8ae5-9391804a5333/Illustration-02.svg',
        imageAlt: 'Illustration Pultdach',
      },
      {
        label: 'Flachdach',
        value: 'flachdach',
        image:
          'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/078a68a4-bb77-4d0f-978b-d80eda3e9c60/Illustration-03.svg',
        imageAlt: 'Illustration Flachdach',
      },
      {
        label: 'Satteldach',
        value: 'satteldach',
        image:
          'https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/673c3d40-3089-4a65-9fae-9918b7fb1281/Illustration-01.svg',
        imageAlt: 'Illustration Satteldach',
      },
    ],
  },
  {
    id: 'powerUsage',
    title: 'Stromverbrauch',
    question: 'Wie hoch ist Ihr jährlicher Stromverbrauch?',
    type: 'options',
    options: [
      { label: 'Unter 3.000 kWh', value: 'unter-3000' },
      { label: '3.000 bis 5.000 kWh', value: '3000-5000' },
      { label: '5.000 bis 8.000 kWh', value: '5000-8000' },
      { label: 'Über 8.000 kWh', value: 'ueber-8000' },
      { label: 'Weiß ich nicht', value: 'unbekannt' },
    ],
  },
  {
    id: 'extras',
    title: 'Speicher & Wallbox',
    question: 'Interessieren Sie sich zusätzlich für Speicher oder Wallbox?',
    type: 'options',
    options: [
      { label: 'Nur Photovoltaik', value: 'photovoltaik' },
      { label: 'Photovoltaik mit Speicher', value: 'speicher' },
      { label: 'Photovoltaik mit Wallbox', value: 'wallbox' },
      { label: 'Photovoltaik mit Speicher und Wallbox', value: 'speicher-wallbox' },
      { label: 'Noch unsicher', value: 'unsicher' },
    ],
  },
];
