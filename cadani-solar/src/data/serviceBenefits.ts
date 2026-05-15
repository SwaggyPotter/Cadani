export type ServiceBenefitIcon = 'thumb' | 'cost' | 'experience' | 'speed';

export interface ServiceBenefit {
  title: string;
  text: string;
  icon: ServiceBenefitIcon;
}

export const serviceBenefits: ServiceBenefit[] = [
  {
    title: 'Kundenzufriedenheit',
    text: 'Wir gehen auf Ihre Wünsche ein und entwickeln individuelle Lösungen, die zu Ihrem Gebäude, Ihrem Verbrauch und Ihren Zielen passen.',
    icon: 'thumb',
  },
  {
    title: 'Vorhersehbare Kosten',
    text: 'Transparenz und Qualität sind uns wichtig. Sie erhalten alle relevanten Kosten vorab in einem nachvollziehbaren Angebot.',
    icon: 'cost',
  },
  {
    title: 'Lange Erfahrung',
    text: 'Wir arbeiten mit erfahrenen Solarpartnern und zuverlässigen Handwerksbetrieben zusammen, um Ihre Anlage fachgerecht umzusetzen.',
    icon: 'experience',
  },
  {
    title: 'Schnelle Installation',
    text: 'Wir sorgen für eine zügige und zuverlässige Abwicklung – vom Angebot über die Planung bis zur Installation Ihrer Solaranlage.',
    icon: 'speed',
  },
];
