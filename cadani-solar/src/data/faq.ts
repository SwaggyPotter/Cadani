export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Frage Platzhalter',
    answer: 'Antwort Platzhalter.',
    category: 'Allgemein',
  },
];
